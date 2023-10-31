import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.icons}>
      <Pressable onPress={() => console.log('Уведомление')}>
        <Icon name="bell" size={24} color="black" style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => console.log('Настройки')}>
        <Icon name="gear" size={24} color="black" style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => console.log('Профиль')}>
        <Icon name="user" size={24} color="black" style={styles.icon} />
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    backgroundColor: '#0AA6D7',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default Header;
