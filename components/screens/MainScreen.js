import React from 'react'
import { View, StyleSheet } from 'react-native'

const MainScreen = () => {
    return (
        <View style={styles.container}>
            Main Screen
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 30,
    },
})

export default MainScreen