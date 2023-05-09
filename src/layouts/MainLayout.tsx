import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { View } from 'react-native';
import { COMPONENTS } from "../styles";
import { useSafeAreaInsets } from 'react-native-safe-area-context';



interface Props{
    children: JSX.Element |JSX.Element[]
}
export const MainLayout = ({ children }: Props) => {
    const { top } = useSafeAreaInsets();

    return (
        <ScrollView style={{ flex:1 }}>
            <View style={{...COMPONENTS.container, justifyContent:'center', paddingTop:top }}>

                { children }

            </View>
        </ScrollView>
    )
}
