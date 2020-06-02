import React from 'react';
import {
  ImageBackground,
  Image,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import {Input} from '../component/Input';
import {Button} from '../component/Button';

export class Signup extends React.Component {
  render() {
    const {user, viewUser} = styles;

    return (
      <ImageBackground source={require('../images/1.png')} style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flex: 1, alignItems: 'center'}}>
          <View style={viewUser}>
            <Image source={require('../images/Path.png')} style={user} />
          </View>
          <View style={{marginTop: 20, paddingBottom: 50,}}>
            <Input placeholder="Student Name" />
            <Input
            type="phone-pad"
              placeholder="Education Level"
            />
            <Input
            type="phone-pad"
              placeholder="Education Year"
            />
            <Input 
            secure={true} 
            placeholder="New password" 
            />
            <Input 
            secure={true} 
            placeholder="confirm new password" 
            />
          </View>
          <Button
          onpress={() => this.props.navigation.navigate('home')}
            uni={require('../images/union.png')}
            title="login"
          />

        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  user: {
    tintColor: '#CCCCCC',
    width: 46,
    height: 36.8,
  },
  viewUser: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 101,
    height: 101,
    borderRadius: 50,
    backgroundColor: '#fff',
    marginTop: 20,
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
