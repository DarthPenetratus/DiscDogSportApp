import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './views/HomeScreen'; // убедитесь, что путь верный

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
