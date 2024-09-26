import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  a,
  Image,
  ScrollView,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Metrics/Metrics';
import ShippingAddresses from '../shippingadresses/ShippingAddresses';
import { useDispatch, useSelector } from 'react-redux';
import { SignOut } from '../../redux/Slice/auth.slice';




export default function My_Orders({ route, navigation }) {

  const auth = useSelector(state => state.auth);
  

  const dispatch = useDispatch()


  const handleSignOut = () => {
    dispatch(SignOut())
    navigation.navigate("Signup")
  }
  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View style={Styles.container}>
        {/* <View style={Styles.search}>
          <TouchableOpacity>
            <EvilIcons name="search" size={32} color="#222222" />
          </TouchableOpacity>
        </View> */}

        {/* <Text style={Styles.myProfile}>My Profile</Text> */}

        <TouchableOpacity style={Styles.profileHead} onPress={() => navigation.navigate("Profilevisit")}>
          <Image
            style={Styles.Profileimg}
            source={{uri : auth.auth?.url}}
          />

          <View style={Styles.matildabrownTextMAin}>
            <Text style={Styles.matildabrownText}>{auth.auth?.name}</Text>
            <Text style={Styles.matildabrowngmailText}>
            {auth.auth?.email}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={Styles.datamain}>
          <TouchableOpacity  onPress={() => navigation.navigate("My_Profile")} style={Styles.dataHead}>
            <View>
              <Text style={Styles.data1}>My orders</Text>
              <Text style={Styles.data2}>Already have 12 orders</Text>
            </View>

            <View>
              <TouchableOpacity >
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ShippingAddresses")} style={Styles.dataHead}>
            <View>
              <Text style={Styles.data1}>Shipping addresses</Text>
              <Text style={Styles.data2}>3 ddresses</Text>
            </View>

            <View>
              <TouchableOpacity >
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View style={Styles.dataHead}>
            <View>
              <Text style={Styles.data1}>Payment methods</Text>
              <Text style={Styles.data2}>Visa **34</Text>
            </View>

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.dataHead}>
            <View>
              <Text style={Styles.data1}>Promocodes</Text>
              <Text style={Styles.data2}>You have special promocodes</Text>
            </View>

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={Styles.dataHead} onPress={() => navigation.navigate("Rating")}>
            <View>
              <Text style={Styles.data1}>My reviews</Text>
              <Text style={Styles.data2}>Reviews for 4 items</Text>
            </View>

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View style={Styles.dataHead}>
          <TouchableOpacity onPress={() => handleSignOut()}>
              <Text style={Styles.data1}>Sign Out </Text>
              <Text style={Styles.data2}>Notifications, password</Text>
            </TouchableOpacity>

            <View>
              {/* <TouchableOpacity onPress={() => navigation.navigate("Signup")}> */}
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              {/* </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: horizontalScale(15),

  },
  search: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: verticalScale(15),
  },
  myProfile: {
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(34),
    color: '#222222',
  },
  Profileimg: {
    width: horizontalScale(100),
    height: verticalScale(100),
    borderWidth: 1,
    borderRadius: moderateScale(50),
  },
  profileHead: {
    flexDirection: 'row',
    marginTop: verticalScale(15),
  },
  matildabrownTextMAin: {
    padding: horizontalScale(16),
    padding: verticalScale(16),
  },
  matildabrownText: {
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(22),
    color: '#222222',
  },
  matildabrowngmailText: {
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(14),
    color: '#9B9B9B',
  },
  dataHead: {
    paddingVertical:verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   elevation: 0.2,
  },
  data1: {
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(20),
    lineHeight: 40,
    color: '#222222',
    marginTop: verticalScale(5),
  },
  data2: {
    fontFamily: 'Metropolis-Regular',
    fontSize: moderateScale(13),
    color: '#9B9B9B',
  },
  datamain: {
    fontFamily: 'Metropolis-Regular',
    marginTop: verticalScale(25),
  },
});


