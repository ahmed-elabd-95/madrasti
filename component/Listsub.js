import React, {Children} from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
export const Listsub = props => {
  const {item, onPress} = props;
  const {viewSub} = styles;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={viewSub}>
        <Image
          source={{uri: item.image}}
          style={{width: 94.43, height: 109.8, resizeMode: 'contain'}}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 20}}>
            {item.title}
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>{item.year}</Text>
          <Text style={{fontSize: 11}}>{item.by}</Text>
          <FlatList
            data={data}
            horizontal
            style={{marginTop: 10}}
            renderItem={({item}) => (
              <Image
                source={{uri: item.image}}
                style={{borderRadius: 12, width: 24.55, height: 24.55}}
              />
            )}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  viewSub: {
    width: 322,
    height: 118.29,
    flexDirection: 'row',
  },
});
const data = [
  {
    image: 'https://tech.innoshop.org/wp-content/uploads/2020/01/unnamed.png',
  },
  {
    image: 'https://tech.innoshop.org/wp-content/uploads/2020/01/unnamed.png',
  },
  {
    image: 'https://tech.innoshop.org/wp-content/uploads/2020/01/unnamed.png',
  },
  {
    image: 'https://tech.innoshop.org/wp-content/uploads/2020/01/unnamed.png',
  },
];
