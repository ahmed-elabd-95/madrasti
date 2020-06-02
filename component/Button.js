import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export const Button = props => {
  const {add} = styles;
  const {title, uni, reset, onpress, gradientColor, buttonstyle} = props;

  return (
    <TouchableOpacity style={reset} onPress={onpress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[add, buttonstyle]}
        colors={gradientColor || ['#3D42B7', '#6F56D0']}>
        <Image source={uni} />
        <Text style={{color: '#fff'}}> {title} </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  add: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 175.67,
    height: 44,
    borderRadius: 22,
    shadowColor: '#676767',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 35,
    elevation: 5,
  },
});
