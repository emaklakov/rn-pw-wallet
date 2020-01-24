import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import { MainScreen } from '../screens/MainScreen';
import { LogInScreen } from '../screens/auth/LogInScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen';
import { InfoScreen } from '../screens/user/InfoScreen';
import { CreateScreen } from '../screens/transaction/CreateScreen';
import { HistoryScreen } from '../screens/transaction/HistoryScreen';

const BottomNavigator = createBottomTabNavigator({
  Info: {
    screen: InfoScreen,
    navigationOptions: {
      tabBarIcon: <Ionicons name='ios-information-circle-outline' size={20} />
    }
  },
  Create: {
    screen: CreateScreen,
    navigationOptions: {
      tabBarIcon: <Ionicons name='ios-add-circle-outline' size={20} />,
      tabBarLabel: 'Create payment'
    }
  },
  History: {
    screen: HistoryScreen,
    navigationOptions: {
      tabBarIcon: <Ionicons name='ios-list' size={20} />
    }
  }
});

const WalletNavigator = createStackNavigator(
  {
    Main: MainScreen,
    LogIn: LogInScreen,
    SignUp: SignUpScreen,
    Info: BottomNavigator
  },
  {
    initialRouteName: 'Main'
  }
);

export const AppNavigation = createAppContainer(WalletNavigator);
