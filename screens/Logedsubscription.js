import React from 'react';
import {
  ImageBackground,
  Image,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Subjectsloged} from '../component/Subjectsloged';
export class Logedsubscription extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Image
            source={require('../images/subjectCover.png')}
            style={{width: 102, height: 119}}
          />
          <View
            style={{flexDirection: 'column', marginLeft: 10, marginTop: 25}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                paddingBottom: 10,
                color: '#464646',
              }}>
              Arabic language
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                paddingBottom: 10,
                color: '#464646',
              }}>
              Secondary first year
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'normal',
                  paddingBottom: 10,
                  color: '#B5B5B5',
                }}>
                BY:
              </Text>
              <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Teacher')} 
              >
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'normal',
                    color: '#21368D',
                  }}>
                  MR: Ahmed Elabd
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: 11,
            fontWeight: 'normal',
            color: '#464646',
            paddingBottom: 20,
          }}>
          All lessons
        </Text>
        <FlatList
            data={LessonData}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <Subjectsloged item={item} />}
          />
      </View>
    );
  }
}


const LessonData = [
    {
        LessonNumber: '1',
        LessonName: 'lesson one',
        LessonTime: '10.29'
    },
    {
        LessonNumber: '2',
        LessonName: 'lesson two',
        LessonTime: '10.29'
    },
    {
        LessonNumber: '3',
        LessonName: 'lesson three',
        LessonTime: '10.29'
    },
    {
        LessonNumber: '4',
        LessonName: 'lesson four',
        LessonTime: '10.29'
    },
    {
        LessonNumber: '5',
        LessonName: 'lesson five',
        LessonTime: '10.29'
    },
    {
        LessonNumber: '6',
        LessonName: 'lesson six',
        LessonTime: '10.29'
    },
    {
        LessonNumber: '7',
        LessonName: 'lesson seven',
        LessonTime: '10.29'
    },
    {
        LessonNumber: '8',
        LessonName: 'lesson eight',
        LessonTime: '10.29'
    },
    {
        LessonNumber: '9',
        LessonName: 'lesson nine',
        LessonTime: '10.29'
    },
    {
        LessonNumber: '10',
        LessonName: 'lesson ten',
        LessonTime: '10.29'
    },
]
