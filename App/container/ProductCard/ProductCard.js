import { View, Text, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SliderBox } from "react-native-image-slider-box";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Metrics/Metrics';
import Collapsible from 'react-native-collapsible';
import { useDispatch, useSelector } from 'react-redux';
import { ProBySub, getProducts } from '../../redux/Slice/product.slice';
import { ShopbySub } from '../../redux/Slice/shopping.slice';
import { addtoCart, addtocart } from '../../redux/Slice/cart.slice';

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

export default function ProductCard({ route, navigation }) {
    console.log("amitttttttttttttttttttttt",route);
    
    const product = useSelector(state => state.productfire);
    console.log("skskkskskskks", product.Productfire);

    const  filterData = product.Productfire.find((v)=> v.id === route.params?.id);

    console.log("filterDatafilterDatafilterDatafilterData",filterData);




    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(ShopbySub({ cat_id: route.params.cat_id, subcate_id: route.params.subcate_id }))

    // }, [])
        useEffect(() => {
        dispatch(getProducts())

    }, [])

    

    console.log("route.params.cat_id", route.params.cat_id);
    console.log("route.params.subcate_id", route.params.subcate_id);

    const [images, setImages] = useState(
        [
            require('../../../assets/img/Dress1.jpg'),
            require('../../../assets/img/Dress2.webp')          // Local image
        ]
    )
    console.log(images);

    const [collapsed, setCollapsed] = React.useState(true);
    const [Collapsed2, setCollapsed2] = React.useState(true);
    const [ColLaPsed3, setCollapsed3] = React.useState(true);

    const toggleExpand=()=>{
        setCollapsed(!collapsed)
    }
    const ToggleExpand2=()=>{
        setCollapsed2(!Collapsed2)
    }
    const ToggleExpand3=()=>{
        setCollapsed3(!ColLaPsed3)
    }

    const ProductCard = ({ v }) => (
        <View style={{ marginRight: 20 }}>

            <Image source={v.img} style={{ width: 170, height: 250, borderRadius: 10 }}></Image>

            <View style={styles.iconview}>
                <FontAwesome name="star" size={17} style={{ color: '#FFBA49', marginRight: 3 }} />
                <FontAwesome name="star" size={17} style={{ color: '#FFBA49', marginRight: 3 }} />
                <FontAwesome name="star" size={17} style={{ color: '#FFBA49', marginRight: 3 }} />
                <FontAwesome name="star" size={17} style={{ color: '#FFBA49', marginRight: 3 }} />
                <FontAwesome name="star" size={17} style={{ color: '#FFBA49', marginRight: 3 }} />
                <Text style={{ color: '#9B9B9B' }}>(10)</Text>
            </View>
            <View style={{ position: 'relative' }}>
                <TouchableOpacity><FontAwesome name="heart-o" size={20} color="black" style={styles.heart2} /></TouchableOpacity>
            </View>
            <Text style={styles.title}>{v.title}</Text>
            <Text style={styles.subtitle}>{v.subtitle}</Text>
            <View style={styles.PriceView}>
                <Text style={styles.discount}>{v.discount}$</Text>
                <Text style={styles.price}>{v.price}$</Text>

            </View>

        </View>



    )
    

    const handlecart=(id) => {
        dispatch(addtoCart({id , uid : 'parth'}))
        navigation.navigate("My_Bag")
    }
    return (
        <View style = { styles.mainContainer } >
              <View style={styles.bodyContainer}>
              <StatusBar
                        animated={true}
                        translucent backgroundColor="transparent"
                        barStyle="dark-content"
                    />
                <ScrollView style={styles.container}>
                    {/* <View style={styles.ArrowView}>
                        <Text style={styles.KeyboardArrow}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></Text>
                        <Text style={styles.ArrowText}>Short dress</Text>
                        <TouchableOpacity><MaterialIcons name="share" size={30} color="black" style={{ marginTop: 27 }} /></TouchableOpacity>
                    </View> */}


                    <ScrollView horizontal>
                        {
                            images.map((v) => (
                                <Image source={v} style={{ width: 320, height: 480, resizeMode: 'cover', marginRight: 20 }} />
                            ))
                        }
                    </ScrollView>

                    <View style={styles.SizeBlackView}>
                        <View style={styles.SizeView}>
                            <Text style={styles.SizeText}>Size</Text>
                            <MaterialIcons name="keyboard-arrow-down" size={25} color='black' style={styles.SizeArrow} />
                        </View>
                        <View style={styles.BlackView}>
                            <Text style={styles.SizeText}>Black</Text>
                            <MaterialIcons name="keyboard-arrow-down" size={25} color='black' style={styles.SizeArrow} />
                        </View>
                        <View style={{ position: 'relative' }}>
                            <TouchableOpacity><FontAwesome name="heart-o" size={20} color="black" style={styles.heart} /></TouchableOpacity>
                        </View>
                    </View>
                      {/* {product.Productfire.map((v)=>( */}
                         <View>
                         <View style={styles.HandMView}>
                                <View>
                                    <Text style={styles.HAndM}>{filterData.Productname}</Text>
                                    <Text style={styles.ShortDress}>Short black dress</Text>
                                 <View style={styles.iconview}>
                                            <FontAwesome name="star" size={13} style={{ color: '#FFBA49', marginRight: 2, marginTop: 2 }} />
                                            <FontAwesome name="star" size={13} style={{ color: '#FFBA49', marginRight: 2, marginTop: 2 }} />
                                            <FontAwesome name="star" size={13} style={{ color: '#FFBA49', marginRight: 2, marginTop: 2 }} />
                                            <FontAwesome name="star" size={13} style={{ color: '#FFBA49', marginRight: 2, marginTop: 2 }} />
                                            <FontAwesome name="star" size={13} style={{ color: '#FFBA49', marginRight: 3, marginTop: 2 }} />
                                    <Text style={{ color: '#9B9B9B', fontSize: 13 }}>(10)</Text>
                                </View>
                                    </View>
                         <View>
                            <Text style={styles.HANdMPrice}>${filterData.Price}</Text>
                            </View>   
                             </View>
                             <View style={styles.TextsView}>
                             <Text style={styles.Texts}> {filterData.Description}
        
                             </Text>
                         </View>
                         </View>
            
                      {/* ))
                      } */}
                                   
                    
                    <TouchableOpacity
                            onPress={toggleExpand}
                        >
                    <View style={styles.ItemView}>
                        <Text style={styles.ItemText}>Item detail</Text>
                            <MaterialIcons name="chevron-right" size={28} color='black' style={{ marginTop: 8, marginRight: 4 }} />
                    </View>
                        <Collapsible collapsed={collapsed}>
                             <View>
                                 <Text style={styles.collapsedText}>
                                It uses a dictionary of over 200 Latin words, 
                                combined with a handful of model sentence structures, 
                                to generate Lorem Ipsum which looks reasonable. The 
                                generated Lorem Ipsum is therefore always free from repetition,
                                injected humour, or non-characteristic words etc.5paragraphswordsbytes
                                lists Start with 'Loremipsum dolor sit amet...'
                                 </Text>
                             </View>
                        </Collapsible>
                    </TouchableOpacity>

                    <TouchableOpacity
                               onPress={ToggleExpand2}
                        >
                    <View style={styles.ShippingView}>
                            <Text style={styles.ItemText}>Shipping info</Text>
                            <MaterialIcons name="chevron-right" size={28} color='black' style={{ marginTop: 8, marginRight: 4 }} />
                    </View>
                        <Collapsible collapsed={Collapsed2}>
                            <View>
                                <Text style={styles.collapsedText}>
                                It uses a dictionary of over 200 Latin words, 
                                combined with a handful of model sentence structures, 
                                to generate Lorem Ipsum which looks reasonable. The 
                                generated Lorem Ipsum is therefore always free from repetition,
                                injected humour, or non-characteristic words etc.5paragraphswordsbytes
                                lists Start with 'Loremipsum dolor sit amet...'
                                </Text>
                            </View>
                        </Collapsible>
                    </TouchableOpacity>

                    <TouchableOpacity
                               onPress={ToggleExpand3}
                        >
                    <View style={styles.SupportView}>
                        <Text style={styles.ItemText}>Support</Text>
                        <MaterialIcons name="chevron-right" size={28} color='black' style={{ marginTop: 8, marginRight: 4 }} />
                    </View>
                        <Collapsible collapsed={ColLaPsed3}>
                                <View>
                                    <Text style={styles.collapsedText}>
                                        It uses a dictionary of over 200 Latin words, 
                                        combined with a handful of model sentence structures, 
                                        to generate Lorem Ipsum which looks reasonable. The 
                                        generated Lorem Ipsum is therefore always free from repetition,
                                        injected humour, or non-characteristic words etc.5paragraphswordsbytes
                                        lists Start with 'Loremipsum dolor sit amet...'
                                    </Text>
                                </View>
                        </Collapsible>
                    </TouchableOpacity>
                    
                    <View style={styles.LikeThisView}>
                        <Text style={styles.LikeThisText}>You can also like this </Text>
                        <Text style={styles.NumitemText}>12 item</Text>
                    </View>
                    <FlatList
                        data={Data}
                        renderItem={({ item }) => <ProductCard v={item} />}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                
                    
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.ButtonView} onPress={() =>handlecart(filterData.id) }>
                <View style={styles.ButtonUnderView}>
                    <Text style={styles.AddCart}>ADD TO CART</Text>
                </View>
            </TouchableOpacity>
        </View> 

)}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: horizontalScale(17),
        backgroundColor: '#F9F9F9'
    },
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
    SizeBlackView: {
        marginTop: verticalScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    SizeView: {
        width: horizontalScale(140),
        height: verticalScale(50),
        borderWidth: 1,
        borderColor: '#F01F0E',
        borderRadius: moderateScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    SizeText: {
        color: '#222222',
        fontFamily: 'Metropolis-Medium',
        fontSize: moderateScale(16),
        marginLeft: horizontalScale(10),
        marginTop: verticalScale(13)
    },
    SizeArrow: {
        marginRight: horizontalScale(6),
        marginTop: verticalScale(10)
    },
    BlackView: {
        width: horizontalScale(140),
        height: verticalScale(50),
        borderWidth: 1,
        borderColor: '#9B9B9B',
        borderRadius:  moderateScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: horizontalScale(30),
    },
    heart: {
        position: 'absolute',
        bottom:verticalScale(-43),
        right: horizontalScale(3),
        backgroundColor: 'white',
        borderRadius: moderateScale(20),
        padding: horizontalScale(10),
        padding : verticalScale(10),
        elevation: 2
    },
    HandMView: {
        marginTop: verticalScale(18),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    HAndM: {
        color: 'black',
        fontFamily: 'Metropolis-SemiBold',
        fontSize: moderateScale(27)
    },
    ShortDress: {
        color: '#9B9B9B',
        fontFamily: 'Metropolis-Regular',
        fontSize: moderateScale(14),
    },
    iconview: {
        flexDirection: 'row',
        marginTop: verticalScale(8),
    },
    HANdMPrice: {
        color: 'black',
        fontSize: moderateScale(24),
        fontFamily: 'Metropolis-SemiBold',
        marginRight: horizontalScale(15)
    },
    TextsView: {
        marginTop: verticalScale(22),
        marginLeft: horizontalScale(14),
        width: '90%',
    },
    Texts: {
        color: '#222222',
        fontFamily: 'Metropolis-Regular',
        fontSize: moderateScale(15),
        lineHeight: verticalScale(20),
        textAlign: 'left'
    },
    ItemView: {
        marginTop: verticalScale(23),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#9B9B9B',
    },
    ItemText: {
        color: '#222222',
        fontFamily: 'Metropolis-Regular',
        fontSize: moderateScale(17),
        marginTop:verticalScale(15),
        marginBottom: verticalScale(15),

    },
    ShippingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#9B9B9B',
    },
    SupportView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#9B9B9B',
        borderBottomColor: '#9B9B9B',
        borderBottomWidth: 1
    },
    LikeThisView: {
        marginTop: verticalScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: verticalScale(15)
    },
    LikeThisText: {
        color: '#222222',
        fontFamily: 'Metropolis-SemiBold',
        fontSize: moderateScale(19),
    },
    NumitemText: {
        color: '#9B9B9B',
        fontFamily: 'Metropolis-Regular',
        fontSize:  moderateScale(13)
    },
    title: {
        color: 'black',
        paddingHorizontal: horizontalScale(4),
        fontSize: moderateScale(13),
        fontFamily: 'Metropolis-Regular',
        marginTop: verticalScale(5)
    },
    subtitle: {
        color: 'black',
        paddingHorizontal: horizontalScale(4),
        fontSize:  moderateScale(19),
        fontFamily: 'Metropolis-SemiBold',
        marginTop:verticalScale(2)
    },
    PriceView: {
        flexDirection: 'row'
    },
    discount: {
        color: '#9B9B9B',
        fontSize:  moderateScale(19),
        marginTop: verticalScale(2),
        paddingHorizontal: horizontalScale(3),
        textDecorationLine: 'line-through',
        fontFamily: 'Metropolis-Medium'
    },
    price: {
        color: '#DB3022',
        fontSize : moderateScale(19),
        marginTop: verticalScale(2),
        paddingLeft: horizontalScale(6),
        fontFamily: 'Metropolis-Medium'
    },
    heart2: {
        position: 'absolute',
        right: horizontalScale(0),
        bottom: verticalScale(10),
        padding: horizontalScale(10),
        padding:verticalScale(10),
        backgroundColor: 'white',
        borderRadius: moderateScale(23)
    },
    ButtonView: {
        backgroundColor: 'white',
        width: '100%',
        height: verticalScale(120),
    },
    ButtonUnderView: {
        backgroundColor: '#DB3022',
        width: horizontalScale(350),
        height: verticalScale(50),
        margin: 'auto',
        borderRadius: moderateScale(50),

    },
    AddCart: {
        color: '#FFFFFF',
        fontFamily: 'Metropolis-Medium',
        fontSize: moderateScale(17),
        margin: 'auto'
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column'
      },
       headerContainer: {
        flex: 1,
      },
      bodyContainer: {
        flex: 10
      },
      collapsedText : {
        color: '#222222',
        fontFamily: 'Metropolis-Regular',
        fontSize: moderateScale(15),
        lineHeight: verticalScale(20),
        marginBottom:verticalScale(10)
      }
})





// //     import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
// //     import React from 'react'
    
// //     export default function filter() {
// //       return (
// //     < View style = { styles.mainContainer } >
// //     <View style={styles.bodyContainer}>
// //       <ScrollView >
// //         <View style={{ height: 250, backgroundColor: 'red' }}>
// //         </View>
// //         <View style={{ height: 250, backgroundColor: 'blue' }}>
// //         </View>
// //         <View style={{ height: 250, backgroundColor: 'green' }}>
// //         </View>
// //       </ScrollView>
// //     </View>
// //     <View style={styles.headerContainer}>
// //       <Button style={{ backgroundColor: 'blue', alignSelf:'center' }}
// //         title="THIS IS A BUTTON" />
// //     </View>
// //   </View >
// //   )
// // }

// // const styles = StyleSheet.create({
// //     mainContainer: {
// //         flex: 1,
// //         flexDirection: 'column'
// //       },
// //        headerContainer: {
// //         flex: 1,
// //       },
// //       bodyContainer: {
// //         flex: 10
// //       }
// // })

// import { View, Text, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { SliderBox } from "react-native-image-slider-box";
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import React, { useEffect, useState } from 'react'
// import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Metrics/Metrics';
// import Collapsible from 'react-native-collapsible';
// import { useDispatch, useSelector } from 'react-redux';
// import { ProBySub } from '../../redux/Slice/product.slice';

// const Data = [
//     {
//         id: 1,
//         title: 'Dorothy perkins',
//         subtitle: 'Evening Dress',
//         img: require('../../../assets/img/shopping.webp'),
//         price: 15,
//         discount: 12
//     },
//     {
//         id: 0,
//         title: 'Dorothy perkins',
//         subtitle: 'Evening Dress',
//         img: require('../../../assets/img/Dress2.webp'),
//         price: 15,
//         discount: 12
//     },
//     {
//         id: 2,
//         title: 'Dorothy perkins',
//         subtitle: 'Evening Dress',
//         img: require('../../../assets/img/shopping.webp'),
//         price: 15,
//         discount: 12
//     },
//     {
//         id: 3,
//         title: 'Dorothy perkins',
//         subtitle: 'Evening Dress',
//         img: require('../../../assets/img/shopping.webp'),
//         price: 15,
//         discount: 12
//     }
// ]
// export default function ProductCard({ route, navigation }) {
//     console.log("rorooroor",route.params);
    
//     const productfire = useSelector(state => state.productfire);
//     const data = productfire.Productfire.find((v) => v.id === route.params?.id)
//     console.log("skskkskskskks", data);

//     const dispatch = useDispatch()

//     // useEffect(() => {
//     //     dispatch(ProBySub({cat_id: route.params.cat_id  , subcate_id:route.params.subcate_id}))
    
//     // }, [])

//     // console.log("route.params.cat_id", route.params.cat_id);
//     // console.log("route.params.subcate_id", route.params.subcate_id);

//     const [images, setImages] = useState(
//         [
//             require('../../../assets/img/Dress1.jpg'),
//             require('../../../assets/img/Dress2.webp')          // Local image
//         ]
//     )
//     console.log(images);

//     const [collapsed, setCollapsed] = React.useState(true);
//     const [Collapsed2, setCollapsed2] = React.useState(true);
//     const [ColLaPsed3, setCollapsed3] = React.useState(true);

//     const toggleExpand=()=>{
//         setCollapsed(!collapsed)
//     }
//     const ToggleExpand2=()=>{
//         setCollapsed2(!Collapsed2)
//     }
//     const ToggleExpand3=()=>{
//         setCollapsed3(!ColLaPsed3)
//     }

//     const ProductCard = ({ v }) => (
//         <View style={{ marginRight: 20 }}>

//             <Image source={v.img} style={{ width: 170, height: 250, borderRadius: 10 }}></Image>

//             <View style={styles.iconview}>
//                 <FontAwesome name="star" size={17} style={{ color: '#FFBA49', marginRight: 3 }} />
//                 <FontAwesome name="star" size={17} style={{ color: '#FFBA49', marginRight: 3 }} />
//                 <FontAwesome name="star" size={17} style={{ color: '#FFBA49', marginRight: 3 }} />
//                 <FontAwesome name="star" size={17} style={{ color: '#FFBA49', marginRight: 3 }} />
//                 <FontAwesome name="star" size={17} style={{ color: '#FFBA49', marginRight: 3 }} />
//                 <Text style={{ color: '#9B9B9B' }}>(10)</Text>
//             </View>
//             <View style={{ position: 'relative' }}>
//                 <TouchableOpacity><FontAwesome name="heart-o" size={20} color="black" style={styles.heart2} /></TouchableOpacity>
//             </View>
//             <Text style={styles.title}>{v.title}</Text>
//             <Text style={styles.subtitle}>{v.subtitle}</Text>
//             <View style={styles.PriceView}>
//                 <Text style={styles.discount}>{v.discount}$</Text>
//                 <Text style={styles.price}>{v.price}$</Text>

//             </View>

//         </View>



//     )
//     return (
//         <View style = { styles.mainContainer } >
//               <View style={styles.bodyContainer}>
//               <StatusBar
//                         animated={true}
//                         translucent backgroundColor="transparent"
//                         barStyle="dark-content"
//                     />
//                 <ScrollView style={styles.container}>
//                     {/* <View style={styles.ArrowView}>
//                         <Text style={styles.KeyboardArrow}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></Text>
//                         <Text style={styles.ArrowText}>Short dress</Text>
//                         <TouchableOpacity><MaterialIcons name="share" size={30} color="black" style={{ marginTop: 27 }} /></TouchableOpacity>
//                     </View> */}


//                     <ScrollView horizontal>
//                         {
//                             images.map((v) => (
//                                 <Image source={v} style={{ width: 320, height: 480, resizeMode: 'cover', marginRight: 20 }} />
//                             ))
//                         }
//                     </ScrollView>

//                     <View style={styles.SizeBlackView}>
//                         <View style={styles.SizeView}>
//                             <Text style={styles.SizeText}>Size</Text>
//                             <MaterialIcons name="keyboard-arrow-down" size={25} color='black' style={styles.SizeArrow} />
//                         </View>
//                         <View style={styles.BlackView}>
//                             <Text style={styles.SizeText}>Black</Text>
//                             <MaterialIcons name="keyboard-arrow-down" size={25} color='black' style={styles.SizeArrow} />
//                         </View>
//                         <View style={{ position: 'relative' }}>
//                             <TouchableOpacity><FontAwesome name="heart-o" size={20} color="black" style={styles.heart} /></TouchableOpacity>
//                         </View>
//                     </View>
//                       {/* {productfire.Productfire.map((v)=>( */}
//                          <View>
//                          <View style={styles.HandMView}>
//                                 <View>
//                                     <Text style={styles.HAndM}>{data.Productname}</Text>
//                                     <Text style={styles.ShortDress}>Short black dress</Text>
//                                  <View style={styles.iconview}>
//                                             <FontAwesome name="star" size={13} style={{ color: '#FFBA49', marginRight: 2, marginTop: 2 }} />
//                                             <FontAwesome name="star" size={13} style={{ color: '#FFBA49', marginRight: 2, marginTop: 2 }} />
//                                             <FontAwesome name="star" size={13} style={{ color: '#FFBA49', marginRight: 2, marginTop: 2 }} />
//                                             <FontAwesome name="star" size={13} style={{ color: '#FFBA49', marginRight: 2, marginTop: 2 }} />
//                                             <FontAwesome name="star" size={13} style={{ color: '#FFBA49', marginRight: 3, marginTop: 2 }} />
//                                     <Text style={{ color: '#9B9B9B', fontSize: 13 }}>(10)</Text>
//                                 </View>
//                                     </View>
//                          <View>
//                             <Text style={styles.HANdMPrice}>${data.Price}</Text>
//                             </View>   
//                              </View>
//                              <View style={styles.TextsView}>
//                              <Text style={styles.Texts}> {data.Description}
        
//                              </Text>
//                          </View>
//                          </View>
            
//                       {/* )) */}
//                       {/* } */}
                                   
                    
//                     <TouchableOpacity
//                             onPress={toggleExpand}
//                         >
//                     <View style={styles.ItemView}>
//                         <Text style={styles.ItemText}>Item detail</Text>
//                             <MaterialIcons name="chevron-right" size={28} color='black' style={{ marginTop: 8, marginRight: 4 }} />
//                     </View>
//                         <Collapsible collapsed={collapsed}>
//                              <View>
//                                  <Text style={styles.collapsedText}>
//                                 It uses a dictionary of over 200 Latin words, 
//                                 combined with a handful of model sentence structures, 
//                                 to generate Lorem Ipsum which looks reasonable. The 
//                                 generated Lorem Ipsum is therefore always free from repetition,
//                                 injected humour, or non-characteristic words etc.5paragraphswordsbytes
//                                 lists Start with 'Loremipsum dolor sit amet...'
//                                  </Text>
//                              </View>
//                         </Collapsible>
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                                onPress={ToggleExpand2}
//                         >
//                     <View style={styles.ShippingView}>
//                             <Text style={styles.ItemText}>Shipping info</Text>
//                             <MaterialIcons name="chevron-right" size={28} color='black' style={{ marginTop: 8, marginRight: 4 }} />
//                     </View>
//                         <Collapsible collapsed={Collapsed2}>
//                             <View>
//                                 <Text style={styles.collapsedText}>
//                                 It uses a dictionary of over 200 Latin words, 
//                                 combined with a handful of model sentence structures, 
//                                 to generate Lorem Ipsum which looks reasonable. The 
//                                 generated Lorem Ipsum is therefore always free from repetition,
//                                 injected humour, or non-characteristic words etc.5paragraphswordsbytes
//                                 lists Start with 'Loremipsum dolor sit amet...'
//                                 </Text>
//                             </View>
//                         </Collapsible>
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                                onPress={ToggleExpand3}
//                         >
//                     <View style={styles.SupportView}>
//                         <Text style={styles.ItemText}>Support</Text>
//                         <MaterialIcons name="chevron-right" size={28} color='black' style={{ marginTop: 8, marginRight: 4 }} />
//                     </View>
//                         <Collapsible collapsed={ColLaPsed3}>
//                                 <View>
//                                     <Text style={styles.collapsedText}>
//                                         It uses a dictionary of over 200 Latin words, 
//                                         combined with a handful of model sentence structures, 
//                                         to generate Lorem Ipsum which looks reasonable. The 
//                                         generated Lorem Ipsum is therefore always free from repetition,
//                                         injected humour, or non-characteristic words etc.5paragraphswordsbytes
//                                         lists Start with 'Loremipsum dolor sit amet...'
//                                     </Text>
//                                 </View>
//                         </Collapsible>
//                     </TouchableOpacity>
                    
//                     <View style={styles.LikeThisView}>
//                         <Text style={styles.LikeThisText}>You can also like this </Text>
//                         <Text style={styles.NumitemText}>12 item</Text>
//                     </View>
//                     {/* <FlatList
//                         data={Data}
//                         renderItem={({ item }) => <ProductCard v={item} />}
//                         keyExtractor={item => item.id}
//                         horizontal={true}
//                     /> */}
                
                    
//                 </ScrollView>
//             </View>
//             <TouchableOpacity style={styles.ButtonView} onPress={() => navigation.navigate("My_Bag")}>
//                 <View style={styles.ButtonUnderView}>
//                     <Text style={styles.AddCart}>ADD TO CART</Text>
//                 </View>
//             </TouchableOpacity>
//         </View>

// )}
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingHorizontal: horizontalScale(17),
//         backgroundColor: '#F9F9F9'
//     },
//     ArrowView: {
//         width: '100%',
//         height: verticalScale(80),
//         marginTop: verticalScale(40),
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     ArrowText: {
//         color: 'black',
//         fontSize: moderateScale(23),
//         marginTop: verticalScale(28),
//         fontFamily: 'Metropolis-SemiBold'
//     },
//     KeyboardArrow: {
//         marginTop: verticalScale(16),
//         marginLeft: horizontalScale(-15)
//     },
//     SizeBlackView: {
//         marginTop: verticalScale(20),
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     SizeView: {
//         width: horizontalScale(140),
//         height: verticalScale(50),
//         borderWidth: 1,
//         borderColor: '#F01F0E',
//         borderRadius: moderateScale(10),
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     SizeText: {
//         color: '#222222',
//         fontFamily: 'Metropolis-Medium',
//         fontSize: moderateScale(16),
//         marginLeft: horizontalScale(10),
//         marginTop: verticalScale(13)
//     },
//     SizeArrow: {
//         marginRight: horizontalScale(6),
//         marginTop: verticalScale(10)
//     },
//     BlackView: {
//         width: horizontalScale(140),
//         height: verticalScale(50),
//         borderWidth: 1,
//         borderColor: '#9B9B9B',
//         borderRadius:  moderateScale(10),
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginRight: horizontalScale(30),
//     },
//     heart: {
//         position: 'absolute',
//         bottom:verticalScale(-43),
//         right: horizontalScale(3),
//         backgroundColor: 'white',
//         borderRadius: moderateScale(20),
//         padding: horizontalScale(10),
//         padding : verticalScale(10),
//         elevation: 2
//     },
//     HandMView: {
//         marginTop: verticalScale(18),
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     HAndM: {
//         color: 'black',
//         fontFamily: 'Metropolis-SemiBold',
//         fontSize: moderateScale(27)
//     },
//     ShortDress: {
//         color: '#9B9B9B',
//         fontFamily: 'Metropolis-Regular',
//         fontSize: moderateScale(14),
//     },
//     iconview: {
//         flexDirection: 'row',
//         marginTop: verticalScale(8),
//     },
//     HANdMPrice: {
//         color: 'black',
//         fontSize: moderateScale(24),
//         fontFamily: 'Metropolis-SemiBold',
//         marginRight: horizontalScale(15)
//     },
//     TextsView: {
//         marginTop: verticalScale(22),
//         marginLeft: horizontalScale(14),
//         width: '90%',
//     },
//     Texts: {
//         color: '#222222',
//         fontFamily: 'Metropolis-Regular',
//         fontSize: moderateScale(15),
//         lineHeight: verticalScale(20),
//         textAlign: 'left'
//     },
//     ItemView: {
//         marginTop: verticalScale(23),
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         borderTopWidth: 1,
//         borderTopColor: '#9B9B9B',
//     },
//     ItemText: {
//         color: '#222222',
//         fontFamily: 'Metropolis-Regular',
//         fontSize: moderateScale(17),
//         marginTop:verticalScale(15),
//         marginBottom: verticalScale(15),

//     },
//     ShippingView: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         borderTopWidth: 1,
//         borderTopColor: '#9B9B9B',
//     },
//     SupportView: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         borderTopWidth: 1,
//         borderTopColor: '#9B9B9B',
//         borderBottomColor: '#9B9B9B',
//         borderBottomWidth: 1
//     },
//     LikeThisView: {
//         marginTop: verticalScale(20),
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: verticalScale(15)
//     },
//     LikeThisText: {
//         color: '#222222',
//         fontFamily: 'Metropolis-SemiBold',
//         fontSize: moderateScale(19),
//     },
//     NumitemText: {
//         color: '#9B9B9B',
//         fontFamily: 'Metropolis-Regular',
//         fontSize:  moderateScale(13)
//     },
//     title: {
//         color: 'black',
//         paddingHorizontal: horizontalScale(4),
//         fontSize: moderateScale(13),
//         fontFamily: 'Metropolis-Regular',
//         marginTop: verticalScale(5)
//     },
//     subtitle: {
//         color: 'black',
//         paddingHorizontal: horizontalScale(4),
//         fontSize:  moderateScale(19),
//         fontFamily: 'Metropolis-SemiBold',
//         marginTop:verticalScale(2)
//     },
//     PriceView: {
//         flexDirection: 'row'
//     },
//     discount: {
//         color: '#9B9B9B',
//         fontSize:  moderateScale(19),
//         marginTop: verticalScale(2),
//         paddingHorizontal: horizontalScale(3),
//         textDecorationLine: 'line-through',
//         fontFamily: 'Metropolis-Medium'
//     },
//     price: {
//         color: '#DB3022',
//         fontSize : moderateScale(19),
//         marginTop: verticalScale(2),
//         paddingLeft: horizontalScale(6),
//         fontFamily: 'Metropolis-Medium'
//     },
//     heart2: {
//         position: 'absolute',
//         right: horizontalScale(0),
//         bottom: verticalScale(10),
//         padding: horizontalScale(10),
//         padding:verticalScale(10),
//         backgroundColor: 'white',
//         borderRadius: moderateScale(23)
//     },
//     ButtonView: {
//         backgroundColor: 'white',
//         width: '100%',
//         height: verticalScale(120),
//     },
//     ButtonUnderView: {
//         backgroundColor: '#DB3022',
//         width: horizontalScale(350),
//         height: verticalScale(50),
//         margin: 'auto',
//         borderRadius: moderateScale(50),

//     },
//     AddCart: {
//         color: '#FFFFFF',
//         fontFamily: 'Metropolis-Medium',
//         fontSize: moderateScale(17),
//         margin: 'auto'
//     },
//     mainContainer: {
//         flex: 1,
//         flexDirection: 'column'
//       },
//        headerContainer: {
//         flex: 1,
//       },
//       bodyContainer: {
//         flex: 10
//       },
//       collapsedText : {
//         color: '#222222',
//         fontFamily: 'Metropolis-Regular',
//         fontSize: moderateScale(15),
//         lineHeight: verticalScale(20),
//         marginBottom:verticalScale(10)
//       }
// })

// //     import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
// //     import React from 'react'
    
// //     export default function filter() {
// //       return (
// //     < View style = { styles.mainContainer } >
// //     <View style={styles.bodyContainer}>
// //       <ScrollView >
// //         <View style={{ height: 250, backgroundColor: 'red' }}>
// //         </View>
// //         <View style={{ height: 250, backgroundColor: 'blue' }}>
// //         </View>
// //         <View style={{ height: 250, backgroundColor: 'green' }}>
// //         </View>
// //       </ScrollView>
// //     </View>
// //     <View style={styles.headerContainer}>
// //       <Button style={{ backgroundColor: 'blue', alignSelf:'center' }}
// //         title="THIS IS A BUTTON" />
// //     </View>
// //   </View >
// //   )
// // }

// // const styles = StyleSheet.create({
// //     mainContainer: {
// //         flex: 1,
// //         flexDirection: 'column'
// //       },
// //        headerContainer: {
// //         flex: 1,
// //       },
// //       bodyContainer: {
// //         flex: 10
// //       }
// // })