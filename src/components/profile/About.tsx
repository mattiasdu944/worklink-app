import React from 'react'
import { View, Text } from 'react-native';
import { TYPOGRAPHY } from '../../styles';


interface Props{
    description: string;
}

export const About = ({ description }: Props) => {
    return (
        <View style={{ marginBottom:20 }}>
            <Text style={ TYPOGRAPHY.title3 }>Acerca de</Text>
            {
                description == ''
                ? (
                    <Text style={ TYPOGRAPHY.text }>Aun no hay una descripcion</Text>
                )
                : (
                    <Text style={ TYPOGRAPHY.text }>{ description }</Text>
                )
            }
        </View>
    )
}
