 import React from 'react';
 import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Navigation
import Menu from './views/Menu';

// Components
import Header from './components/Header';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <Menu />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})