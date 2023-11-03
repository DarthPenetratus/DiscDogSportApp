import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import FieldSelection from '../screens/FieldSelection';
import Participants from '../screens/Participants';
import Summary from '../screens/Summary';

import FieldScreen from '../screens/FieldScreen';


const Tab = createMaterialTopTabNavigator();


export default function TabBarNavigator() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Field Selection" component={FieldSelection} />
          <Tab.Screen name="Participants" component={Participants} />
          <Tab.Screen name="Summary" component={Summary} />
          <Tab.Screen name="FieldScreen" component={FieldScreen} />
        </Tab.Navigator>
    );
  }