import { View, Text, ScrollView, StatusBar, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Metrics/Metrics';

const data2 = [
  {
    id: 1,
    title: 'Pullover',
    subtitle: 'Mango',
    image: require('../../../assets/img/Dress2.webp'),
    color: 'Blue',
    Size: 'L',
    Units: 1,
    price: 51,

  },
  {
    id: 2,
    title: 'Pullover',
    subtitle: 'Mango',
    image: require('../../../assets/img/Dress2.webp'),
    color: 'Orange',
    Size: 'L',
    Units: 1,
    price: 51,

  },
  {
    id: 3,
    title: 'Pullover',
    subtitle: 'Mango',
    image: require('../../../assets/img/Dress2.webp'),
    color: 'gray',
    Size: 'L',
    Units: 1,
    price: 51,
  }
]
const Orderdata = [
  {
    id: 1,
    OrderNo: '1947034',
    Trackingnumber: 'Iw3475453455',
    date: '05-12-2019',
    Delivered: 'Delivered'
  },

]
export default function OrderDetails() {
  const Order = ({ v }) => (
    <View style={styles.ViewOrder}>
      <View>
        <Text style={styles.Order0}>OrderNo: <Text>{v.OrderNo}</Text></Text>
        <Text style={styles.Order2}>Trackingnumber: <Text style={styles.Order}>{v.Trackingnumber}</Text></Text>
      </View>
      <View>
        <Text style={styles.Order2}>{v.date}</Text>
        <Text style={styles.Order3}>{v.Delivered}</Text>
      </View>

    </View>
  );


  const NewProductCard = ({ v }) => (

    <TouchableOpacity style={styles.olldeta}>

      <Image source={v.image} style={styles.img} />
      <View style={styles.pullovertext}>

        <Text style={styles.protext}>{v.title}</Text>

        <Text style={styles.protext2}>{v.subtitle}</Text>

        <View style={styles.Color}>
          <Text style={styles.Colortext}>color:<Text style={styles.colorsize}>{v.color}</Text></Text>
          <Text style={styles.Colortext}>Size:<Text style={styles.colorsize}>{v.Size}</Text></Text>
        </View>



        <View style={styles.OrderDetails}>
          <Text style={styles.Colortext}>Units:<Text style={styles.colorsize}>{v.Units}</Text></Text>

          <TouchableOpacity><Text style={styles.colorsize}>{v.price}$</Text></TouchableOpacity>
        </View>
      </View>

    </TouchableOpacity>
  );
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
      />

      {/* <View style={styles.Ordertext}>
      <TouchableOpacity><FontAwesome name="angle-left" size={45} color="black" /></TouchableOpacity>
        <Text style={styles.Ordertext2}>Order Details</Text>
        <TouchableOpacity><Fontisto style={styles.searchicon} name="search" size={22} color="black" /></TouchableOpacity> 
      </View> */}



      <FlatList
        data={Orderdata}
        renderItem={({ item }) => <Order v={item} />}
        keyExtractor={item => item.id}
      // horizontal={true}
      />

      <View><Text style={{ color: 'black' }}>3 item</Text></View>
      <FlatList
        data={data2}
        renderItem={({ item }) => <NewProductCard v={item} />}
        keyExtractor={item => item.id}
      // horizontal={true}
      />


    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: horizontalScale(19),
    paddingTop: horizontalScale(13),
  
  },
  olldeta: {
    flexDirection: 'row',
    marginTop: horizontalScale(20),
    backgroundColor: '#FFFFFF',
    borderRadius: horizontalScale(15),
    elevation: 3,
  },
  pullovertext: {
    margin: '3%',
  },
  protext: {
    color: 'black',
    fontSize: moderateScale(20),
    fontFamily: 'Metropolis-Bold',
  },
  protext2: {
    color: '#9B9B9B',
    fontSize: moderateScale(14),
    // flexDirection:'row'
  },
  OrderDetails: {
    flexDirection: 'row',
    columnGap:moderateScale(150) ,
    paddingTop: verticalScale(18)

  },
  img: {
    width: '30%',
    height: '100%',
    borderBottomLeftRadius: horizontalScale(10),
    borderTopLeftRadius: horizontalScale(10),
  },
  Color: {
    flexDirection: 'row',
    columnGap: horizontalScale(35),
    paddingTop: verticalScale(7)
  },
  Colortext: {
    color: '#9B9B9B'
  },
  colorsize: {
    color: 'black'
  },
  starrating: {
    color: '#9B9B9B',
    fontSize:moderateScale(15) ,
    bottom:horizontalScale(3)
  },
  Ordertext: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop:horizontalScale(10)
  },
  Ordertext2: {
    color: 'black',
    fontSize: moderateScale(20) ,
    paddingTop: horizontalScale(8)
  },
  searchicon: {
    paddingTop: horizontalScale(9)
  },
  ViewOrder: {
    flexDirection: 'row',
    paddingBottom: horizontalScale(15),
    justifyContent: 'space-between'
  },
  Order0: {
    color: 'black',
    paddingTop:horizontalScale(7),
    paddingBottom:horizontalScale(8),
   fontFamily:'Metropolis-Bold',
   fontSize:moderateScale(18),
  },
  Order: {
    color: 'black',
    paddingTop:horizontalScale(7),
    paddingBottom:horizontalScale(8),
   
  },
  Order2: {
    color: '#B9B9B9',
    paddingTop:horizontalScale(7),
    paddingBottom:horizontalScale(8),
  },
  Order3: {
    color: '#2AA952',
    paddingTop:horizontalScale(7),
    paddingBottom:horizontalScale(8),
  }

});