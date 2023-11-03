import React from 'react';
import { View, StyleSheet } from 'react-native';
import ParticipantsPage from '../components/ParticipantsPage';

const YourScreen = () => {
  return (
    <View style={styles.container}>
     <ParticipantsPage/>
 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default YourScreen;




