import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { collection, doc, setDoc } from 'firebase/firestore'; // Импортируйте doc и setDoc
import { db } from '../database/firebaseConfig';

const circlePlusIcon = require('../assets/icons/circle-plus.png');

const HomeScreen = ({ navigation }) => {
    const handleStartGame = async () => {
        const newGameCollectionName = 'New_game'; // Имя вашей коллекции
        const documentName = 'participants'; // Имя документа

        try {
            // Создайте новую коллекцию "New_game" в базе данных
            const newGameCollectionRef = collection(db, newGameCollectionName);

            // Создайте документ с именем "DANIK_LOH" в коллекции
            const newGameDocRef = doc(newGameCollectionRef, documentName);

            // Установите данные (в данном случае, пустой объект) для документа
            await setDoc(newGameDocRef, {});

            console.log(`Документ "${documentName}" успешно создан в коллекции "${newGameCollectionName}".`);

            // После успешного создания документа, выполните навигацию на другой экран
            navigation.navigate('Start The Game');
        } catch (error) {
            console.error('Ошибка при создании документа: ', error);
        }
    };
    
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <TouchableOpacity 
            style={styles.button}
            onPress={handleStartGame}
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
        backgroundColor: '#0CB2E6',
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

export default HomeScreen