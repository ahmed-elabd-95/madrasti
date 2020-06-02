import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Navi from './navigation1';
import Homepage from './navigation2';
const HomeTab = createSwitchNavigator(
  {
    navi: {
      screen: Navi,
    },
    Homepage: {
      screen: Homepage,
    },
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null
      // headerStyle: {height: 0},
    },
  },
);

export default createAppContainer(HomeTab);
