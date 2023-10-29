

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const circlePlusIcon = require('../assets/icons/circle-plus.png');

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Start The Game')}
            >
                <Image source={circlePlusIcon} style={styles.buttonIcon} />
                <Text style={styles.buttonText}>Start The Game</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row', // чтобы иконка и текст были в одной строке
        alignItems: 'center', // центрировать иконку и текст по вертикали
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: '#2196F3',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
    },
    buttonIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
        tintColor: 'white',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
});

export default HomeScreen;