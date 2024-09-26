import { View, Text, StatusBar, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList, VirtualizedList } from 'react-native'
import React, { startTransition, useEffect } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Metrics/Metrics'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { fetchcategory } from '../../redux/Slice/category.slice';
import { useDispatch, useSelector } from 'react-redux';


const Data = [
  {
    id: 1,
    title: 'Dorothy perkins',
    subtitle: 'Evening Dress',
    img: require('../../../assets/img/shopping.webp'),
    price: 15,
    discount: 12
  },
  {
    id: 0,
    title: 'Dorothy perkins',
    subtitle: 'Evening Dress',
    img: require('../../../assets/img/Dress2.webp'),
    price: 15,
    discount: 12
  },
  {
    id: 2,
    title: 'Dorothy perkins',
    subtitle: 'Evening Dress',
    img: require('../../../assets/img/shopping.webp'),
    price: 15,
    discount: 12
  },
  {
    id: 3,
    title: 'Dorothy perkins',
    subtitle: 'Evening Dress',
    img: require('../../../assets/img/shopping.webp'),
    price: 15,
    discount: 12
  }
]
const Data1 = [
  {
    id: 1,
    title: 'Sittly',
    subtitle: 'Sport Dress',
    img: require('../../../assets/img/Dress1.jpg'),
    price: 19,
    discount: 22
  },
  {
    id: 0,
    title: 'Sittly',
    subtitle: 'Sport Dress',
    img: require('../../../assets/img/Dress1.jpg'),
    price: 19,
    discount: 22
  },
  {
    id: 2,
    title: 'Sittly',
    subtitle: 'Sport Dress',
    img: require('../../../assets/img/Dress1.jpg'),
    price: 19,
    discount: 22
  },
  {
    id: 3,
    title: 'Sittly',
    subtitle: 'Sport Dress',
    img: require('../../../assets/img/Dress1.jpg'),
    price: 19,
    discount: 22
  }
]



export default function HomePage({ route, navigation }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchcategory())
  }, [])


  const category = useSelector(state => state.categoryfire);

  // console.log("sjdjdjdjjdjjd", category);
  const ProductCard = ({ v }) => (
    <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => navigation.navigate("ProductCard")}>

      <Image source={v.img} style={{ width: 170, height: 250, borderRadius: 10 }}></Image>

      <View style={style.iconview}>
        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
        <Text style={{ color: '#9B9B9B' }}>(10)</Text>
      </View>

      <Text style={style.title}>{v.title}</Text>
      <Text style={style.subtitle}>{v.subtitle}</Text>
      <View style={style.PriceView}>
        <Text style={style.discount}>{v.discount}$</Text>
        <Text style={style.price}>{v.price}$</Text>

      </View>

    </TouchableOpacity>



  )
  return (
    <ScrollView style={style.container}>
      <StatusBar
        animated={true}
        translucent backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={style.mainview}>
        <ImageBackground
          source={require('../../../assets/img/pexels-godisable-jacob-226636-896293.jpg')}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
        </ImageBackground>
        <View style={{ width: horizontalScale(200) }}>
          <Text style={style.Fashionsale}>Fashion Sale</Text>

          <TouchableOpacity style={style.checkbutton}>
            <Text style={style.CheckText}>Check</Text>

          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingHorizontal: 5 }}>

        <View style={style.SaleView}>
          <View>
            <Text style={style.SaleText}>Sale </Text>
            <Text style={style.SummerText}>Super summer sale </Text>
          </View>


          <Text style={style.ViewAll}>View all</Text>

        </View>

        <FlatList
          data={Data}
          renderItem={({ item }) => <ProductCard v={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />

      </View>
      <View style={{ paddingHorizontal: 5 }}>

        <View style={style.SaleView}>
          <View>
            <Text style={style.SaleText}>New </Text>
            <Text style={style.SummerText}>You've never seen it before! </Text>
          </View>


          <Text style={style.ViewAll}>View all</Text>

        </View>

        <FlatList
          data={Data1}
          renderItem={({ item }) => <ProductCard v={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />

      </View>
      {/* {category.categoryfire.map((v, i) => {
        return (

          <View>
            {i % 10 === 0 &&

              <View>
                <View style={style.FisrtNew}>
                  <TouchableOpacity onPress={() => navigation.navigate("CategoriesTwo", {
                    cat_id: v.id
                  })}><Image source={require('../../../assets/img/Graphic.png')} style={{ width: '100%', height: '100%' }} /></TouchableOpacity>
                  <Text style={style.FistViewText}>New collection {v.name}</Text>
                </View>


                <View style={style.DirectView}>
                  <View style={style.SecondView}>
                    <View style={style.SummSale}>
                      <View style={style.SumTextView}>
                        <TouchableOpacity><Text style={style.SummText1}> {v.name}</Text></TouchableOpacity>
                      </View>


                    </View>
                    <View style={style.BlackView}>
                      <TouchableOpacity><Image source={require('../../../assets/img/Graphic1.png')} style={{ width: '100%', height: '100%' }} /></TouchableOpacity>
                      <Text style={style.BlackText}>Black</Text>
                    </View>
                  </View>

                  <View style={style.BodieView}>
                    <TouchableOpacity><Image source={require('../../../assets/img/Graphic3.png')} style={{ width: '100%', height: '100%' }} />

                      <Text style={style.hoodieText}>Men's hoodies</Text>
                    </TouchableOpacity>

                  </View>
                </View>
              </View>
            }
          </View>
        )
      })} */}
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  mainview: {
    width: '100%',
    height: verticalScale(570),
    position: 'relative'
  },
  Fashionsale: {
    color: 'white',
    fontSize: moderateScale(54),
    position: 'absolute',
    bottom: moderateScale(130),
    left: moderateScale(12),
    fontFamily: 'Metropolis-Black'
  },

  checkbutton: {
    width: verticalScale(150),
    backgroundColor: '#DB3022',
    height: verticalScale(40),
    alignItems: 'center',
    padding: 10,
    borderRadius: moderateScale(50),
    position: 'absolute',
    bottom: moderateScale(80),
    left: moderateScale(12),

  },
  CheckText: {
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: 'Metropolis-Medium'
  },
  SaleView: {
    flex: 1,
    marginTop: verticalScale(18),
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(12),
    justifyContent: 'space-between',
    marginBottom: verticalScale(30)
  },
  SaleText: {
    color: '#222222',
    fontSize: moderateScale(32),
    fontFamily: 'Metropolis-Bold'
  },
  SummerText: {
    color: '#9B9B9B',
    fontSize: moderateScale(11),
    fontFamily: 'Metropolis-Regular'
  },
  ViewAll: {
    paddingRight: horizontalScale(10),
    marginTop: verticalScale(19),
    fontSize: moderateScale(13),
    fontFamily: 'Metropolis-Regular',
    color: 'black'
  },
  title: {
    color: 'black',
    paddingHorizontal: horizontalScale(4),
    fontSize: moderateScale(13),
    fontFamily: 'Metropolis-Regular'
  },
  subtitle: {
    color: 'black',
    paddingHorizontal: horizontalScale(4),
    fontSize: moderateScale(19),
    fontFamily: 'Metropolis-SemiBold'
  },
  iconview: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(2),
    marginBottom: verticalScale(10),
    marginTop: verticalScale(6)
  },
  PriceView: {
    flexDirection: 'row'
  },
  discount: {
    color: '#9B9B9B',
    fontSize: moderateScale(19),
    marginTop: verticalScale(2),
    paddingHorizontal: horizontalScale(3),
    textDecorationLine: 'line-through',
    fontFamily: 'Metropolis-Medium'
  },
  price: {
    color: '#DB3022',
    fontSize: moderateScale(19),
    marginTop: verticalScale(2),
    paddingLeft: horizontalScale(6),
    fontFamily: 'Metropolis-Medium'
  },
  FisrtNew: {
    marginTop: verticalScale(60),
    width: '100%',
    height: verticalScale(390)
  },
  FistViewText: {
    color: 'white',
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(38),
    position: 'absolute',
    bottom: verticalScale(18),
    right: horizontalScale(22)
  },

  SummSale: {
    backgroundColor: 'white',
    width: '50%',
    height: '50%',
  },
  SumTextView: {
    width: horizontalScale(150),
    height: verticalScale(100),

  },
  SummText1: {
    color: '#DB3022',
    fontSize: moderateScale(30),
    marginTop: 20,
    fontFamily: 'Metropolis-Bold',
  },
  BlackView: {
    position: 'relative',
    width: '100%',
    height: '50%',
  },
  BlackText: {
    color: 'white',
    fontSize: moderateScale(35),
    fontFamily: 'Metropolis-Bold',
    position: 'absolute',
    bottom: verticalScale(10),
    left: horizontalScale(18)
  },
  SecondView: {
    width: '50%',
    height: verticalScale(400)
  },
  DirectView: {
    width: '100%',
    height: verticalScale(400),
    flexDirection: 'row'
  },
  BodieView: {

    width: '50%',
    height: '100%',
    position: 'relative'
  },
  hoodieTextView: {

  },

  hoodieText: {
    position: 'absolute',
    bottom: 185,
    left: 50,
    color: 'white',
    fontSize: moderateScale(35),
    fontFamily: 'Metropolis-Bold',
  }

})

