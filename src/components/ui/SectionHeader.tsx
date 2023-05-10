import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { TYPOGRAPHY, COLORS } from '../../styles/global';

interface Props{
    title       : string;
    subTitle?   : string;
    path?       : string;
}

export const SectionHeader = ({ path, subTitle, title }: Props) => {
    return (
        <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:10 }} >
            <Text style={{ ...TYPOGRAPHY.title3, marginBottom:0 }}>{ title }</Text>
            
            {
                subTitle === ''
                ? (
                    <></>
                )
                :(
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={{ color:COLORS.primary, fontWeight:'600' }}>{ subTitle }</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}
