import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

interface Props{
    placeholder: string;
}

export const SearchInput = ({ placeholder }: Props) => {
    return (
        <View  style={ styles.container }>

            <TextInput
                style={{
                    width:'85%'
                }}
                placeholder={ placeholder }
            />
            <TouchableOpacity activeOpacity={0.9}>
                <Ionicons
                    name='search-outline'
                    color='rgba(0,0,0, 0.5)'
                    size={ 24 }
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        borderWidth: 2,
        borderColor: 'rgba(0,0,0, 0.05)',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 15,
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20
    },
});