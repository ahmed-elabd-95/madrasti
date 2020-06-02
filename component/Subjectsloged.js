import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
export const Subjectsloged = props => {
  const {viewStyle} = styles;
  const {LessonNumber, LessonName, LessonTime} = props.item;

  return (
    <TouchableOpacity>
    <View style={viewStyle}>
      <ImageBackground
        source={require('../images/lessonNO.png')}
        style={{
          width: 24.25,
          height: 24.25,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center'
        }}>
        <Text style={{alignSelf: 'center'}}>{LessonNumber}</Text>
      </ImageBackground>
      <Text style={{alignSelf: 'center'}}>{LessonName}</Text>
      <Text style={{alignSelf: 'center'}}>{LessonTime}</Text>
    </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    width: 324.72,
    height: 46.29,
    shadowColor: '#676767',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 35,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
});
