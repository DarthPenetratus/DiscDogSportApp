import React, { useState }from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Header from '../components/Header'
import Table from '../components/Table'
import Field from '../components/Field'

const FieldScreen = () => {
    const [data, setData] = useState([
        {
            number: '',
            throw: 'Throws',
            distance: 'Distance',
            points: 'Points',
        },
    ])

    let competitionName = 'Competition name'
    return (
        <View style={styles.container}>
            <Header title={'Field'}/>
            <View style={styles.upperContainer}>
                <Text style={styles.compName}>{competitionName}</Text>
                <View></View>
            </View>
            <View style={styles.middleContainer}>
                <View style={styles.middleLeft}>
                    <Table />
                </View>
                <View style={styles.middleRight}>
                    
                </View>
            </View>
            <View style={styles.lowerContainer}>
                <Field />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    upperLeft: {
        flex: 1
    },
    compName: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    upperRight: {
        flex: 2
    },
    middleContainer: {
        flex: 2,
        flexDirection: 'row',
        padding: 16,
    },
    middleLeft: {
        flex: 1,
    },
    middleRight: {
        flex: 1,
    },
    lowerContainer: {
        flex: 8,
    },
})

export default FieldScreen