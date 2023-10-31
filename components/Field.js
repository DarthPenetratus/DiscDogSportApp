import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

const Field = ({ dataInput }) => {
    const [pressedButton, setPressedButton] = useState(null)
    const [data, setData] = useState([
        {
            number: '',
            throw: 'Throws',
            distance: 'Distance',
            points: 'Points',
        },
    ])

    const onPress = ( index ) => {
        if (index <= 15)
            points = 0;
        if (index > 15 && index <= 25)
            points = 1;
        if (index > 25 && index <= 35)
            points = 2;
        if (index > 35)
            points = 3;
        const newData = [
            ...data,
            {
                number: `${data.length}`,
                throw: '✔️',
                distance: `${index}`,
                points: `${points}`,
            },
        ]
        setData(newData)
        console.log(newData)

        setPressedButton(index)
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
            {buttons}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 32,
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
    },
    button: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
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
        backgroundColor: 'red'
    }
})

export default Field