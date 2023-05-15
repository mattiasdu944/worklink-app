import React from 'react'
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../../styles';

export const VerifyChip = () => {
    return (
        <View style={ styles.container }>
            <Ionicons
                name='star-outline'
                color='#fff'
                size={13}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        backgroundColor: COLORS.primary,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        width:25,
        height:25,
        position:'absolute',
        bottom:-40,
        left:90
    }
})