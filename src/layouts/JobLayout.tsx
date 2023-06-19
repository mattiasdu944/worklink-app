import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { COMPONENTS } from '../styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props{
    children: React.ReactNode;
}

export const JobLayout = ({ children }: Props) => {
    const { top } = useSafeAreaInsets();


    return (
        <>
            <StatusBar style="auto" />
            <ScrollView style={{ flex:1 }}>

                <View style={{ flex:1,justifyContent:'center', paddingTop:top }}>

                    { children }

                </View>
            </ScrollView>
        </>
    )
}
