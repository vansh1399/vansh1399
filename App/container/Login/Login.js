import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { FacebookLogin, Loginwithemail, googleLogin, signupwithemail } from '../../redux/Slice/auth.slice';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function Login() {
  const dispatch = useDispatch()

  const handlegoogleLogin = () => {
    dispatch(googleLogin())
  }
  const handleFacbookLogin = () => {
    dispatch(FacebookLogin())
  }

  GoogleSignin.configure({
    webClientId: '806180168566-rr78amum2tsr6aquu5hs557mbo36upl6.apps.googleusercontent.com',
  });

  let LoginSchema = object({
    email: string().email().required(),
    password: string().required()
  });


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(Loginwithemail(values))
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

      {/* <Text style={{ marginLeft: -13,marginBottom:20 }}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></Text> */}
      {/* <Text style={{ fontFamily: 'Metropolis-Bold', fontSize: 34, color: 'black', marginBottom: 50 }}>Login </Text> */}
      <View>
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
        <View style={{ flexDirection: 'row', marginLeft: 210, alignItems: 'center', marginTop: 13 }}>
          <Text style={{ color: 'black', fontSize: 14 }}>Forgot your Password?</Text>
          <Text><MaterialIcons name="arrow-right-alt" size={35} color="red" /></Text>
        </View>

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
        ><Text style={{ color: 'white', fontSize: 19, fontFamily: 'Metropolis-Medium' }}>Login</Text></TouchableOpacity>
      </View>
      <Text style={{
        color: '#222222',
        textAlign: 'center',
        marginTop: 199,
        marginLeft: 20,
        fontSize: 18
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
        }}
          onPress={() => handlegoogleLogin()}
        ><Image source={require('../../../assets/img/search_copy.png')} style={{ width: 39, height: 39 }} />
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
        }}
        onPress={() => handleFacbookLogin()}
        ><Foundation name="social-facebook" size={50} color="#3B5998" /></TouchableOpacity>


      </View>
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


