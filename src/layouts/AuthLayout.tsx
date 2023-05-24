import React from 'react'
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COMPONENTS } from "../styles";
import { StatusBar } from 'expo-status-bar';


interface Props{
    children: JSX.Element |JSX.Element[]
}
export const AuthLayout = ({ children }: Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <>
            <StatusBar style="light" />

            <ScrollView style={{ flex:1 }}>
                <View style={{...COMPONENTS.container, paddingTop:top * 2 }}>

                    { children }

                </View>
            </ScrollView>
        </>

    )
}
