import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import { ScrollView } from 'react-native-gesture-handler'
import { COMPONENTS } from "../styles";



interface Props{
    children: JSX.Element |JSX.Element[]
}
export const MainLayout = ({ children }: Props) => {
    const { top } = useSafeAreaInsets();

    return (
        <>
            <StatusBar style="auto" />

            <ScrollView style={{ flex:1 }}>
                <View style={{...COMPONENTS.container, justifyContent:'center', paddingTop:top }}>

                    { children }

                </View>
            </ScrollView>
        </>
    )
}
