import React from 'react'
import { Text, View, StyleSheet } from 'react-native'



const ParticipantTable = ({ participant }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{participant.name}</Text>
            <Text style={styles.text}>{participant.dogName}</Text>
            <Text style={styles.text}>{participant.breed}</Text>
            <Text style={styles.text}>{participant.team}</Text>
            <Text style={styles.text}>{participant.level}</Text>
            <Text style={styles.text}>{participant.country}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 8,
        marginLeft: 32,
        marginRight: 16
    },
    text: {
        fontSize: 20
    }
})

export default ParticipantTable