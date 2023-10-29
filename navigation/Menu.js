import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CalendarScreen from '../screens/CalendarScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

const circleHomeIcon = require('../assets/icons/home.png');
const circleEventIcon = require('../assets/icons/events.png');
const circleMoreIcon = require('../assets/icons/more.png');

export default function Menu() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#0AA6D7', 
        tabBarInactiveTintColor: '#949494', 
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image source={circleHomeIcon} style={{ width: 20, height: 20, tintColor: color }} />
          ),
        }}
      />

      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color, size }) => (
            <Image source={circleEventIcon} style={{ width: 20, height: 20, tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarLabel: 'Statistics',
          tabBarIcon: ({ color, size }) => (
            <Image source={circleMoreIcon} style={{ width: 20, height: 20, tintColor: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
