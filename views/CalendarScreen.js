import React from 'react';
import { View, StyleSheet, Text, Platform, StatusBar } from 'react-native';

const CalendarScreen = () => {
    return (
      <View>
        <Text>Экран "Календарь"</Text>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Добавьте отступ сверху, если это необходимо для вашего дизайна
  },
});

export default CalendarScreen;
