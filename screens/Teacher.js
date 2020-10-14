import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Listsub} from '../component/Listsub';
export class Teacher extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../images/teacher.png')}
            style={{width: 78, height: 78}}
          />
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              MR. Ahmed Elabd
            </Text>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Logedsubscription')
              }>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'normal',
                  color: '#21368D',
                }}>
                ARABIC
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{fontWeight: 'normal', fontSize: 11, alignSelf: 'center'}}>
            I am an experienced in Technical support in server and PHP websites
            problems , Currently working as a Web developer wordpress CMS
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'normal',
              fontSize: 11,
              alignSelf: 'flex-start',
              marginLeft: 10,
              marginTop: 15,
            }}>
            Teacher's Subjects
          </Text>
        </View>
        <View>
          <FlatList
            data={subjectInfo}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Listsub
                item={item}
                onPress={() => this.props.navigation.navigate('SubjectName')}
              />
            )}
          />
        </View>

      </View>
    );
  }
}
const subjectInfo = [
  {
    image: 'https://umarksport.com/wp-content/uploads/2020/05/UMARK-SPORTS_eng_2_8-2.png',
    title: 'First lesson Arabic',
    year: 'first year',
    by: 'By MR.AHMED ELABD',
  },
  {
    image: 'https://umarksport.com/wp-content/uploads/2020/05/UMARK-SPORTS_eng_2_8-2.png',
    title: 'First lesson Arabic',
    year: 'first year',
    by: 'By MR.AHMED ELABD',
  },
  {
    image: 'https://umarksport.com/wp-content/uploads/2020/05/UMARK-SPORTS_eng_2_8-2.png',
    title: 'First lesson Arabic',
    year: 'first year',
    by: 'By MR.AHMED ELABD',
  },
  {
    image: 'https://umarksport.com/wp-content/uploads/2020/05/UMARK-SPORTS_eng_2_8-2.png',
    title: 'First lesson Arabic',
    year: 'first year',
    by: 'By MR.AHMED ELABD',
  },
  {
    image: 'https://umarksport.com/wp-content/uploads/2020/05/UMARK-SPORTS_eng_2_8-2.png',
    title: 'First lesson Arabic',
    year: 'first year',
    by: 'By MR.AHMED ELABD',
  },
  {
    image: 'https://umarksport.com/wp-content/uploads/2020/05/UMARK-SPORTS_eng_2_8-2.png',
    title: 'First lesson Arabic',
    year: 'first year',
    by: 'By MR.AHMED ELABD',
  },
  {
    image: 'https://umarksport.com/wp-content/uploads/2020/05/UMARK-SPORTS_eng_2_8-2.png',
    title: 'First lesson Arabic',
    year: 'first year',
    by: 'By MR.AHMED ELABD',
  },
  {
    image: 'https://umarksport.com/wp-content/uploads/2020/05/UMARK-SPORTS_eng_2_8-2.png',
    title: 'First lesson Arabic',
    year: 'first year',
    by: 'By MR.AHMED ELABD',
  },
];
