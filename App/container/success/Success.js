import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Metrics/Metrics';

export default function Success({ route, navigation }) {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View>
        <TouchableOpacity>
          <Image
            style={Styles.img}
            source={require('../../../assets/img/success.jpeg')}></Image>
        </TouchableOpacity>
      </View>

      <Text style={Styles.successText}>Success!</Text>
      <Text style={Styles.TextThankyou}>
        Your order will be delivered soon.
      </Text>
      <Text style={Styles.TextThankyou}>Thank you for choosing our app!</Text>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
          <Text style={Styles.continueShpBtn}>CONTINUE SHOPPING</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  img: {
    flex: 1,
    // width: horizontalScale(300),
    alignSelf: 'center',
    marginHorizontal: horizontalScale(35),
    marginTop: verticalScale(170),
  },
  successText: {
    textAlign: 'center',
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(40),
    color: '#000000',
    marginTop: verticalScale(35),
  },
  TextThankyou: {
    fontFamily: 'Metropolis-Regular',
    color: '#000000',
    textAlign: 'center',
    marginTop: verticalScale(2),
    lineHeight: 18,
  },
  continueShpBtn: {
    paddingHorizontal: horizontalScale(30),
    paddingVertical: verticalScale(10),
    alignSelf: 'center',
    backgroundColor: '#DB3022',
    color: '#FFFFFF',
    borderRadius: moderateScale(50),
    textAlign: 'center',
    marginTop: verticalScale(120),
  },
});
