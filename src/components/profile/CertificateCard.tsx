import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { TYPOGRAPHY } from '../../styles';
import { IUserProfileCertificates } from '../../interfaces';

interface Props {
    certificate?: IUserProfileCertificates
}


export const CertificateCard = ({ certificate }: Props) => {
    return (
        <View style={ styles.container }>
            <View>
                <Text style={{ fontSize:16, fontWeight:'700', marginBottom:0 }}>
                    Desarrollo FrontEnd con React Js y fullstack MERN
                </Text>
                <Text style={{...TYPOGRAPHY.text}}>Udemy</Text>
                <Text style={{...TYPOGRAPHY.text}}>
                    Expedición: oct 2022
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        borderRadius:20,
        backgroundColor:'rgba(0,0,0,0.02)',
        padding:20,
        marginBottom:20,
        columnGap:20
    }   
});