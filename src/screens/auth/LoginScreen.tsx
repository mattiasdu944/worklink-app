import React from 'react'
import { View, Text } from 'react-native';
import { TYPOGRAPHY } from '../../styles';

export const LoginScreen = () => {
    return (
        <View>
            <Text style={ TYPOGRAPHY.title1 }>Inicia Sesion</Text>
            <Text style={ TYPOGRAPHY.text }>
                Toma el siguiente paso y empieza en un nuevo mundo
            </Text>
        </View>
    )
}
