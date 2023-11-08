import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './components/Tabs';
import FieldScreen from './views/FieldScreen';

export default function App() {
  return (
    <FieldScreen throws={10} competitionName={"Insert competition name"} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
