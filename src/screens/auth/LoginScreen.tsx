import React, { useContext, useState } from 'react'
import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import { COMPONENTS, TYPOGRAPHY } from '../../styles';
import { AuthLayout } from '../../layouts';
import { AuthContext } from '../../context/auth/AuthContext';

interface Props extends StackScreenProps <any,any>{}

export const LoginScreen = ({ navigation } : Props) => {

    const { loginUser, isLoading, setIsLoading } = useContext( AuthContext );

    const [loginForm, setLoginForm] = useState({ email:'', password:''});

    const handleSubmit = async () => {
        if( loginForm.email.trim() === '' ){
            alert('Ingrese un correo valido');
            setIsLoading(false);
            return;
        }
        if( loginForm.password.length < 8 ){
            alert('La contraseña debe tener minimo 8 caracteres');
            setIsLoading(false);
            return;
        }

        await loginUser( loginForm.email, loginForm.password );
    }


    const handleChange = (name: string, value: string) => setLoginForm({ ...loginForm, [name]: value });


    return (
        <AuthLayout>
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
                    value={loginForm.email}
                    onChangeText={(text) => handleChange("email", text)}
                />
            </View>
            <View>
                <Text>Contraseña</Text>
                <TextInput
                    style={ COMPONENTS.textInput }
                    value={loginForm.password}
                    secureTextEntry
                    onChangeText={(text) => handleChange("password", text)}
                />
            </View>
            <TouchableOpacity 
                style={{ ...COMPONENTS.buttonPrimary, marginVertical:20 }} 
                activeOpacity={0.8}
                onPress={ handleSubmit }
            >
                {
                    isLoading
                    ? (
                        <ActivityIndicator color='#fff'/>
                    )
                    :(
                        <Text style={{ textAlign:'center', color:'#f3f3f3' }}>Iniciar sesion</Text>
                    )
                }
            </TouchableOpacity>

            <TouchableOpacity 
                activeOpacity={0.5}
                onPress={() => navigation.navigate('RegisterScreen')}
            >
                <Text style={{ textAlign:'center'}}>¿No tienes una cuenta?</Text>
                <Text style={{ textAlign:'center'}}>Registrate</Text>
            </TouchableOpacity>
        </AuthLayout>
    
    )
}
