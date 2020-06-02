import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Login} from './screens/Login';
import {Signup} from './screens/Signup';
const Navi = createStackNavigator(
  {
    
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
   
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerBackTitle: null,
    },
  },
);

export default createAppContainer(Navi);
