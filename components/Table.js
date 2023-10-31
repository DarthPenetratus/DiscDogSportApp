import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Table = ({ dataInput }) => {
  // Sample data in an array with columns
  const [data, setData] = useState([
    {
        number: '',
        throw: 'Throws',
        distance: 'Distance',
        points: 'Points',
    },
    {
        number: '1',
        throw: '✔️',
        distance: '20',
        points: '2',
    },
    {
        number: '2',
        throw: '✔️',
        distance: '30',
        points: '3',
    },
    {
      number: '3',
      throw: '✔️',
      distance: '20',
      points: '2',
    },
    {
      number: '4',
      throw: '',
      distance: '',
      points: '',
    },
    {
      number: '5',
      throw: '',
      distance: '',
      points: '',
    },
    {
      number: '6',
      throw: '',
      distance: '',
      points: '',
    },
    {
      number: '7',
      throw: '',
      distance: '',
      points: '',
    },
    {
      number: '8',
      throw: '',
      distance: '',
      points: '',
    },
    {
      number: '9',
      throw: '',
      distance: '',
      points: '',
    },
    {
      number: '10',
      throw: '',
      distance: '',
      points: '',
    },
  ]);

  const updateData = (pushData) => {
    const newData = [...data];
    newData[0].description = 'Updated Description 1';
    setData(newData);
  };

  // Use the useEffect hook to monitor changes in the data array
  useEffect(() => {
    // Code to run when data changes
    // You can add additional logic here if needed
  }, [data]);

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

