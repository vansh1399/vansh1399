import { View, StyleSheet, TouchableOpacity, Text, FlatList, TextInput, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import RBSheet from 'react-native-raw-bottom-sheet';
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Metrics/Metrics';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import { getuserdata, storephoto } from '../../redux/Slice/auth.slice';
import { object, string } from 'yup';
import { useFormik } from 'formik';


const items = [('')];



export default function Profilevisit() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getuserdata())
    }, [])

    const [image, setImage] = useState('')
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if (auth.auth) {
            setValues(auth.auth)
        }
    }, [auth.auth])


    let signuSchema = object({
        name: string().required('Enter your name'),
        About: string().required('Enter your About'),
        Phone: string().required('Enter your Phone number'),
    });

    const formik = useFormik({
        initialValues: {
            name: auth.auth?.name || '',
            About: auth.auth?.About || '',
            Phone: auth.auth?.Phone || ''
        },
        validationSchema: signuSchema,
        onSubmit: (values, { resetForm }) => {
            console.log("sjssnscjdjdjjjfjfkfjjdf", values);
            // resetForm()
            let urlData = ''

            if (image === '') {
                if (auth.auth?.url) {
                    urlData = auth.auth?.url
                }
            } else {
                urlData = image
            }
            dispatch(storephoto({ ...values, url: urlData, uid: auth.auth.uid }))
        },
    });

    const { handleChange, errors, values, handleSubmit, handleBlur, touched, setValues } = formik

    const refRBSheet = useRef([]);
    const refVBSheet = useRef([]);

    const handleCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setImage(image.path);

            let urlData = image.path;
            dispatch(storephoto({
                ...values,
                url: urlData,
                uid: auth.auth.uid
            }));

            refRBSheet.current[0]?.close();
        });
    }

    const handleGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path);
        
            let urlData = image.path;
            dispatch(storephoto({
                ...values,
                url: urlData,
                uid: auth.auth.uid
            }));

            refRBSheet.current[0]?.close();
        });
    }

    
    const renderItem = ({ item, index, refRBSheet }) => {
        return (
            <View>
                <RBSheet ref={ref => (refRBSheet.current[index] = ref)}>
                    <View style={styles.bottomSheetContainer}>
                        <View style={styles.bottommini}>

                            <View style={styles.bottomcover}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                                        <TouchableOpacity
                                            onPress={() => refRBSheet.current[0]?.close()}
                                        ><Fontisto name="close-a" size={15} color="#A9AEB1" /></TouchableOpacity>
                                    </View>
                                    <View style={{ marginLeft: 80 }}>
                                        <Text style={styles.bottomSheetText}>Profile photo</Text>
                                    </View>
                                </View>

                                <View style={styles.bottomiconhead}>
                                    <View>
                                        <TouchableOpacity style={styles.imagecircle2} onPress={() => handleCamera()}>
                                            <Feather name="camera" size={24} color="#DB3022" />
                                            <View style={{ marginTop: 10 }}><Text style={{ color: 'black', fontSize: 15 }}>Camera</Text></View>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.imagecircle2} onPress={() => handleGallery()}>
                                            <MaterialCommunityIcons name="image-outline" size={24} color="#DB3022" />
                                            <View style={{ marginTop: 10 }}><Text style={{ color: 'black', fontSize: 15 }}>Gallery</Text></View>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.imagecircle2} >
                                            <Fontisto name="smiling" size={24} color="#DB3022" />
                                            <View style={{ marginTop: 10 }}><Text style={{ color: 'black', fontSize: 15 }}>Avatar</Text></View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </RBSheet>
            </View>
            //  {item + 1}
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.profileView}>
                <TouchableOpacity style={styles.profilecircle} onPress={() => refRBSheet.current[0]?.open()}>

                    {
                        auth.auth?.url ?
                            <Image style={styles.profilecircle} source={{ uri: auth.auth?.url }} />
                            :
                            <FontAwesome name="user" size={100} color="#A9AEB1" />
                    }

                </TouchableOpacity>
                <View style={styles.cameracircle}>
                    <TouchableOpacity onPress={() => refRBSheet.current[0]?.open()}>
                        <Feather name="camera" size={23} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.ProfilebodyHead}>
                <TouchableOpacity>
                    <View style={styles.Profilebody}>
                        <View style={{ width: '10%', justifyContent: 'center' }}><TouchableOpacity><FontAwesome name="user" size={23} color="gray" /></TouchableOpacity></View>
                        <View style={{ width: '85%' }}>
                            <TextInput
                                name="name"
                                value={values.name}
                                style={styles.input}
                                placeholder='Name'
                                autoCapitalize="none"
                                placeholderTextColor='#9B9B9B'
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur("name")}
                            ></TextInput>
                        </View>

                        <View style={{ width: '10%' }}>
                            <TouchableOpacity onPress={() => refVBSheet.current[0]?.open()}>
                                {/* <MaterialIcons name="edit" size={23} color="#DB3022" /> */}
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
                <Text style={{ color: 'red', size: 20 }}>{errors.name && touched.name ? errors.name : ''}</Text>
                <View style={{ width: '90%', borderWidth: 0.3, marginLeft: 48, backgroundColor: 'black' }}></View>
                <TouchableOpacity>
                    <View style={styles.Profilebody}>
                        <View style={{ width: '10%', justifyContent: 'center' }}><TouchableOpacity><EvilIcons name="exclamation" size={26} color="gray" /></TouchableOpacity></View>
                        <View style={{ width: '85%' }}>
                            <TextInput
                                name="About"
                                value={values.About}
                                style={styles.input}
                                placeholder='About'
                                autoCapitalize="none"
                                placeholderTextColor='#9B9B9B'
                                onChangeText={handleChange('About')}
                                onBlur={handleBlur("About")}
                            ></TextInput>
                        </View>

                    </View>

                </TouchableOpacity>
                <Text style={{ color: 'red', size: 20 }}>{errors.About && touched.About ? errors.About : ''}</Text>
                <View style={{ width: '90%', borderWidth: 0.3, marginLeft: 48, backgroundColor: 'black' }}></View>
                <TouchableOpacity>
                    <View style={styles.Profilebody}>
                        <View style={{ width: '10%', justifyContent: 'center' }}><TouchableOpacity><MaterialIcons name="phone" size={23} color="gray" /></TouchableOpacity></View>
                        <View style={{ width: '85%', }}>
                            <TextInput
                                name="Phone"
                                value={values.Phone}
                                style={styles.input}
                                placeholder='Phone'
                                autoCapitalize="none"
                                placeholderTextColor='#9B9B9B'
                                onChangeText={handleChange('Phone')}
                                onBlur={handleBlur("Phone")}
                            ></TextInput>
                        </View>

                        {/* <View style={{ width: '10%' }}><TouchableOpacity><MaterialIcons name="edit" size={23} color="#DB3022" /></TouchableOpacity></View> */}
                    </View>
                </TouchableOpacity>
                <Text style={{ color: 'red', size: 20 }}>{errors.Phone && touched.Phone ? errors.Phone : ''}</Text>
                <View style={{ width: '90%', borderWidth: 0.3, marginLeft: 48, backgroundColor: 'black' }}></View>

                <View style={{ flex: 1 }} >
                    <FlatList
                        data={items}
                        renderItem={(props) => renderItem({ ...props, refRBSheet })}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>


            </View>
            <View>
                <TouchableOpacity style={styles.checkbutton} onPress={handleSubmit}>
                    <Text style={styles.CheckText}>Submit</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    profileView: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        position: 'relative',
    },
    profilecircle: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 0,
        backgroundColor: '#DDDFE0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ProfilebodyHead: {
        flex: 0,
        marginTop: 20
        // justifyContent:'center',
        // alignItems:'center'
    },
    Profilebody: {
        width: '90%',
        flexDirection: 'row',
        // columnGap: 10,
        margin: 15
    },
    cameracircle: {
        width: 49,
        height: 49,
        position: 'absolute',
        borderRadius: 50,
        top: 106,
        left: 240,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DB3022',
        elevation: 4
    },
    imagecircle2: {
        width: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    bottomiconhead: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 28,
        marginTop: 55,
    },
    bottomTextView: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 16
    },
    bottommini: {
        rowGap: 10,
        marginTop: 5,
    },
    bottomSheetContainer: {
        margin: 20
    },
    bottomSheetText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        marginTop: 5
    },
    bottomcover: {
        width: '100%',
        height: 200,

    },
    inputStyle: {
        width: '80%',
        height: 40,
        borderWidth: 0.8,
        borderRadius: 5,
    },
    cancelText: {
        color: '#DB3022'
    },
    input: {
        backgroundColor: '#FFFFFF',
        color: 'black',
        fontSize: moderateScale(15),
        fontWeight: '600',
    },
    checkbutton: {
        width: verticalScale(200),
        backgroundColor: '#DB3022',
        height: verticalScale(50),
        alignItems: 'center',
        padding: 15,
        borderRadius: moderateScale(50),
        margin: 'auto',
        marginTop: 100

    },
    CheckText: {
        color: 'white',
        fontSize: moderateScale(18),
        fontFamily: 'Metropolis-Medium'
    },
})


