import React, { useRef } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const items = [0, 1, 2, 3]; // Example items

const renderItem = ({ item, index, refRBSheet }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => refRBSheet.current[index].open()}
      >
        <Text style={styles.buttonText}>ITEM {item + 1}</Text>
      </TouchableOpacity>

      <RBSheet ref={ref => (refRBSheet.current[index] = ref)}>
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.bottomSheetText}>I AM ITEM {item + 1}</Text>
          <Text style={{color:'black'}}>I AM ITEM</Text>
        </View>
      </RBSheet>
    </View>
  );
};

const YourOwnComponent = () => (
  <View style={{ padding: 20 }}>
    <Text>This is your own component inside the bottom sheet</Text>
  </View>
);

export default function BottomSheet() {
  const refRBSheet = useRef([]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={items}
        renderItem={(props) => renderItem({ ...props, refRBSheet })}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current[0].open()} // Example of opening the first item bottom sheet
      />
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
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  bottomSheetContainer: {
    padding: 20,

  },
  bottomSheetText: {
    fontSize: 18,
    color:'black'
 },
});
