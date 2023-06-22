import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native-gesture-handler'

interface Props{
    children: React.ReactNode;
}

export const JobLayout = ({ children }: Props) => {


    return (
        <>
            <StatusBar style="auto" />
            <ScrollView style={{ flex:1 }}>

                <View style={{ flex:1,justifyContent:'center' }}>

                    { children }

                </View>
            </ScrollView>
        </>
    )
}
