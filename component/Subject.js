import React, {Children} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
export const Subject = props => {
  const {item} = props;
  const {subView, subjectImage} = styles;
  console.warn(item.image)
  return (
    <TouchableOpacity>
      <View style={subView}>
        <View style={subjectImage}>
          <Image
            source={{uri: item.image}}
            style={{width: 37, height: 28.27, resizeMode: 'contain'}}
            
          />
        </View>
        <Text style={{fontSize: 11, paddingTop: 5}}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  subView: {
    width: 101.72,
    height: 118.29,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 6,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
  subjectImage: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});
