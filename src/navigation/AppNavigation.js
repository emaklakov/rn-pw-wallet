import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Button } from 'react-native';

import { InfoScreen } from '../screens/user/InfoScreen';
import { CreateScreen } from '../screens/transaction/CreateScreen';
import { HistoryScreen } from '../screens/transaction/HistoryScreen';

const InfoStack = createStackNavigator({
  Info: InfoScreen
});

const CreateStack = createStackNavigator({
  Create: CreateScreen
});

const HistoryStack = createStackNavigator({
  History: HistoryScreen
});

const BottomNavigator = createBottomTabNavigator({
  Info: {
    screen: InfoStack,
    navigationOptions: {
      tabBarIcon: info => (
        <Ionicons
          name='ios-information-circle-outline'
          size={20}
          color={info.tintColor}
        />
      )
    }
  },
  Create: {
    screen: CreateStack,
    navigationOptions: {
      tabBarIcon: info => (
        <Ionicons
          name='ios-add-circle-outline'
          size={25}
          color={info.tintColor}
        />
      ),
      tabBarLabel: 'Create payment'
    }
  },
  History: {
    screen: HistoryStack,
    navigationOptions: {
      tabBarIcon: info => (
        <Ionicons name='ios-list' size={20} color={info.tintColor} />
      )
    }
  }
});

BottomNavigator.navigationOptions = {
  // Hide the header from AppNavigator stack
  headerShown: false
};

export const AppNavigation = createAppContainer(BottomNavigator);
