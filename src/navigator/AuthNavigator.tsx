import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, RegisterScreen } from '../screens';

const Stack = createStackNavigator();
export const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={ LoginScreen } />
            <Stack.Screen name="RegisterScreen" component={ RegisterScreen } />
        </Stack.Navigator>
    );
}
