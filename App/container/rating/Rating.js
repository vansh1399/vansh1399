import { View, Text, ScrollView, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Metrics/Metrics';
// import CheckBox from 'react-native-check-box';
import Foundation from 'react-native-vector-icons/Foundation';


export default function Rating() {
    return (

        <View style={style.mainContainer}>
            <View style={style.bodyContainer}>
                <ScrollView style={style.container}>


                    <View>
                        <StatusBar
                            barStyle="dark-content"
                            translucent backgroundColor='transparent'
                        />
                        <MaterialIcons name='chevron-left' size={30} color='black'></MaterialIcons>
                        <Text style={style.headingtext}>Rating&Reviews</Text>
                    </View>

                    <View style={style.ratingview}>
                        <View>
                            <Text style={style.ratingtext}>4.3</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Metropolis-Regular', }}>23 ratings</Text>
                        </View>
                    
                    
                        <View style = {{flexDirection : 'row'}}>

                            <View>
                            <View style={style.ratingicons}>
                        
                                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                
                            </View>

                            
                            <View style={style.ratingicons}>
                                
                                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>

                            </View>


                            <View style={style.ratingicons}>
                               
                                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                               

                            </View>


                            <View style={style.ratingicons}>
                               
                                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                               

                            </View>


                            <View style={style.ratingicons}>
                               
                                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
    
                            </View>

                            </View>

                        <View>
                            <Text style = {{width : 114, height : 8 , backgroundColor : '#DB3022' , marginTop : horizontalScale(7) , borderRadius : 10 , marginTop : 6 , textAlign : 'center'}}></Text>
                            <Text style = {{width : 40, height : 8 , backgroundColor : '#DB3022' , marginTop : horizontalScale(7) , borderRadius : 10 , marginTop : 14 , textAlign : 'center'}}></Text>
                            <Text style = {{width : 29 , height : 8 , backgroundColor : '#DB3022' , marginTop : horizontalScale(7) , borderRadius : 10 , marginTop : 14 , textAlign : 'center'}}></Text>
                            <Text style = {{width : 15, height : 8 , backgroundColor : '#DB3022' , marginTop : horizontalScale(7) , borderRadius : 10 , marginTop : 14 , textAlign : 'center'}}></Text>
                            <Text style = {{width : 8, height : 8 , backgroundColor : '#DB3022' , marginTop : horizontalScale(7) , borderRadius : 10, marginTop : 14 , textAlign : 'center'}}></Text>
                        </View>

                        <View>
                            <Text>12</Text>
                            <Text style = {{textAlign : 'center' , marginTop : 6 }}>5</Text>
                            <Text style = {{textAlign : 'center' , marginTop : 4}}>4</Text>
                            <Text style = {{textAlign : 'center', marginTop : 4}}>2</Text>
                            <Text style = {{textAlign : 'center', marginTop : 6}}>0</Text>
                        </View>

                           
                        </View>

                        {/* <View >
                             
                              <Text style = {{width : 114, height : 8 , backgroundColor : '#DB3022' , marginBottom : 10}}></Text>   
                              <Text style = {{width : 114, height : 8 , backgroundColor : '#DB30    22', marginBottom : 10}}></Text>   
                              <Text style = {{width : 114, height : 8 , backgroundColor : '#DB3022', marginBottom : 10}}></Text>  
                              <Text style = {{width : 114, height : 8 , backgroundColor : '#DB3022', marginBottom : 10}}></Text>   

                        </View> */}


                    </View>

                    <View style={style.reviewtextView}>
                        <Text style={style.ratingText1}>8 reviews</Text>
                        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                            {/* <CheckBox style={{ color: 'gray', marginRight: horizontalScale(5) }}></CheckBox> */}
                            <Text style={style.ratingText2}>With photo</Text>
                        </View>

                    </View>


                    <View style={style.reviewview}>
                        {/* <Image source={require('../../assets/image/reviewimage.png')} style={style.reviewerimage}></Image> */}
                        <View style={style.review}>
                            <Text style={style.reviewerName}>Helene Moore</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: verticalScale(7) }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <MaterialIcons name="star-rate" size={20} color='#FFBA49' ></MaterialIcons>
                                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                </View>
                                <Text style={style.reviewDate}>June 5, 2019</Text>
                            </View>

                            <Text style={style.reviewText}>
                                The dress is great! Very classy and comfortable. It fit perfectly!
                                I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too
                                long for those who are shorter but could be hemmed. I wouldn't
                                recommend it for those big chested as I am smaller chested and it
                                fit me perfectly. The underarms were not too wide and the dress was
                                made well.
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Text style={style.helpfulText}>Helpful</Text>
                                <MaterialIcons name='thumb-up' size={18}></MaterialIcons>
                            </View>

                        </View>
                    </View>

                    <View style={style.reviewview}>
                        {/* <Image source={require('../../assets/image/reviewimage.png')} style={style.reviewerimage}></Image> */}
                        <View style={style.review}>
                            <Text style={style.reviewerName}>Helene Moore</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: verticalScale(7) }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <MaterialIcons name="star-rate" size={20} color='#FFBA49' ></MaterialIcons>
                                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                                </View>
                                <Text style={style.reviewDate}>June 5, 2019</Text>
                            </View>

                            <Text style={style.reviewText}>
                                The dress is great! Very classy and comfortable. It fit perfectly!
                                I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too
                                long for those who are shorter but could be hemmed. I wouldn't
                                recommend it for those big chested as I am smaller chested and it
                                fit me perfectly. The underarms were not too wide and the dress was
                                made well.
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Text style={style.helpfulText}>Helpful</Text>
                                <MaterialIcons name='thumb-up' size={18}></MaterialIcons>
                            </View>

                        </View>
                    </View>


                    

                    <View style={{ position: 'relative' , flex : 1.5}}>
                            <TouchableOpacity style={style.reviewbutton}><Text style={{ textAlign: 'center', color: 'white' }}>
                                <Foundation name='pencil' size={20} color='white'></Foundation></Text>
                                <Text style={{ marginRight: 10, color: 'white', fontFamily: 'Metropolis-Regular' }}>Write a Review</Text>
                            </TouchableOpacity>
                       
                    </View>





                </ScrollView>

            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        marginTop: verticalScale(40),
        marginLeft: horizontalScale(16)
    },

    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#FFFFF'
    },

    bodyContainer: {
        flex: 10
    },

    headingtext: {
        color: 'black',
        fontFamily: 'Metropolis-Black',
        fontSize: moderateScale(34),
        marginTop: verticalScale(15)
    },

    ratingview: {
        marginTop: verticalScale(30),
        flexDirection: 'row',
        justifyContent : 'space-around'
    },
    

    ratingtext: {
        fontSize: 44,
        color: 'black',
        fontFamily: 'Metropolis-Black',
    },

    ratingicons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
     
    },



    reviewtextView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(20),
        alignItems: 'center'
    },

    ratingText1: {
        fontSize: moderateScale(14),
        marginVertical: verticalScale(4),
        marginRight: horizontalScale(20),
        fontSize: moderateScale(24),
        color: 'black',
        fontFamily: 'Metropolis-Black',

    },

    ratingText2: {
        fontSize: moderateScale(14),
        marginVertical: verticalScale(4),
        marginRight: horizontalScale(20)
    },

    reviewview: {
        width: '85%',
        backgroundColor: 'white',
        marginTop: verticalScale(35),
        // marginRight : horizontalScale(10),
        marginHorizontal: 'auto',
        borderRadius: 5,
        position: 'relative'
    },

    review: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    reviewerName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Metropolis-Regular'

    },
    reviewDate: {
        fontSize: 12,
        color: '#aaa',
        fontFamily: 'Metropolis-Regular'
    },
    reviewText: {
        fontSize: 14,
        marginVertical: verticalScale(8),
        fontFamily: 'Metropolis-Regular',
        letterSpacing: moderateScale(0.15),
        lineHeight: moderateScale(20),
        color: 'black'
    },
    helpfulText: {
        fontSize: moderateScale(13),
        color: '#aaa',
        marginRight: horizontalScale(10)
    },

    reviewerimage: {
        width: horizontalScale(32),
        height: verticalScale(32),
        position: 'absolute',
        top: verticalScale(-20),
        left: horizontalScale(-15),


    },

    reviewbutton: {
        width: horizontalScale(150),
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        backgroundColor: 'red',
        position: 'absolute',
        right: 10,
        bottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },

})



