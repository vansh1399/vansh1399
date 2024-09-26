import { View, Text, ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Metrics/Metrics'
import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import { date, object, string } from 'yup';
import { addshhipadress, updateaddrress } from '../../redux/Slice/addshipingadress.slice';
import { useDispatch } from 'react-redux';

export default function AddShipingAddress({ route, navigation }) {
    console.log("routeieoepoakakslosdspc",route);

    const dispatch = useDispatch()
  
    // const addship = useSelector(state => state.brands);
    // console.log("skskskkskskskkkkllllllllklklklk",brand.brand);

    useEffect(() => {
        if(route.params){
            setValues(route.params)
        }
    }, [route.params])

    const handleSumbit1=(data)=>{
        if(route.params){
            dispatch(updateaddrress({newData : {...data, uid:'parth'} , oldData : route.params}))
        } else{
            dispatch(addshhipadress({...data, uid:'parth'}))
        }
     
        navigation.navigate("ShippingAddresses")
    }


    let userSchema = object({
        full_name: string().required("Enter producte Full_name").matches(/^[a-zA-Z ]+$/, "enter valid Full_name"),
        address: string().required("enter your discretion"),
        city: string().required("selecte your City"),
        state: string().required("selecte your State "),
        zip_code: string().required("Please enter Zip Code").matches(/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/, "enter Zip_Code"),
        country: string().required("selecte your category Country"),
    });

    const formik = useFormik({
        initialValues: {
            full_name: '',
            address:'',
            city:'',
            state:'',
            zip_code:'',
            country:''
        },
        validationSchema: userSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            handleSumbit1(values)
            // resetForm();
            
        },
        
    });

    const { handleChange, errors, values, handleSubmit, handleBlur, touched, setValues } = formik

    return (
        <ScrollView style={styles.container}>
            <StatusBar
                animated={true}
                translucent backgroundColor="transparent"
                barStyle="dark-content"
            />
            {/* <View style={styles.ArrowView}>
                <Text style={styles.KeyboardArrow}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></Text>
                <Text style={styles.ArrowText}>Add shipping address</Text>
            </View> */}
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Full name'
                    placeholderTextColor='#9B9B9B'
                    onChangeText={handleChange('full_name')}
                    onBlur={handleBlur("full_name")}
                    value={values?.full_name}
                />
                  <Text style={{ color: 'red',size:20 }}>{errors.full_name && touched.full_name ? errors.full_name : ''}</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Adrress'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur("address")}
                    value={values?.address}
                />
                  <Text style={{ color: 'red',size:20 }}>{errors.address && touched.address? errors.address : ''}</Text>
                <TextInput
                    style={styles.input}
                    placeholder='City'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur("city")}
                    value={values?.city}
                />
                  <Text style={{ color: 'red' ,size:20}}>{errors.city && touched.city? errors.city : ''}</Text>
                <TextInput
                    style={styles.input}
                    placeholder='State/Province/Region'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'
                    onChangeText={handleChange('state')}
                    onBlur={handleBlur("state")}
                    value={values.state}
                />
                  <Text style={{ color: 'red',size:20 }}>{errors.state && touched.state? errors.state : ''}</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Zip Code (Postal Code)'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'
                    onChangeText={handleChange('zip_code')}
                    onBlur={handleBlur("zip_code")}
                    value={values?.zip_code}
                />
                  <Text style={{ color: 'red',size:20 }}>{errors.zip_code && touched.zip_code? errors.zip_code : ''}</Text>
                <View style={styles.countryView}>
                    <TextInput
                        style={styles.input}
                        placeholder='Country'
                        autoCapitalize="none"
                        placeholderTextColor='#9B9B9B'
                        onChangeText={handleChange('country')}
                        onBlur={handleBlur("country")}
                    value={values?.country}
                    />
                    
                    <MaterialIcons name="keyboard-arrow-right" size={25} color="black" style={styles.Arrow} />

                </View>
                <Text style={{ color: 'red',size:20 }}>{errors.country && touched.country? errors.country : ''}</Text>
            </View>
            <TouchableOpacity style={styles.ButtonView} onPress={handleSubmit}><View style={styles.ButtonUnderView}>
                <Text style={styles.AddCart}>{route.params ? "Update Address" : "Add Address"}</Text>
            </View>
            </TouchableOpacity>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 17,
        backgroundColor: '#F9F9F9'
    },
    ArrowView: {
        width: '100%',
        height: verticalScale(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        elevation: 3,
        marginBottom: verticalScale(32)
    },
    ArrowText: {
        color: 'black',
        fontSize: moderateScale(23),
        marginTop: verticalScale(50),
        fontFamily: 'Metropolis-SemiBold',
        marginRight: horizontalScale(75),
    },
    KeyboardArrow: {
        marginTop: verticalScale(40),
        marginLeft: horizontalScale(-12)
    },
    input: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        marginVertical: verticalScale(10),
        paddingVertical: verticalScale(20),
        paddingLeft: horizontalScale(10),
        color: 'black',
        borderRadius: moderateScale(5),
        fontSize: moderateScale(18),
        fontWeight: '500',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 3,
    },
    countryView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Arrow: {
        position: 'absolute',
        right: 9,
        bottom: 30
    },
    ButtonView: {
        width: '100%',
        height: verticalScale(120),
        marginTop: verticalScale(20)
    },
    ButtonUnderView: {
        backgroundColor: '#DB3022',
        width: horizontalScale(340),
        height: verticalScale(50),
        margin: 'auto',
        borderRadius: moderateScale(50),

    },
    AddCart: {
        color: '#FFFFFF',
        fontFamily: 'Metropolis-Medium',
        fontSize: moderateScale(16),
        margin: 'auto'
    },

})