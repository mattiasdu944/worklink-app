import { useState, useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";

import { COMPONENTS, TYPOGRAPHY } from '../../styles';
import { AuthLayout } from '../../layouts';
import { AuthContext } from '../../context';

interface Props extends StackScreenProps<any, any> { }

export const RegisterScreen = ({ navigation }: Props) => {




    const { registerUser } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [registerForm, setRegisterForm] = useState({ name:'', lastname:'', username:'', email:'', password:''});

    const handleChange = (name: string, value: string) => setRegisterForm({ ...registerForm, [name]: value });

    const handleSubmit = async () => {
        console.log(registerForm);
        const { email, lastname, name, password, username } = registerForm;
        setIsLoading(true);

        if( name.trim() == '' || name.trim().length < 4){
            alert('Ingrese un nombre valido');
            setIsLoading(false);
            return;
        }

        if( lastname.trim() === '' || lastname.trim().length < 4){
            alert('Ingrese un apellido valido')
            setIsLoading(false);
            return;
        }

        if( email.trim() === '' || email.trim().length < 4 ){
            alert('Ingrese una direccion de correo valido')
            setIsLoading(false);
            return;
        }

        if( !email.includes('ulasalle') ){
            alert('Solo se permiten usuarios de La Salle')
            setIsLoading(false);
            return;
        }

        if( username.trim().length < 4){
            alert('Nombre de usuario muy corto')
            setIsLoading(false);
            return;
        }
        
        if( password.trim().length < 8 ){
            alert('La contraseña debe tener minimo 8 caracteres')
            setIsLoading(false);
            return;
        }


        const { hasError, message } = await registerUser( email, password, name, lastname, username );
        if( hasError ){
            alert( message )
            return;
        }

        setIsLoading(false);
    }

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
                    value={registerForm.name}
                    onChangeText={(text) => handleChange("name", text)}
                    style={COMPONENTS.textInput}
                />
            </View>
            <View>
                <Text>Apellidos</Text>
                <TextInput
                    style={COMPONENTS.textInput}
                    value={registerForm.lastname}
                    onChangeText={(text) => handleChange("lastname", text)}
                />
            </View>
            <View>
                <Text>Nombre de usuario</Text>
                <TextInput
                    style={COMPONENTS.textInput}
                    value={registerForm.username}
                    onChangeText={(text) => handleChange("username", text)}
                />
            </View>
            <View>
                <Text>Correo electronico</Text>
                <TextInput
                    style={COMPONENTS.textInput}
                    value={registerForm.email}
                    onChangeText={(text) => handleChange("email", text)}
                />
            </View>
            <View>
                <Text>Contraseña</Text>
                <TextInput
                    style={COMPONENTS.textInput}
                    value={registerForm.password}
                    onChangeText={(text) => handleChange("password", text)}
                />
            </View>
            <TouchableOpacity 
                activeOpacity={0.8}
                style={{ ...COMPONENTS.buttonPrimary, marginVertical: 20 }} 
                onPress={ handleSubmit }
            >
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
