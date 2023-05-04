import React from 'react'
import { StackScreenProps } from "@react-navigation/stack";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

import { COMPONENTS, TYPOGRAPHY } from '../../styles';

interface Props extends StackScreenProps <any,any>{}

export const LoginScreen = ({ navigation } : Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <ScrollView style={{ flex:1 }}>
            <View style={{...COMPONENTS.container, justifyContent:'center', paddingTop:top}}>
                <View style={{ alignItems:'center', marginBottom:20 }}>
                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text style={{...TYPOGRAPHY.title2, textAlign:'center'}}>Worklink</Text>

                </View>
                <Text style={{...TYPOGRAPHY.title1, textAlign:'center'}}>Inicia Sesion</Text>
                <Text style={{ ...TYPOGRAPHY.text, textAlign:'center', marginBottom:40 }}>
                    Toma el siguiente paso y empieza en un nuevo mundo
                </Text>
                <View>
                    <Text>Correo electronico</Text>
                    <TextInput
                        style={ COMPONENTS.textInput }
                    />
                </View>
                <View>
                    <Text>Contraseña</Text>
                    <TextInput
                        style={ COMPONENTS.textInput }
                    />
                </View>
                <TouchableOpacity 
                    style={{ ...COMPONENTS.buttonPrimary, marginVertical:20 }} 
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('MainNavigator')}
                >
                    <Text style={{ textAlign:'center', color:'#f3f3f3' }}>Iniciar sesion</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('RegisterScreen')}
                >
                    <Text style={{ textAlign:'center'}}>¿No tienes una cuenta?</Text>
                    <Text style={{ textAlign:'center'}}>Registrate</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
