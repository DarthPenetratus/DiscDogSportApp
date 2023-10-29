import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';

const Tab = createMaterialTopTabNavigator();


export default function TabBarNavigator() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Screen 1" component={Screen1} />
          <Tab.Screen name="Screen 2" component={Screen2} />
          <Tab.Screen name="Screen 3" component={Screen3} />
          <Tab.Screen name="Screen 4" component={Screen4} />
        </Tab.Navigator>
    );
  }