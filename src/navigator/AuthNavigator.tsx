import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen, RegisterScreen } from '../screens';

const Stack = createStackNavigator();
export const AuthNavigator = () => {
    return (

        <Stack.Navigator
            initialRouteName='LoginScreen'
            screenOptions={{
                headerShown:false,
                // headerTitleAlign:'center',
                headerStyle:{
                    elevation:0,
                },
                cardStyle:{
                    backgroundColor:'white',
                }
            }}
        >
            <Stack.Screen name="LoginScreen"    options={{ title:'Iniciar sesion' }} component={ LoginScreen } />
            <Stack.Screen name="RegisterScreen" options={{ title:'Crear cuenta' }} component={ RegisterScreen } />
        </Stack.Navigator>

    );
}
