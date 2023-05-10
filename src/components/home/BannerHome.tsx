import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { TYPOGRAPHY } from '../../styles';
import { Ionicons } from '@expo/vector-icons';

export const BannerHome = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.logo }>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={{ width: 35, height: 35 }}
                />
                <Text style={{ ...TYPOGRAPHY.title3, marginBottom:0 }}>Worklink</Text>
            </View>

            <TouchableOpacity
                style={ styles.icon }
                activeOpacity={ 0.5 }
            >
                <Ionicons
                    name='notifications-outline'
                    color='#000'
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
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:10,
        marginBottom:30
    },
    logo:{
        flexDirection:'row',
        alignItems:'center',
        columnGap:10
    },
    icon:{
        backgroundColor:'rgba(0, 0, 0, 0.05)',
        alignItems:'center',
        padding:10,
        borderRadius:15
    }
});