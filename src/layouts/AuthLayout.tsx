import React from 'react'
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COMPONENTS } from "../styles";


interface Props{
    children: JSX.Element |JSX.Element[]
}
export const AuthLayout = ({ children }: Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <ScrollView style={{ flex:1 }}>
            <View style={{...COMPONENTS.container, justifyContent:'center', paddingTop:top }}>

                { children }

            </View>
        </ScrollView>

    )
}
