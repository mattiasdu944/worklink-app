import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

export const BannerHome = () => {
    return (
        <View style={ styles.banner }>
            
        </View>
    )
}


const styles = StyleSheet.create({
    banner: {
        backgroundColor:'#000',
        borderRadius: 10,
        padding:25,
        minHeight: 200,
        maxWidth: 325,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity:  0.19,
        shadowRadius: 5.62,
        elevation: 6,
        marginBottom:10
    }
});