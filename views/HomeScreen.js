import React from 'react';
import { View, StyleSheet, Text, Platform, StatusBar } from 'react-native';


const HomeScreen = () => {
  return (
    <View>
      <Text>Экран "Домой"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
   
  },
});

export default HomeScreen;
