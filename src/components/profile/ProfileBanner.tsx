import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';

import { VerifyChip } from '../ui/';
import { TYPOGRAPHY } from '../../styles';
import { IUserProfile } from '../../interfaces';

interface Props{
    userProfile: IUserProfile;
}

export const ProfileBanner = ({userProfile}: Props) => {

    // const { profile } = userProfile;
   

    return (
        <>
            <View style={ styles.container }>
                <Image
                    source={{ uri:userProfile.profile?.banner }}
                    style={ styles.banner }
                />

                <View>
                    <Image
                        source={{ uri: userProfile.image }}
                        style={ styles.profile }
                    />
                </View>
            </View>
            <Text style={{ ...TYPOGRAPHY.title2, width:'100%' }}>
                {`${ userProfile.name } ${ userProfile.lastname } `}
                <VerifyChip/>   
            </Text>
            <Text style={ TYPOGRAPHY.text }>
                { userProfile.profile?.career == '' ? '' : `${userProfile.profile?.career} - `} { userProfile.profile?.semester } semestre</Text>
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