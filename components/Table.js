import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Table = ({ data }) => {


  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {data.map((item, index) => (
          <View key={index} style={styles.headerCell}>
            <Text style={styles.headerText}>{item.number}</Text>
          </View>
        ))}
      </View>

      <View style={styles.row}>
        {data.map((item, index) => (
          <View key={index} style={styles.cell}>
            <Text style={styles.contentText}>{item.throw}</Text>
          </View>
        ))}
      </View>

      <View style={styles.row}>
        {data.map((item, index) => (
          <View key={index} style={styles.cell}>
            <Text style={styles.contentText}>{item.distance}</Text>
          </View>
        ))}
      </View>

      <View style={styles.row}>
        {data.map((item, index) => (
          <View key={index} style={styles.cell}>
            <Text style={styles.contentText}>{item.points}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  cell: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  headerCell: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  contentText: {
    fontSize: 20,
  }
});

export default Table;