import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
export const Account = props => {
  const {viewStyle} = styles;
  const {adjus, number, uni, Teext,Teeext, Acount} = props;

  return (
      <View>
<View style={[viewStyle, adjus]}>
    <Image
    source={uni}
    style={{width: 16.1, height: 19.45}}
    />
    <Text style={Teext}>{number}</Text>
</View>
<Text style={[Teext ,Teeext]}>{Acount}</Text>
</View>
  )  
};
const styles = StyleSheet.create({
  viewStyle: {
    shadowColor: '#676767',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 35,
    elevation: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
