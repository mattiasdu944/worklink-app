import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';

import { VerifyChip } from '../ui/';
import { TYPOGRAPHY } from '../../styles';
import { IProfile } from '../../interfaces';

interface Props{
    banner      : string;
    email       : string;
    image       : string;
    lastname?   : string;
    name        : string;
}

export const ProfileBanner = ({banner, email, image, name, lastname}: Props) => {

    return (
        <>
            <View style={ styles.container }>
                <Image
                    source={{ uri: banner }}
                    style={ styles.banner }
                />

                <View>
                    <Image
                        source={{ uri: image }}
                        style={ styles.profile }
                    />
                    <VerifyChip/>   
                </View>
            </View>
            <Text style={{ ...TYPOGRAPHY.title2, width:'100%', textAlign:'center', marginBottom:0 }}>
                {`${ name }`}
            </Text>
            <Text style={{ ...TYPOGRAPHY.text, textAlign:'center' }}>
                { email }
            </Text>
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