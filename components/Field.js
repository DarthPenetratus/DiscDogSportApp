import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import backgroundImage from '../assets/field.jpg'


let counter = 0;
const Field = ({ onUpdateData }) => {
    const [pressedButton, setPressedButton] = useState(null)
    
    const onPress = ( index ) => {
        counter++
        if (index <= 15)
            points = 0;
        if (index > 15 && index <= 25)
            points = 1;
        if (index > 25 && index <= 35)
            points = 2;
        if (index > 35)
            points = 3;
        const data = {
            number: counter,
            throw: '✔️',
            distance: `${index}`,
            points: `${points}`,
        }
        

        setPressedButton(index)
        onUpdateData(data)
        console.log(data)
    }

    const buttons = []
    let points = 0

    for (let i = 1; i <= 50; i++) {      
        const isPressed = i === pressedButton;
        //const buttonStyle = i === 15 || i === 25 || i === 35 ? styles.sideBoldButton : styles.button
        const buttonStyle = isPressed ? styles.pressedButton : styles.button;
        buttons.push(
            <TouchableOpacity 
                style={buttonStyle}
                key={i}
                onPress={() => {
                    onPress(i)
                }}
            />
        )
    }


    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="stretch" style={styles.backgroundImage} source={backgroundImage}>
                {buttons}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
    },
    backgroundImage: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        
    },
    button: {
        flex: 1,
    },
    sideBoldButton: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRightWidth: 4,
    },
    pressedButton: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#0AA6D7',
        marginTop: 2,
        marginBottom: 1
    }
})

export default Field