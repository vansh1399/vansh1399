import { View, Text, TouchableOpacity, ScrollView, StatusBar, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { horizontalScale, moderateScale } from '../../../assets/Metrics/Metrics';
import { useDispatch, useSelector } from 'react-redux';
import { deleteadrress, getaddshipadreess } from '../../redux/Slice/addshipingadress.slice';
import BouncyCheckbox from "react-native-bouncy-checkbox";
// import { RadioButton } from 'react-native-paper';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';

const useaddresses = [
    {
        id: 1,
        name: 'Jane Doe',
        Addresses: '3 Newbridge Court',
        area: 'Chino Hills, CA 91709,',
        state: 'United States',
    },
    {
        id: 2,
        name: 'Jane Doe',
        Addresses: '3 Newbridge Court',
        area: 'Chino Hills, CA 91709,',
        state: 'United States',
    },
    {
        id: 3,
        name: 'Jane Doe',
        Addresses: '3 Newbridge Court',
        area: 'Chino Hills, CA 91709,',
        state: 'United States',
    },
];

export default function ShippingAddresses({ route, navigation }) {
    // const [checked, setChecked] = React.useState('first');

    const [selectedId, setSelectedId] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getaddshipadreess('parth'))
    }, [])

    const shipadrress = useSelector(state => state.addshipadrress);
    console.log('shipadrress', shipadrress?.adsshipadrress?.[0]?.addrress)

    const shipflat = shipadrress?.adsshipadrress?.[0]?.addrress

    console.log("");



    const radioButtons = useMemo(() => {
        console.log(shipflat);
        if (shipflat) {
            const Rdata = shipflat?.map((v, i) => {
                return {
                    id: i,
                    label: (
                        // <View style={styles.olldeta}>
                        <View style={styles.olldeta}>
                            <Text style={styles.addtext1}>Full_name:- {v.full_name}</Text>
                            <Text style={styles.addtext}>Address:- {v.address}</Text>
                            <Text style={styles.addtext}>Zip_Code:- {v.zip_code}</Text>
                            <Text style={styles.addtext}>Country:- {v.country}</Text>
                            <Text style={styles.addtext}>City:- {v.city}</Text>
                            <Text style={styles.addtext}>State:- {v.state}</Text>
                            <View style={styles.ViewEdit}>
                                <TouchableOpacity onPress={() => handelEdit(v)}><Text style={styles.ViewEdittext}>Edit</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => handeldete(v)}><Text style={styles.ViewEdittext}>Delete</Text></TouchableOpacity>
                            </View>
                        </View>

                    ),
                    value: v.uid
                }
            })
            return Rdata
        }
        return []
    }, [shipadrress?.adsshipadrress]);
    console.log("oopdpddppdspsdppdspsdpdsp", radioButtons);



    const handeldete = (data) => {
        console.log("psspsppspspspssspdps", data);
        dispatch(deleteadrress(data))
    }

    const handelEdit = (data) => {
        navigation.navigate("AddShipingAddress", data)
    }



    // const adreesssship = 
    const ShippingAddresses = ({ v }) => (
        <View style={styles.olldeta}>
            <Text style={styles.addtext1}>Full_name:- {v.full_name}</Text>
            <Text style={styles.addtext}>Address:- {v.address}</Text>
            <Text style={styles.addtext}>Zip_Code:- {v.zip_code}</Text>
            <Text style={styles.addtext}>Country:- {v.country}</Text>
            <Text style={styles.addtext}>City:- {v.city}</Text>
            <Text style={styles.addtext}>State:- {v.state}</Text>

            <TouchableOpacity style={styles.UseShipping}>
                {/* <BouncyCheckbox
                    size={25}
                    fillColor="black"
                    unFillColor="#FFFFFF"
                    text={v.name}
                    iconStyle={{ borderColor: "black" }}
                    innerIconStyle={{ borderWidth: 2 }}
                /> */}
                {/* <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                /> */}

                <Text style={styles.checkicontext}>Use as the shipping address</Text>
            </TouchableOpacity>
            <View style={styles.ViewEdit}>
                <TouchableOpacity onPress={() => handelEdit(v)}><Text style={styles.ViewEdittext}>Edit</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => handeldete(v)}><Text style={styles.ViewEdittext}>Delete</Text></TouchableOpacity>
            </View>
            {/* <View style={styles.ViewEdit}> */}

            {/* </View> */}
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <StatusBar animated={true} backgroundColor={'transparent'} />

            {/* <View style={styles.Ordertext}>
                <TouchableOpacity><FontAwesome name="angle-left" size={35} color="black" /></TouchableOpacity>
                <View style={styles.viewshipping}>
                    <Text style={styles.Ordertext2}>Shipping Addresses</Text>
                </View>
            </View> */}
            {/* 
            <FlatList
                data={shipflat}
                renderItem={({ item }) => <ShippingAddresses v={item} />}
                keyExtractor={item => item.id}
            /> */}
            <RadioGroup
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
            />
            <View style={styles.btnView}>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("AddShipingAddress")}>
                    <MaterialCommunityIcons name="plus-circle" size={35} color="black" />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.placeorder} onPress={() => navigation.navigate("Success")}>
                    <Text style={styles.AddCart}>Place your order</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: horizontalScale(19),
        paddingTop: horizontalScale(13),
    },
    Ordertext: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: horizontalScale(10),
    },
    Ordertext2: {
        color: 'black',
        fontFamily: 'Metropolis-Bold',
        fontSize: moderateScale(18),
        paddingTop: horizontalScale(8),
    },
    viewshipping: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    olldeta: {
        width:'90%',
        padding: 15,
        // height: 15,
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: horizontalScale(5),
        elevation: 2,
        position: 'relative',
        marginLeft:20
    },
    addtext: {
        fontSize: 16,
        color: 'black',
        paddingBottom: 4,
        // fontWeight:500
    },
    addtext1: {
        color: 'black',
        paddingBottom: 4,
        fontSize: 16
    },
    UseShipping: {
        flexDirection: 'row',
        columnGap: 9,
        paddingTop: 15
    },
    checkicontext: {
        marginLeft: -60,
        marginTop: 5,
        color: 'black',
        paddingTop: 4,
    },
    ViewEdit: {
        columnGap: 40,
        flexDirection: 'row',
        position: 'absolute',
        padding: 10,
        right: 10,
    },
    ViewEdittext: {
        color: 'red',
        paddingTop: 4,
    },
    addButton: {
        paddingTop: 16
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    AddCart: {
        color: 'black',
        fontFamily: 'Metropolis-Medium',
        fontSize: moderateScale(17),
        margin: 'auto'
    },
    placeorder: {
        backgroundColor: 'red',
        width: 300,
        margin: 'auto',
        padding: 10,
        borderRadius: 20,
        marginTop: 90,
        borderWidth: 1,
        borderColor: 'black'
    },
    namestyle: {
        color: 'black',
        backgroundColor: 'red'
    }
});
