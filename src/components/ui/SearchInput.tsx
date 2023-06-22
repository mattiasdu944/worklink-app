import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';


interface Props{
    placeholder : string;
    screen      : string;
    navigation  : StackNavigationProp<any, any, undefined>;

}

export const SearchInput = ({ placeholder, screen, navigation }: Props) => {
    const [search, setSearch] = useState('')
    return (
        <View  style={ styles.container }>

            <TextInput
                style={{
                    width:'85%'
                }}
                placeholder={ placeholder }
                onChangeText={ setSearch }
                value={ search }
                onSubmitEditing={() => navigation.navigate( screen, { search })}
            />
            <TouchableOpacity 
                onPress={() => navigation.navigate( screen, { search })}    
                activeOpacity={0.7}
            >
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
        paddingVertical: 10,
        borderRadius: 15,
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20
    },
});