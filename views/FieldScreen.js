import React, { useState }from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Header from '../components/Header'
import Table from '../components/Table'
import Field from '../components/Field'
import ParticipantTable from '../components/ParticipantTable'

const generateInitialTable = (throws) => {
    let dummyData = [
        {
            number: '',
            throw: 'Throws',
            distance: 'Distance',
            points: 'Points',
        },
    ]
    for (let i = 1; i <= throws; i++) {
        dummyData.push(
            {
                number: i,
                throw: '',
                distance: '',
                points: '',
            }
        )
    }
    return dummyData
}

const participant = {
    name: 'Jānis Ivanovs',
    dogName: 'Rocky',
    breed: 'Border Collie',
    team: 'Individual',
    level: 'Pro',
    country: 'LV'
}

const FieldScreen = ( {throws, competitionName} ) => {
    const [tableData, setTableData] = useState(generateInitialTable(throws))

    const updateTableData = (data) => {
        if (data.number <= throws) {
            setTableData(() => {
                const newTableData = [...tableData]
                newTableData[data.number].throw = data.throw
                newTableData[data.number].distance = data.distance
                newTableData[data.number].points = data.points
                console.log(newTableData)
                return newTableData
            })
        }
    }

    return (
        <View style={styles.container}>
            <Header title={'Field'}/>
            <View style={styles.upperContainer}>
                <Text style={styles.compName}>{competitionName}</Text>
                <ParticipantTable participant={participant} />
            </View>
            <View style={styles.middleContainer}>
                <View style={styles.middleLeft}>
                    <Table data={tableData} />
                </View>
                <View style={styles.middleRight}>
                    
                </View>
            </View>
            <View style={styles.lowerContainer}>
                <Field onUpdateData={updateTableData} throws={throws}/>
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
        alignItems: 'center'
    },
    upperLeft: {
        flex: 1
    },
    compName: {
        fontSize: '200%',
        fontWeight: 'bold',
        paddingLeft: 32
    },
    upperRight: {
        flex: 2
    },
    middleContainer: {
        flex: 3,
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center'
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