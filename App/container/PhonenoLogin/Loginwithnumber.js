import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { horizontalScale, verticalScale, moderateScale } from '../../../assets/Metrics/Metrics';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'yup';
import { connect, useFormik } from 'formik';
import { GETOTP, PhoneSignIn } from '../../redux/Slice/auth.slice';
// import { authloginEmail, facebooksignup, GETOTP, googlesignup, PhoneSignIn } from '../../Redux/slice/auth.slice';
// import auth, { onAuthStateChanged } from '@react-native-firebase/auth';


export default function Loginwithnumber({ route, navigation }) {
    const [confirm, setConfirm] = useState(null)
    const [code, setCode] = useState('');


    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);
    console.log("auth", auth.confirmation);


    let signuSchema = object({
        Phone_number: string().required('Enter your Phone'),
    });

    const formik = useFormik({
        initialValues: {
            Phone_number: '',

        },
        validationSchema: signuSchema,
        onSubmit: (values, { resetForm }) => {
            // console.log("vansh",values);
            dispatch(PhoneSignIn({ phoneno: values.Phone_number }))

        },
    });

    let signuSchema1 = object({
        Otp: string().required('Enter your Otp'),
        });

        const formik1 = useFormik({
        initialValues: {
            Otp:'',
        },
        validationSchema: signuSchema1,
        onSubmit: (values, { resetForm }) => {
      dispatch(GETOTP({confirm: auth.confirmation,code:values.Otp}))

        },
    });




    if (!auth.confirmation) {
        return (
            <ScrollView style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#61dafb"
                />

                <Text style={styles.fonts}> Login to Phone number </Text>
                <View>
                    <TextInput
                        name="Phone_number"
                        style={styles.input}
                        placeholder='Phone_number'
                        autoCapitalize="none"
                        placeholderTextColor='#9B9B9B'
                        onChangeText={formik.handleChange('Phone_number')}
                        onBlur={formik.handleBlur("Phone_number")}
                    />

                </View>
                <View style={styles.arow}>
                    <Text style={styles.text}>Forgot your password? </Text>
                    <FontAwesome name="long-arrow-right" size={17} color="red" />
                </View>
                <TouchableOpacity style={styles.button} onPress={formik.handleSubmit} >
                    <Text style={{ fontSize: moderateScale(17), color: 'white' }}>Phone Number Sign In</Text>
                </TouchableOpacity>

                {/* <Text style={styles.textcenter}>number  OTP</Text> */}


            </ScrollView>
        )
    }
    return (
        <ScrollView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />

            <Text style={styles.fonts}> Login to otp </Text>
            <View>
                <TextInput
                    name="otp"
                    style={styles.input}
                    placeholder='ENTER OTP'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'
                    onChangeText={formik1.handleChange('Otp')}
                    onBlur={formik1.handleBlur("Otp")}
                />

            </View>
            <View style={styles.arow}>
                <Text style={styles.text}>Forgot your otp? </Text>
                <FontAwesome name="long-arrow-right" size={17} color="red" />
            </View>
            <TouchableOpacity style={styles.button} onPress={formik1.handleSubmit}>
                <Text style={{ fontSize: moderateScale(17), color: 'white' }}>GET OTP ENTER</Text>
            </TouchableOpacity>

            {/* <Text style={styles.textcenter}>number  OTP</Text> */}


        </ScrollView>
        // <>
        //   <TextInput value={code} onChangeText={text => setCode(text)} />
        //   <Button title="Confirm Code" onPress={() => confirmCode()} />
        // </>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: horizontalScale(18),
        backgroundColor: '#F9F9F9',
        paddingTop: horizontalScale(13)
    },
    fonts: {
        color: 'black',
        fontSize: moderateScale(20),
        fontFamily: 'Metropolis-Bold',
        marginBottom: horizontalScale(40),
        marginTop: horizontalScale(20)
    },
    input: {
        // width: 350,

        height: horizontalScale(60),
        backgroundColor: '#FFFFFF',
        margin: horizontalScale(10),
        padding: horizontalScale(8),
        color: 'black',
        borderRadius: moderateScale(10),
        fontSize: moderateScale(14),
        fontWeight: '500',
        elevation: 2
    },
    button: {
        // width: 350,
        height: verticalScale(55),
        backgroundColor: '#DB3022',
        color: 'white',
        borderRadius: moderateScale(50),
        alignItems: 'center',
        elevation: 2,
        justifyContent: 'center'

    },
    icon: {
        // display: 'flex',
        flexDirection: 'row',
        padding: horizontalScale(10),
        // alignItems: 'center',
        justifyContent: 'center',
        columnGap: horizontalScale(20),
        marginTop: horizontalScale(30)

    },
    text: {
        color: 'black',
    },
    arow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: horizontalScale(10),
        alignItems: 'center',
        paddingBottom: horizontalScale(70),
    },
    textcenter: {
        color: 'black',
        marginTop: horizontalScale(150),
        textAlign: 'center'
    },
    webicon: {
        backgroundColor: '#FFFFFF',
        width: horizontalScale(85),
        height: verticalScale(75),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(17),
        //  shadowColor: 'rgba(0,0,0, .4)', // IOS
        elevation: 2, // Android
    }
})