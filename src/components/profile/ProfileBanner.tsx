import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { TYPOGRAPHY } from '../../styles';
import { VerifyChip } from '../ui/';

export const ProfileBanner = () => {
    return (
        <>
            <View style={ styles.container }>
                <Image
                    source={{ uri:'https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
                    style={ styles.banner }
                />

                <View>
                    <Image
                        source={{ uri:'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
                        style={ styles.profile }
                    />
                </View>
            </View>
            <Text style={{ ...TYPOGRAPHY.title2, width:'100%' }}>
                Mattias Alexandre Duarte Aparicio{' '}
                <VerifyChip/>   
            </Text>
            <Text style={ TYPOGRAPHY.text }>Ing. de Sistemas - 5to semestre</Text>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'relative',
        marginBottom:50
    },
    banner:{
        minHeight:200,
        width:'100%',
        borderRadius:20,
    },
    profile:{
        width: 100,
        height:100,
        borderRadius:100,
        position:'absolute',
        bottom:-40,
        left:15,

    }
});