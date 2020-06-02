import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export const Input = props => {
  const {userInput} = styles;
  const {
    icon,
    placeholder,
    iconstyle,
    type,
    secure,
    errorMessage,
    inputStyle,
    isTouchable,
    iconPress
  } = props;
  return (
    <View style={userInput}>
      <TouchableOpacity disabled = {!isTouchable} onPress= {iconPress} >
        <Image style={iconstyle} source={icon} />
      </TouchableOpacity>
      <TextInput
        style={[{paddingHorizontal: 10, flex: 1, height: 60}, inputStyle]}
        secureTextEntry={secure}
        keyboardType={type}
        {...props}
      />
      <Text>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userInput: {
    paddingHorizontal: 15,
    width: 330,
    height: 60,
    borderRadius: 35,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#676767',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 35,
    elevation: 3,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});
