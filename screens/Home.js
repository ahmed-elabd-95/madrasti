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
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Input} from '../component/Input';
import {Subject} from '../component/Subject';
import {Listsub} from '../component/Listsub';

export class Home extends React.Component {
  static navigationOptions = {
    headerTitle: () => <Text>Home</Text>,
    headerRight: () => (
      <Image
        source={require('../images/Mask.png')}
        style={{width: 40, height: 40, borderRadius: 20, marginRight: 10}}
      />
    ),
  };

  render() {
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
              iconPress= {() => this.props.navigation.navigate('Search')}
              isTouchable
              iconstyle={{width: 22.34, height: 22.34}}
              icon={require('../images/search.png')}
              placeholder="Search for subjects"
              inputStyle={{textAlign: 'center'}}
            />
          </View>
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
  }
}
const subjectData = [
  {
    image:
      'https://lightblue.store/wp-content/uploads/2019/10/Light_Blue_logo-03-2.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://lightblue.store/wp-content/uploads/2019/10/Light_Blue_logo-03-2.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://lightblue.store/wp-content/uploads/2019/10/Light_Blue_logo-03-2.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://lightblue.store/wp-content/uploads/2019/10/Light_Blue_logo-03-2.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://lightblue.store/wp-content/uploads/2019/10/Light_Blue_logo-03-2.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://lightblue.store/wp-content/uploads/2019/10/Light_Blue_logo-03-2.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://lightblue.store/wp-content/uploads/2019/10/Light_Blue_logo-03-2.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://lightblue.store/wp-content/uploads/2019/10/Light_Blue_logo-03-2.png',
    title: 'WORDPRESS',
  },
  {
    image:
      'https://lightblue.store/wp-content/uploads/2019/10/Light_Blue_logo-03-2.png',
    title: 'WORDPRESS',
  },
];
const subjectInfo = [
  {
    image: 'https://tech.innoshop.org/wp-content/uploads/2020/01/unnamed.png',
    title: 'First lesson Arabic',
    year: 'first year',
    by: 'By MR.AHMED ELABD',
  },
  {
    image: 'https://tech.innoshop.org/wp-content/uploads/2020/01/unnamed.png',
    title: 'First lesson Arabic',
    year: 'first year',
    by: 'By MR.AHMED ELABD',
  },
  {
    image: 'https://tech.innoshop.org/wp-content/uploads/2020/01/unnamed.png',
    title: 'First lesson Arabic',
    year: 'first year',
    by: 'By MR.AHMED ELABD',
  },
  {
    image: 'https://tech.innoshop.org/wp-content/uploads/2020/01/unnamed.png',
    title: 'First lesson Arabic',
    year: 'first year',
    by: 'By MR.AHMED ELABD',
  },
];
