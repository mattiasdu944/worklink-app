import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

import { StackScreenProps } from "@react-navigation/stack";
import { COMPONENTS, TYPOGRAPHY } from '../../styles';
import { AuthLayout } from '../../layouts';

interface Props extends StackScreenProps<any, any> { }

export const RegisterScreen = ({ navigation }: Props) => {
    return (
        <AuthLayout>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={{ width: 50, height: 50 }}
                />
                <Text style={{ ...TYPOGRAPHY.title2, textAlign: 'center' }}>Worklink</Text>

            </View>
            <Text style={{ ...TYPOGRAPHY.title1, textAlign: 'center' }}>Crea un cuenta</Text>
            <Text style={{ ...TYPOGRAPHY.text, textAlign: 'center', marginBottom: 40 }}>
                Toma el siguiente paso y empieza en un nuevo mundo
            </Text>
            <View>
                <Text>Nombres</Text>
                <TextInput
                    style={COMPONENTS.textInput}
                />
            </View>
            <View>
                <Text>Apellidos</Text>
                <TextInput
                    style={COMPONENTS.textInput}
                />
            </View>
            <View>
                <Text>Nombre de usuario</Text>
                <TextInput
                    style={COMPONENTS.textInput}
                />
            </View>
            <View>
                <Text>Correo electronico</Text>
                <TextInput
                    style={COMPONENTS.textInput}
                />
            </View>
            <View>
                <Text>Contraseña</Text>
                <TextInput
                    style={COMPONENTS.textInput}
                />
            </View>
            <TouchableOpacity style={{ ...COMPONENTS.buttonPrimary, marginVertical: 20 }} activeOpacity={0.8}>
                <Text style={{ textAlign: 'center', color: '#f3f3f3' }}>Crear cuenta</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('LoginScreen')}
            >
                <Text style={{ textAlign: 'center' }}>Ya tienes una cuenta?</Text>
                <Text style={{ textAlign: 'center' }}>Inicia sesion</Text>
            </TouchableOpacity>
        </AuthLayout>
    )
}
