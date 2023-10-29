import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';


import StartGameScreen from '../screens/StartGameScreen';


const Stack = createStackNavigator();

const HomeNavigation = () =>  {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: 'Active Games' }}
        />
        <Stack.Screen 
            name="Start The Game"
            component={StartGameScreen} />
    </Stack.Navigator>
  );
}



export default HomeNavigation;
