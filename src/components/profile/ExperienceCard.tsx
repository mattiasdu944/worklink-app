import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { TYPOGRAPHY } from '../../styles';
import { IUserProfileExperience } from '../../interfaces';

interface Props {
    experience?: IUserProfileExperience
}


export const ExperienceCard = ({ experience }: Props) => {
    return (
        <View style={ styles.container }>
            <View>
                <Text style={{ fontSize:16, fontWeight:'700', marginBottom:0 }}>
                    Consultor
                </Text>
                <Text style={{...TYPOGRAPHY.text}}>
                    Empresa: Shigong Bolivia
                </Text>
                <Text style={{...TYPOGRAPHY.text}}>
                    Inicio: diciembre 2022
                </Text>
                <Text style={{...TYPOGRAPHY.text}}>
                    Hasta: Actualmente trabajo aqui
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