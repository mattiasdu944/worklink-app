import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native';
import { TYPOGRAPHY } from '../../styles';

export const HeaderLeft = () => {
    return (
        <View style={ styles.logo }>
            <Image
                source={require('../../assets/images/logo.png')}
                style={{ width: 35, height: 35 }}
            />
            <Text style={{ ...TYPOGRAPHY.title3, marginBottom:0 }}>Worklink</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        flexDirection:'row',
        alignItems:'center',
        columnGap:10,
        marginLeft:15,
    }
});