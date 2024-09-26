import { View, Text } from 'react-native'
import React, { Component } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Signup from './App/container/Signup/Signup';
import Login from './App/container/Login/Login';
import Forgot_pass from './App/container/Forgot_pass/Forgot_pass';
import HomePage from './App/container/Home_page/HomePage';
import SubCategories2 from './App/container/shhoping/shopping';
import FavoritesPage from './App/container/FavoritesPage/FavoritesPage';
import ProductCard from './App/container/ProductCard/ProductCard';
import AddShipingAddress from './App/container/AddShipingAddress/AddShipingAddress';
import Counter from './App/counter/Counter';
import { configurestore } from './App/redux/store';
import { Provider } from 'react-redux';
import Rating from './App/container/rating/Rating';
import OrderDetails from './App/container/orderdetail/OrderDetails';
import ShippingAddresses from './App/container/shippingadresses/ShippingAddresses';
import Filter from './App/container/filter/Filter';
import { NavigationContainer } from '@react-navigation/native';
import Bottom from './App/navigation/Bottom';
import 'react-native-gesture-handler';
import Success from './App/container/success/Success';
import BottomSheet from './App/container/bottomsheet/Bottomsheet';
import { PersistGate } from 'redux-persist/integration/react';


export default function App() {
  const { store, persistor } = configurestore()
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>

        <NavigationContainer>
          <Bottom></Bottom>
        </NavigationContainer>
      </PersistGate>

    </Provider>
  )
}
// import { View, Text } from 'react-native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();
// import React from 'react'
// import Signup from '../container/Signup/Signup';
// import SubCategories2 from '../container/SubCategories2/SubCategories2';
// import HomePage from '../container/Home_page/HomePage';

// export default function Bottom() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="homepage" component={HomePage} />
//             <Tab.Screen name="SubCategories2" component={SubCategories2} />
//         </Tab.Navigator>
//     )
// }