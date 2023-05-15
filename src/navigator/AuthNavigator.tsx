import React, { useContext } from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen, RegisterScreen } from '../screens';
import { AuthContext } from '../context';
import { MainNavigator } from './MainNavigator';
import { FullLoadingView } from '../components';

const Stack = createStackNavigator();
export const AuthNavigator = () => {

    const { status } = useContext( AuthContext );

    if( status == 'checking' ) return <FullLoadingView/>


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
            {
                ( status != 'authenticated' )
                ?(
                    <>
                        <Stack.Screen name="LoginScreen"    component={ LoginScreen } />
                        <Stack.Screen name="RegisterScreen" component={ RegisterScreen } />
                    </>
                )
                :(
                    <>
                        <Stack.Screen name="MainNavigator"  component={ MainNavigator } />
                    </>
                )
            }
        </Stack.Navigator>

    );
}
