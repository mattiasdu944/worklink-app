import React from 'react'
import { View, StyleSheet, Image } from 'react-native';

export const ProfileBanner = () => {
    return (
        <View>
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
    )
}

const styles = StyleSheet.create({
    container:{
        position:'relative',
    },
    banner:{
        minHeight:200,
        width:'100%',
        borderRadius:20
    },
    profile:{
        width: 100,
        height:100,
        borderRadius:100,
        position:'absolute',
        bottom:-50,
        left:15
    }
});