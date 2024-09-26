import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useEffect } from 'react';
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Metrics/Metrics';
import { useDispatch, useSelector } from 'react-redux';
import { DecQty, IncQty, decrementQty, deletedata, getcart, incrementQty } from '../../redux/Slice/cart.slice';
import { getProducts } from '../../redux/Slice/product.slice';
import { increment } from '@react-native-firebase/firestore';

const data = [
  {
    id: 0,
    title: 'Pullover',
    color: 'Black',
    size: 'L',
    image: require('../../../assets/img/see_you.png'),
    price: 51,
  },
  {
    id: 1,
    title: 'T-Shirt',
    color: 'Gray',
    image: require('../../../assets/img/see_you.png'),
    size: 'L',
    price: 30,
  },
  {
    id: 1,
    title: 'Sport Dress',
    color: 'Black',
    image: require('../../../assets/img/see_you.png'),
    size: 'M',
    price: 43,
  },
];

export default function My_Bag({ route, navigation }) {

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getProducts())
    dispatch(getcart('parth'))
  }, [])

  const cart = useSelector(state => state.cart)
  const product = useSelector(state => state.productfire);

  const bagdata = cart?.cart[0]?.cart.map((v) => {
    const c = product.Productfire.find((v1) => v1.id === v.pid)
    if (c) {
      let dataff = { ...v, ...c }
      return dataff
    }
  }).sort((a,b) => a.Productname.localeCompare(b.Productname))
  // console.log("bagdatabagdatabagdatabagdatabagdatabagdatabagdata",bagdata);
  const handleInc = (id) => {
    dispatch(incrementQty({id,uid:'parth'}))
  }
  const handleDec = (id) => {
    dispatch(decrementQty({id,uid:'parth'}))
  }
  const hanledelet = (id) => {
    dispatch(deletedata({id,uid:'parth'}))
  }
  // const totalAmount = bagdata.reduce((sum, item) => sum + item.Price * item.qty, 0);

  const DataCity = ({ v }) => (
    <TouchableOpacity onPress={() => navigation.navigate("ProductCard")}>
      <View style={{ paddingHorizontal: 26, marginVertical: 15 }}>
        <View style={Styles.img_main_view}>
          <View>
            <Image

              style={Styles.img}
              source={require('../../../assets/img/Dress1.jpg')}
            />
          </View>
          <View style={{ padding: 4, marginHorizontal: 10 }}>
            <View style={Styles.dotshead}>
              <Text
                style={{
                  fontSize: 27,
                  fontFamily: 'Metropolis-Bold',
                  color: '#222222',
                }}>
                {v?.Productname}
              </Text>
              <View style={Styles.dotsminihead}>
                <TouchableOpacity
                  onPress={() => hanledelet(v.id)}
                >
                  <MaterialCommunityIcons
                    name="window-close"
                    size={23}
                    color="#9B9B9B"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles.img_data_view}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={Styles.color}>Color:</Text>
                <Text style={Styles.black}>{v?.color}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={Styles.size}>Size:</Text>
                <Text style={Styles.L}>{v?.size}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', columnGap: 6, marginTop: 20 }}>
              <TouchableOpacity
                onPress={() => handleDec(v.id)}
              >
                <Text style={Styles.textTouchableminus}>
                  <View style={{ alignContent: 'center' }}>
                    <Feather name="minus" size={25} color="#9B9B9B" />
                  </View>
                </Text>
              </TouchableOpacity>

              <Text style={{ marginTop: 15, color: '#222222' }}>{v?.qty}</Text>

              <TouchableOpacity
                onPress={() => handleInc(v.id)}
              >
                <Text style={Styles.textTouchablePlus}>
                  <View>
                    <Feather name="plus" size={25} color="#9B9B9B" />
                  </View>
                </Text>
              </TouchableOpacity>

              <View>
                <Text
                  style={{
                    marginTop: 12,
                    marginHorizontal: 26,
                    color: '#222222',
                    fontFamily: 'Metropolis-Bold',
                    fontSize: 19,
                  }}>
                  {v?.Price * v?.qty}$
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />

        {/* <View style={Styles.feather} >
          <TouchableOpacity>
            <Feather name="search" size={25} color="#222222" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={Styles.bag}>My Bag</Text>
        </View> */}

        <FlatList
          data={bagdata}
          renderItem={({ item }) => <DataCity v={item} />}
          scrollEnabled={false}
          keyExtractor={(item, index) => String(index)}
        />

        <View style={Styles.totalamount}>
          <Text style={Styles.totalamountText}>Total Amount:</Text>
          <Text style={Styles.Text}>0$</Text>
        </View>

        <View style={Styles.checkoutBtn}>
          <TouchableOpacity onPress={() => navigation.navigate("ShippingAddresses")}>
            <Text style={Styles.checkoutText}>Check out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  feather: {
    alignItems: 'flex-end',
    marginHorizontal: horizontalScale(15),
    marginTop: verticalScale(10),
  },
  bag: {
    color: '#222222',
    fontSize: moderateScale(40),
    fontFamily: 'Metropolis-Bold',
    marginHorizontal: horizontalScale(25),
  },
  img: {
    width: horizontalScale(119),
    height: verticalScale(140),
  },
  img_main_view: {
    width: horizontalScale(100),
    // borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
  },
  img_data_view: {
    flexDirection: 'row',
    marginTop: verticalScale(5),
    columnGap: 25,
  },
  substraction: {
    width: horizontalScale(80),
  },
  color: {
    color: '#9B9B9B',
    fontSize: moderateScale(15),
  },
  black: {
    color: '#222222',
    fontSize: moderateScale(15),
  },
  size: {
    color: '#9B9B9B',
    fontSize: moderateScale(15),
  },
  L: {
    color: '#222222',
    fontSize: moderateScale(15),
  },
  textTouchablePlus: {
    padding: horizontalScale(10),
    padding: verticalScale(10),
    width: horizontalScale(45),
    height: verticalScale(45),
    backgroundColor: '#FFFFFF',
    color: '#9B9B9B',
    borderRadius: moderateScale(50),
    textAlign: 'center',
    elevation: 2,
  },
  textTouchableminus: {
    padding: horizontalScale(10),
    padding: verticalScale(10),
    width: horizontalScale(45),
    height: verticalScale(45),
    backgroundColor: '#FFFFFF',
    color: '#9B9B9B',
    borderRadius: moderateScale(50),
    textAlign: 'center',
    elevation: 2,
  },
  dotshead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dotsminihead: {
    marginRight: horizontalScale(10),
    marginTop: verticalScale(8),
  },
  dotsminihead3: {
    marginHorizontal: horizontalScale(3),
    marginTop: verticalScale(6),
  },
  dotsminihead2: {
    marginHorizontal: horizontalScale(66),
    marginTop: verticalScale(5),
  },
  promocode: {
    position: 'relative',
    width: horizontalScale(99),
    height: verticalScale(45),
    borderColor: 'black',
    backgroundColor: '#FFFFFF',
    // borderWidth: 1,
    marginTop: verticalScale(20),
    borderRadius: moderateScale(10),
    elevation: 1,
  },
  Enterpromotext: {
    color: '#9B9B9B',
    padding: horizontalScale(11),
    padding: verticalScale(11),
    paddingHorizontal: horizontalScale(20),
  },
  arrow_circle_right: {
    position: 'absolute',
    paddingHorizontal: horizontalScale(90),
    top: -4,
    right: -98,
  },
  totalamount: {
    flexDirection: 'row',
    columnGap: 184,
    marginHorizontal: horizontalScale(22),
  },
  totalamountText: {
    color: '#9B9B9B',
    fontFamily: 'Metropolis-Regular',
  },
  Text: {
    color: '#222222',
    fontFamily: 'Metropolis-Bold',
  },
  checkoutBtn: {
    width: horizontalScale(90),
    height: verticalScale(40),
    backgroundColor: '#DB3022',
    borderRadius: moderateScale(50),
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(9),
  },
  checkoutText: {
    textAlign: 'center',
    marginTop: verticalScale(10),
    color: '#FFFFFF',
    fontFamily: 'Metropolis-Regular',
  },
});
