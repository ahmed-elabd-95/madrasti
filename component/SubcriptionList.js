import React from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Button} from './Button'
export const SubcriptionList = props => {
    const {onpress,item} = props
  const {title, noSub, time, price} = item;
   const {main, sub, sub2, subText, priceText} = styles;
  return (
    <View style={main}>
        <View style={sub}> 
<Text> {title} </Text>  
    </View>
    <View style={sub2}>
    <Text style={subText}> {noSub} </Text>  
    <Text style={subText}> {time} </Text>  
    <Text style={priceText}> {price} </Text>
    <Button
    title={"subscripe now"}
    gradientColor= {['#F5BF2C', '#FE9349']}
    onpress={onpress} 
    />  
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
    main: {
        width: 235.65,
        height: 276.37,
        shadowOpacity: 0.1,
        shadowRadius: 35,
        elevation: 5,
        backgroundColor: '#fff', 
        alignItems: 'center' ,
        marginLeft: 10  
    },
    sub: {
        width: 235.65,
        height: 69.81,
        backgroundColor: '#fff',
        borderBottomColor: '#cfcfcf',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    sub2: {
        alignItems: 'center'
    },
    subText: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#B5B5B5',
        marginTop: 20,
    },
    priceText:{
        marginTop: 20,
        marginBottom: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#464646'
    }
});
