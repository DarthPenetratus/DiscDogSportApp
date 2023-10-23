import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/MainScreen'
import Field from './screens/Field'
import Calendar from './screens/Calendar'

const Drawer = createDrawerNavigator()

const Tabs = () => {
    return (
        <Drawer.Navigator 
            initialRouteName="Home"
        >
            <Drawer.Screen 
                name="Home" 
                component={MainScreen}
            />
            <Drawer.Screen 
                name="Field" 
                component={Field}
            />
            <Drawer.Screen 
                name="Calendar" 
                component={Calendar}
            />
        </Drawer.Navigator>
    )
}

export default Tabs