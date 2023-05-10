import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../styles';
import { useRoute } from '@react-navigation/native';

export const MyContactsButtons = () => {
    const { name } = useRoute();

    return (
        <View style={ styles.container }>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{ 
                    ...styles.button,
                    backgroundColor: name == 'ContactsScreen' ? COLORS.primary : '' 
                }}
            >
                <Text style={{ 
                    color: name == 'ContactsScreen' ? '#fff' : COLORS.primary,
                    textAlign:'center',
                }}>Mis contactos</Text>
            </TouchableOpacity> 
            <TouchableOpacity
                activeOpacity={0.8}
                style={ styles.button }
            >
                <Text style={{ 
                    color: name == 'FollowersScreen' ? '#fff' : COLORS.primary,
                    textAlign:'center',
                }}>Mis seguidores</Text>
            </TouchableOpacity> 
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom:20,
        justifyContent: 'space-evenly',
        columnGap: 5
    },
    button:{
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius:20,
        width:150,
    }
})