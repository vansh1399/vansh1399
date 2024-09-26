import HomePage from "../container/Home_page/HomePage"
import ProductCard from "../container/ProductCard/ProductCard"
import Favorites from "../container/favorites/Favorites"
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import My_Bag from "../container/mybag/My_Bag";
import My_Profile from "../container/myorders/My_Orders";
import My_Orders from "../container/myprofile/My_Profile";
import OrderDetails from "../container/orderdetail/OrderDetails";
import SubCategories2 from "../container/shhoping/shopping";

import shhoping from "../container/shhoping/shopping";
import AddShipingAddress from "../container/AddShipingAddress/AddShipingAddress";
import ShippingAddresses from "../container/shippingadresses/ShippingAddresses";
import Success from "../container/success/Success";
import CategoriesTwo from "../container/category2/CategoriesTwo";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { horizontalScale, moderateScale, verticalScale } from "../../assets/Metrics/Metrics";
import Rating from "../container/rating/Rating";
import Filter from "../container/filter/Filter";
import Shop from "../container/Shop/Shop";
import Signup from "../container/Signup/Signup";
import Login from "../container/Login/Login";
import Loginwithnumber from "../container/PhonenoLogin/Loginwithnumber";
import Profilevisit from "../container/ProfileVisit/Profilevisit";

const Stack = createStackNavigator();

function Customback({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      title="Info"
      color="#fff"
    ><MaterialIcons name="chevron-left" size={40} color="black" /></TouchableOpacity>
  )
}

function Productcardbar({ navigation }) {
  return (
    <View style={styles.ArrowView}>
      <TouchableOpacity style={styles.KeyboardArrow}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></TouchableOpacity>
      <Text style={styles.ArrowText}>Short dress</Text>
      <TouchableOpacity ><MaterialIcons name="share" size={30} color="black" style={{ marginTop: 27 }} /></TouchableOpacity>
    </View>
  )
}

export const Favoritestack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={({ navigation }) => ({
          title: 'Categories',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              title="Info"
              color="#fff"
              style={{ marginRight: 10 }}
            ><MaterialIcons name="search" size={30} color="black" /></TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="filter"
        component={Filter}
        options={({ navigation }) => ({
          title: 'filter',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ProductCard"
        component={ProductCard}
        options={({ navigation }) => ({
          title: 'Products',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              title="Info"
              color="#fff"
            ><MaterialIcons name="share" size={30} color="black" /></TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="My_Bag"
        component={My_Bag}
        options={({ navigation }) => ({
          title: 'My Bag',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="AddShipingAddress"
        component={AddShipingAddress}
        options={({ navigation }) => ({
          title: 'Add shipping address',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
          // headerRight: () => (
          //   <TouchableOpacity
          //     onPress={() => navigation.goBack()}
          //     title="Info"
          //     color="#fff"
          //   ><MaterialIcons name="share" size={30} color="black" /></TouchableOpacity>
          // ),
        })}
      />
      <Stack.Screen
        name="ShippingAddresses"
        component={ShippingAddresses}
        options={({ navigation }) => ({
          title: 'Shipping Addresses',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={({ navigation }) => ({
          title: 'Success',
          headerLeft: () => (null)
        })}
      />

    </Stack.Navigator>
  )
}

export const Homestack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HomePage" component={HomePage}
      />

      <Stack.Screen
        name="ProductCard"
        component={ProductCard}
        options={({ navigation }) => ({
          title: 'Products',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              title="Info"
              color="#fff"
              style={{ marginRight: 10 }}
            ><MaterialIcons name="share" size={30} color="black" /></TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="shhoping"
        component={shhoping}
        options={({ navigation }) => ({
          title: 'Shopping',
          headerLeft: () => (
            <Customback navigation={navigation} />
          )
        })}
      />
      <Stack.Screen
        name="My_Bag"
        component={My_Bag}
        options={({ navigation }) => ({
          title: 'My Bag',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="AddShipingAddress"
        component={AddShipingAddress}
        options={({ navigation }) => ({
          title: 'Add shipping address',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ShippingAddresses"
        component={ShippingAddresses}
        options={({ navigation }) => ({
          title: 'Shipping Addresses',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={({ navigation }) => ({
          title: 'Success',
          headerLeft: () => (null),
        })}
      />
      <Stack.Screen
        name="CategoriesTwo" x
        component={CategoriesTwo}
        options={({ navigation }) => ({
          title: 'Categories',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              title="Info"
              color="#fff"
              style={{ marginRight: 10 }}
            ><MaterialIcons name="search" size={30} color="black" /></TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="HomePage1" component={HomePage}
      />
    </Stack.Navigator>
  )
}

export const Mybagstack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="MyBag"
        component={My_Bag}
        options={({ navigation }) => ({
          title: 'My Bag',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              title="Info"
              color="#fff"
              style={{ marginRight: 10 }}
            ><MaterialIcons name="search" size={30} color="black" /></TouchableOpacity>
          ),
        })}

      />
      <Stack.Screen
        name="ProductCard"
        component={ProductCard}
        options={({ navigation }) => ({
          title: 'Products',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              title="Info"
              color="#fff"
              style={{ marginRight: 10 }}
            ><MaterialIcons name="share" size={30} color="black" /></TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="AddShipingAddress"
        component={AddShipingAddress}
        options={({ navigation }) => ({
          title: 'Add shipping address',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ShippingAddresses"
        component={ShippingAddresses}
        options={({ navigation }) => ({
          title: 'Shipping Addresses',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={({ navigation }) => ({
          title: 'Success',
          headerLeft: () => (null)
        })}
      />

    </Stack.Navigator>
  )
}

export const Profilestack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen
        name="My_Orders"
        component={My_Orders}
        options={({ navigation }) => ({
          title: 'My Profile',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              title="Info"
              color="#fff"
              style={{ marginRight: 10 }}
            ><MaterialIcons name="search" size={30} color="black" /></TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="ShippingAddresses"
        component={ShippingAddresses}
        options={({ navigation }) => ({
          title: 'Shipping Addresses',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="My_Profile"
        component={My_Profile}
        options={({ navigation }) => ({
          title: 'My Order',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={({ navigation }) => ({
          title: 'Order Details',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="Rating"
        component={Rating}
        options={({ navigation }) => ({
          title: 'Rating',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={({ navigation }) => ({
          title: 'Signup',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          title: 'Login',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />

      <Stack.Screen
        name="Profilevisit"
        component={Profilevisit}
        options={({ navigation }) => ({
          title: 'Profilevisit',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  )
}

export const Shoppingstack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="shhoping"
        component={Shop}
        options={({ navigation }) => ({
          title: 'Shopping',
          headerLeft: () => (
            <Customback navigation={navigation} />
          )
        })}
      />
      <Stack.Screen
        name="ProductCard"
        component={ProductCard}
        options={({ navigation }) => ({
          title: 'Products',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              title="Info"
              color="#fff"
            ><MaterialIcons name="share" size={30} color="black" /></TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="My_Bag"
        component={My_Bag}
        options={({ navigation }) => ({
          title: 'My Bag',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="AddShipingAddress"
        component={AddShipingAddress}
        options={({ navigation }) => ({
          title: 'Add shipping address',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ShippingAddresses"
        component={ShippingAddresses}
        options={({ navigation }) => ({
          title: 'Shipping Addresses',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={({ navigation }) => ({
          title: 'Success',
          headerLeft: () => (null)
        })}
      />
      <Stack.Screen
        name="filter"
        component={Filter}
        options={({ navigation }) => ({
          title: 'filter',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="favourite"
        component={Favorites}
        options={({ navigation }) => ({
          title: 'Favorites',
          headerLeft: () => (
            <Customback navigation={navigation} />
          ),
        })}
      />

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  ArrowView: {
    width: '100%',
    height: verticalScale(80),
    marginTop: verticalScale(40),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ArrowText: {
    color: 'black',
    fontSize: moderateScale(23),
    marginTop: verticalScale(28),
    fontFamily: 'Metropolis-SemiBold'
  },
  KeyboardArrow: {
    marginTop: verticalScale(16),
    marginLeft: horizontalScale(-15)
  },
})