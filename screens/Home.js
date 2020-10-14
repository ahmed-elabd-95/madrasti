import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Image,
  Text,
  ScrollView,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import {Input} from '../component/Input';
import {Subject} from '../component/Subject';
import {Listsub} from '../component/Listsub';

export const Home = (props) => {
  const [name, setName] = useState('');
  const [loading, setLoaidng] = useState(false);

  useEffect(() => {
    alert('ahmed 1');
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [name]);

  const fetchData = async () => {
    setLoaidng(true)

    await console.warn('ahmed 2');
    setLoaidng(false);
  };

  return (
    <ImageBackground source={require('../images/1.png')} style={{flex: 1}}>
      <ScrollView>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 5,
            fontSize: 14,
            fontWeight: 'bold',
            color: '#464646',
          }}>
          Search for subjects
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 5,
            fontSize: 11,
            fontWeight: 'normal',
            color: '#B5B5B5',
          }}>
          We have alot of interesting and educational subjects
        </Text>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Input
            iconPress={() => props.navigation.navigate('Search')}
            isTouchable
            iconstyle={{width: 22.34, height: 22.34}}
            icon={require('../images/search.png')}
            placeholder="Search for subjects"
            inputStyle={{textAlign: 'center'}}
          />
        </View>
        <TextInput value={name} onChangeText={name => setName(name)} />

        <View style={{alignItems: 'center'}}>
          <FlatList
            data={subjectData}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Subject item={item} />}
          />
        </View>
        <Text style={{marginLeft: 20}}>Recently Added Subjects</Text>
        <View>
          <FlatList
            data={subjectInfo}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Listsub item={item} />}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

Home.navigationOptions = {
  headerTitle: () => <Text>Home</Text>,
  headerRight: () => (
    <Image
      source={require('../images/Mask.png')}
      style={{width: 40, height: 40, borderRadius: 20, marginRight: 10}}
    />
  ),
};

const subjectData = [
  {
    image:
      'https://falqunon.com/wp-content/uploads/2020/06/FAQ_Header_Logo-12.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://falqunon.com/wp-content/uploads/2020/06/FAQ_Header_Logo-12.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://falqunon.com/wp-content/uploads/2020/06/FAQ_Header_Logo-12.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://falqunon.com/wp-content/uploads/2020/06/FAQ_Header_Logo-12.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://falqunon.com/wp-content/uploads/2020/06/FAQ_Header_Logo-12.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://falqunon.com/wp-content/uploads/2020/06/FAQ_Header_Logo-12.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://falqunon.com/wp-content/uploads/2020/06/FAQ_Header_Logo-12.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://falqunon.com/wp-content/uploads/2020/06/FAQ_Header_Logo-12.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://falqunon.com/wp-content/uploads/2020/06/FAQ_Header_Logo-12.png',
    title: 'WORDPRESS',
  },
];
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
];
