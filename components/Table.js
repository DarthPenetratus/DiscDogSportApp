import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// const getResponsiveFontSize = () => {
//   const screenWidth = Dimensions.get('window').width
//   const baseFontSize = 20
//   const scaleFactor = 0.002

//   return baseFontSize + scaleFactor * screenWidth;
// }

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
    flex: 1
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
    fontSize: 20, // getResponsiveFontSize(),
  },
  contentText: {
    fontSize: 20, // getResponsiveFontSize(),
  }
});

export default Table;

