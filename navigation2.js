import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home} from './screens/Home';
import {Search} from './screens/Search';
import {SubjectName} from './screens/SubjectName';
import {Subscription} from './screens/Subscription';
import {Logedsubscription} from './screens/Logedsubscription'; 
import {Teacher}from './screens/Teacher'
const Homepage = createStackNavigator(
  {
    home: {
      screen: Home,
    },
    Search: {
      screen: Search,
    },
 
    SubjectName: {
    screen: SubjectName
  },
  Subscription: {
    screen: Subscription
  },
  Logedsubscription: {
    screen: Logedsubscription
  },
  Teacher: {
    screen: Teacher
  }
},
  {
    initialRouteName: 'home',
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerBackTitleVisible: false,
    },
  },
);

export default createAppContainer(Homepage);
