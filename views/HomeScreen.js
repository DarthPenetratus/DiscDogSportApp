import React from 'react';
import { View, StyleSheet, Text, Platform, StatusBar } from 'react-native';
import Header from '../components/Header'; // Путь должен быть адаптирован в соответствии с вашей структурой папок

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Домашний экран" />
      {/* Остальные компоненты и элементы UI */}
      <Text>Добро пожаловать на домашний экран!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Добавьте отступ сверху, если это необходимо для вашего дизайна
    },
  });

export default HomeScreen;
