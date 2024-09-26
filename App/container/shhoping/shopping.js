import { View, Text, ScrollView, StatusBar, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Metrics/Metrics'
import Collapsible from 'react-native-collapsible';
import { useDispatch, useSelector } from 'react-redux';
import { ProBySub } from '../../redux/Slice/product.slice';
import { ShopbySub } from '../../redux/Slice/shopping.slice';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useFocusEffect } from '@react-navigation/native';


const data = [
    {
        id: 1,
        title: 'T-shirts',

    },
    {
        id: 2,
        title: 'Crop tops',

    },
    {
        id: 3,
        title: 'Blouses',

    },
    {
        id: 4,
        title: 'Shirt',

    }
]

const items = [''];



const YourOwnComponent = () => (
    <View style={{ padding: 20 }}>
        <Text>This is your own component inside the bottom sheet</Text>
    </View>
);

export default function shhoping({ route, navigation }) {
    // useFocusEffect(
    //     React.useCallback(() => {
    //       return () => bottomSheetRef.current?.close()
    //     }, [])
    //   );`

    const refRBSheet = useRef([]);
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')

    console.log("roooroororor", route);
    const shopping = useSelector(state => state.shoppingfire);
    console.log("skskkskskskks", shopping.Shoppingfire);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ShopbySub({ cat_id: route.params.cat_id, subcate_id: route.params.subcate_id }))

    }, [])

    const ProductCard = ({ v }) => (

        <View style={styles.CategorisView}>
            <View style={styles.Options}><Text style={styles.OptionsText}>{v.title}</Text></View>

        </View>
    )
    const ProductData = ({ v }) => (

        <TouchableOpacity onPress={() => navigation.navigate("ProductCard", {
            id: v.id,
            cat_id: route.params.cat_id,
            subcate_id: route.params.subcate_id
        })}><View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.productMainView}>
                            <View style={styles.productImg}>
                                <Image source={require('../../../assets/img/Dress1.jpg')} style={{ width: '100%', height: '100%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
                            </View>
                            <View>
                                <TouchableOpacity style={{ zIndex: 999 }}><FontAwesome name="heart-o" size={20} color="black" style={styles.heart} /></TouchableOpacity>
                            </View>
                            <View style={styles.productText}>
                                <View style={styles.iconview}>
                                    <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
                                    <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
                                    <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
                                    <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
                                    <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
                                    <Text style={{ color: '#9B9B9B' }}>(3)</Text>
                                </View>
                                <Text style={styles.mangoText}>{v.Productname}</Text>
                                <Text style={styles.tShirt}>{v.Productname}</Text>
                                <Text style={styles.price}>${v.Price}</Text>
                            </View>

                        </View>
                    </View>
        </TouchableOpacity>
    )

    const renderItem = ({ item, index, refRBSheet }) => {
        return (
            <View>
                <RBSheet ref={ref => (refRBSheet.current[index] = ref)}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {setSort('lh'),refRBSheet.current[0].close()}}
                        
                    >
                        <Text style={styles.buttonText}>Low - High</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {setSort('hl'),refRBSheet.current[0].close()}}
                    >
                        <Text style={styles.buttonText}>High - Low</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {setSort('az'),refRBSheet.current[0].close()}}
                    >
                        <Text style={styles.buttonText}>A-Z</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {setSort('za'),refRBSheet.current[0].close()}}
                    >
                        <Text style={styles.buttonText}>Z-A</Text>
                    </TouchableOpacity>
                </RBSheet>
            </View>
        );
    };
    const SesrchData = () => {

        console.log("ssjjsjsjsjs", sort);
        const Fdata = shopping.Shoppingfire.filter((v) => (
            v.Productname.toLowerCase().includes(search.toLowerCase()) ||
            v.Description.toLowerCase().includes(search.toLowerCase()) ||
            v.Price.toString().includes(search)
        ))
        const Sdata = Fdata.sort((a, b) => {
            if (sort === 'lh') {
                return a.Price - b.Price
            } else if (sort === 'hl') {
                return b.Price - a.Price
            } else if (sort === 'az') {
                return a.Productname.localeCompare(b.Productname)
            } else if (sort === 'za') {
                return b.Productname.localeCompare(a.Productname)
            }
        })

        return Sdata

    }
    const FinaleData = SesrchData()

    return (
        <ScrollView style={styles.container}>
            <StatusBar
                animated={true}
                translucent backgroundColor="transparent"
                barStyle="dark-content"
            />
            <View style={{ backgroundColor: 'white', marginBottom: 25 }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <ProductCard v={item} />}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />

                <View style={styles.FilterOptions}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate("filter")}><MaterialIcons name="filter-list" size={30} color="black" /><Text style={styles.filterText}>Filters</Text></TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => refRBSheet.current[0].open()}><FontAwesome name="arrows-v" size={26} color="black" /><Text style={styles.filterText}>Price:lowest to high</Text></TouchableOpacity>
                    <TouchableOpacity><FontAwesome name="th-list" size={26} color="black" /></TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={items}
                        renderItem={(props) => renderItem({ ...props, refRBSheet })}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    {/* <Button
                        title="OPEN BOTTOM SHEET"
                        onPress={() => refRBSheet.current[0].open()}
                    /> */}
                    <RBSheet
                        ref={refRBSheet.current[0]}
                        useNativeDriver={true}
                        customStyles={{
                            wrapper: {
                                backgroundColor: 'transparent',
                            },
                            draggableIcon: {
                                backgroundColor: '#000',
                            },
                        }}
                        customModalProps={{
                            animationType: 'slide',
                            statusBarTranslucent: true,
                        }}
                        customAvoidingViewProps={{
                            enabled: false,
                        }}
                    >
                        <YourOwnComponent />
                    </RBSheet>
                </View>
                <View>
                    <TextInput
                        name="search"
                        onChangeText={setSearch}
                        placeholder="Search"
                    />
                </View>
            </View>

            <FlatList
                data={FinaleData}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => <TouchableOpacity><ProductData v={item} /></TouchableOpacity>}
                keyExtractor={item => item.id}
            // horizontal={true}
            />




        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: horizontalScale(15),
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
        marginTop: verticalScale(22)
    },
    KeyboardArrow: {
        marginTop: verticalScale(16),
        marginLeft: horizontalScale(-15)
    },
    CategorisView: {
        paddingRight: horizontalScale(10),
    },
    Options: {
        width: horizontalScale(90),
        height: verticalScale(35),
        backgroundColor: 'black',
        borderRadius: horizontalScale(100),
        justifyContent: 'center',
        alignItems: 'center',

    },
    OptionsText: {
        fontSize: moderateScale(14),
        fontFamily: 'Metropolis-Bold',
        color: 'white',

    },
    FilterOptions: {
        marginTop: verticalScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F9F9F9',
        marginBottom: verticalScale(20)
    },
    filterText: {
        color: 'black',
        paddingRight: verticalScale(60),
        marginTop: verticalScale(4),
        marginLeft: horizontalScale(10)
    },
    productMainView: {
        width: horizontalScale(170),
        height: verticalScale(350),
        marginBottom: verticalScale(40)

    },
    productImg: {
        width: '100%',
        height: '68%',
        position: 'relative',
    },
    heart: {
        position: 'absolute',
        bottom: verticalScale(-20),
        right: 0,
        backgroundColor: 'white',
        borderRadius: moderateScale(20),
        padding: horizontalScale(10),
        padding: verticalScale(10),

    },
    productText: {
        width: '100%',
        height: '32%',
        backgroundColor: 'white',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 2
    },
    iconview: {
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(4),
        marginTop: verticalScale(5),

    },
    mangoText: {
        color: '#9B9B9B',
        fontSize: 15,
        paddingHorizontal: horizontalScale(6),
        marginTop: verticalScale(6),
        fontFamily: 'Metropolis-SemiBold'
    },
    tShirt: {
        color: 'black',
        fontFamily: 'Metropolis-SemiBold',
        fontSize: moderateScale(18),
        paddingHorizontal: horizontalScale(6),
        marginTop: verticalScale(3)
    },
    price: {
        color: 'black',
        fontSize: moderateScale(16),
        fontFamily: 'Metropolis-Medium',
        paddingHorizontal: horizontalScale(7),
        marginTop: verticalScale(4)
    },
    button: {

        margin: 'auto',
        width: 380,
        paddingVertical: 15,
        backgroundColor: 'green',
        marginBottom: 10,
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    bottomSheetText: {
        fontSize: 18,
        color: 'black'
    },


})