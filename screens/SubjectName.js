import React from 'react';
import {
  ImageBackground,
  Image,
  Text,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Button} from '../component/Button';
import {Account} from '../component/Account';
export class SubjectName extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Image
            source={require('../images/subjectCover.png')}
            style={{width: 410, height: 304}}
          />
          <Text style={{fontSize: 14, fontWeight: 'bold', padding: 10}}>
            Arabic
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 410,
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              First Year
            </Text>
            <Text>By MR.AHMED ELABD</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: 410,
            }}>
            <Button
              onpress={() => this.props.navigation.navigate('Subscription')}
              title="Subscribe Now"
            />
            <Account
              adjus={{width: 64.47, height: 44, borderRadius: 22}}
              uni={require('../images/account.png')}
              number="9874"
              Teext={{fontSize: 11, fontWeight: 'bold', color: '#B5B5B5'}}
            />
          </View>
          <View style={{padding: '3%'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#B5B5B5'}}>
              Description of subject
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontWeight: 'bold',
                marginTop: 5,
                color: '#B5B5B5',
              }}>
              DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Account
              adjus={{
                width: 42.47,
                height: 44,
                borderRadius: 22,
                justifyContent: 'flex-start',
              }}
              number="9"
              Teext={{fontSize: 11, fontWeight: 'bold', color: '#000'}}
              Acount="Tests Number"
              Teeext={{
                alignItems: 'flex-start',
                marginTop: 10,
                marginRight: 20,
              }}
            />
            <Account
              adjus={{
                width: 42.47,
                height: 44,
                borderRadius: 22,
                justifyContent: 'flex-start',
              }}
              number="32"
              Teext={{fontSize: 11, fontWeight: 'bold', color: '#000'}}
              Acount="Lessons Number"
              Teeext={{
                alignItems: 'flex-start',
                marginTop: 10,
                marginRight: 20,
              }}
            />
            <Account
              adjus={{
                width: 42.47,
                height: 44,
                borderRadius: 22,
                justifyContent: 'flex-start',
              }}
              number="5"
              Teext={{fontSize: 11, fontWeight: 'bold', color: '#000'}}
              Acount="Units Number"
              Teeext={{
                alignItems: 'flex-start',
                marginTop: 10,
                marginRight: 20,
              }}
            />
          </View>
          <View style={{marginTop: 10, marginLeft: 10}}>
            <Text
              style={{fontSize: 12, fontWeight: 'normal', color: '#B5B5B5'}}>
              period ends with Semester
            </Text>
          </View>
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <Button
              onpress={() => this.props.navigation.navigate('Subscription')}
              title="Subscribe Now"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
