import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import { horizontalScale, verticalScale, moderateScale } from '../../../assets/Metrics/Metrics';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { signupwithemail } from '../../redux/Slice/auth.slice';

export default function Signup({ route, navigation }) {

  let SignupSchema = object({
    name: string().required(),
    email: string().email().required(),
    password: string().required()
  });

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(signupwithemail(values))
      // handleSumbit1(values)
      // resetForm();

    },

  });

  const { handleChange, errors, values, handleSubmit, handleBlur, touched, setValues } = formik

  return (
    <View style={styles.container}>

      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />

      {/* <Text style={{ marginLeft: verticalScale(-13), marginBottom: horizontalScale(20) }}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></Text> */}
      {/* <Text style={{ fontFamily: 'Metropolis-Bold', fontSize: moderateScale(34), color: 'black', marginBottom: verticalScale(50), }}>Sign Up</Text> */}
      <View>
        <TextInput
          name="name"
          style={styles.input}
          placeholder='Name'
          placeholderTextColor='#9B9B9B'
          onChangeText={handleChange('name')}
          onBlur={handleBlur("name")}
          value={values?.name}
        />
        <Text style={{ color: 'red', size: 20 }}>{errors.name && touched.name ? errors.name : ''}</Text>
        <TextInput
          name="email"
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='#9B9B9B'
          onChangeText={handleChange('email')}
          onBlur={handleBlur("email")}
          value={values?.email}
        />
        <Text style={{ color: 'red', size: 20 }}>{errors.email && touched.email ? errors.email : ''}</Text>
        <TextInput
          name="password"
          style={styles.input}
          placeholder='Password'
          autoCapitalize="none"
          placeholderTextColor='#9B9B9B'
          onChangeText={handleChange('password')}
          onBlur={handleBlur("password")}
          value={values?.password}
        />
        <Text style={{ color: 'red', size: 20 }}>{errors.password && touched.password ? errors.password : ''}</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ flexDirection: 'row', marginLeft: horizontalScale(210), alignItems: 'center', marginTop: verticalScale(13) }}>
          <Text style={{ color: 'black', fontSize: moderateScale(14) }}>Already have an account?</Text>
          <Text><MaterialIcons name="arrow-right-alt" size={35} color="red" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          width: '100%',
          backgroundColor: '#DB3022',
          marginVertical: 10,
          paddingVertical: 16,
          color: 'white',
          borderRadius: 50,

          fontWeight: '500',
          alignItems: 'center',
          marginTop: 30
        }}
          onPress={handleSubmit}
        ><Text style={{ color: 'white', fontSize: moderateScale(16), fontFamily: 'Metropolis-Medium' }}>SIGN UP</Text></TouchableOpacity>
      </View>
      <Text style={{
        color: '#222222',
        textAlign: 'center',
        marginTop: 100,
        marginHorizontal: 'auto',
        fontSize: moderateScale(15)
      }}>Or sign up with social account</Text>

      <View style={{
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 70,
        marginTop: 30

      }}>


        <TouchableOpacity style={{
          marginTop: 5,
          shadowColor: 'rgba(.4,.4,.4, .4)', // IOS
          shadowOffset: { height: 1, width: 1 }, // IOS
          shadowOpacity: 1, // IOS
          shadowRadius: 1, //IOS
          backgroundColor: '#fff',
          elevation: 2, // Android
          height: 80,
          marginLeft: 30,
          marginTop: 1,
          width: 80,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}><Image source={require('../../../assets/img/search_copy.png')} style={{ width: 39, height: 39 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{
          shadowColor: 'rgba(0,0,0, .4)', // IOS
          shadowOffset: { height: 1, width: 1 }, // IOS
          shadowOpacity: 1, // IOS
          shadowRadius: 1, //IOS,
          backgroundColor: '#fff',
          elevation: 2, // Android
          height: 80,
          marginTop: 2,
          borderRadius: 15,
          width: 80,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}><Foundation name="social-facebook" size={50} color="#3B5998" /></TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Loginwithnumber")} style={{ flexDirection: 'row', marginHorizontal: 'auto', alignItems: 'center', marginBottom: verticalScale(85) ,marginLeft:110}}>
          <Text style={{ color: 'black', fontSize: moderateScale(14) }}>Login with Phone number</Text>
          <Text><MaterialIcons name="arrow-right-alt" size={35} color="red" /></Text>
        </TouchableOpacity>

    </View>


  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingHorizontal: 20
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    paddingVertical: 20,
    paddingLeft: 10,
    color: 'black',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: '500',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 3,

  }
})


