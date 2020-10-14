import React from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import {Listsub} from '../component/Listsub';
  export const Search = (props) => {
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
          Choose your own Teacher
        </Text>
        <Text style={{fontSize: 11, fontWeight: 'normal', marginTop: 5}}>
          We have alot of Teachers Choose your own
        </Text>
        <View>
          <FlatList
            data={subjectInfo}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Listsub
                item={item}
                onPress={() => props.navigation.navigate('SubjectName')}
              />
            )}
          />
        </View>
      </View>
    );
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
