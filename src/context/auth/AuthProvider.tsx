import { FC, useEffect, useReducer, useState } from 'react';
import { ToastAndroid } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


import axios from 'axios';
import { worklinkApi } from '../../api'

import { AuthContext } from './AuthContext';
import { AuthState, authReducer } from './authReducer';
import { IUserProfile } from '../../interfaces';


const AUTH_INITIAL_STATE: AuthState = {
    status: 'checking',
    errorMessage: '',
    token: null,
    user: null,
}


export const AuthProvider:FC<any> = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({hasError: false, message:''});

    const [profile, setProfile] = useState({} as IUserProfile)

    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)



    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');
        
        // No autenticado
        if( !token ) return dispatch({ type:'notAuthenticated' });
        
        // VALIDAR TOKEN
        try {
            const { data } = await worklinkApi.post('/user/auth', {
                token: token
            })

            dispatch({
                type:'signUp',
                payload: {
                    token,
                    user:{...data.user}
                }
            })
        } catch (error) {
            if ( axios.isAxiosError(error) ) {
                showToast(error.response?.data.message);
            }
            dispatch({ type:'notAuthenticated' });
        }
    }

    useEffect(() => {
        checkToken();
    }, [])
    




    const showToast = (message: string) => {
        ToastAndroid.show(message, ToastAndroid.CENTER);
    };

    const loginUser =  async(email: string, password: string ): Promise<void> => {
        setIsLoading( true );
        
        try {
            const { data } = await worklinkApi.post('/user/login', { email, password });
            dispatch({ 
                type:'signUp', 
                payload:{
                    token: data.token,
                    user: {...data.user}
                },
            })

            await AsyncStorage.setItem('token', data.token)

            setIsError({
                hasError: false,
                message: ''
            })
            
        } catch (error) {
            if ( axios.isAxiosError(error) ) {
                setIsError({
                    hasError: true,
                    message: error.response?.data.message
                })
                showToast(error.response?.data.message);
            }
        }finally{
            setIsLoading( false );
        }
    }   


    const registerUser = async(email: string, password: string, name: string, lastname: string, username: string): Promise<void> => {
        try {
            const { data } = await worklinkApi.post('/user/register', { name, email, password, lastname, username });
            
            dispatch({ 
                type:'signUp', 
                payload:{
                    token: data.token,
                    user: {...data.user}
                },
            
            })

            await AsyncStorage.setItem('token', data.token)

            setIsError({
                hasError: false,
                message: ''
            })

        } catch (error) {
            if ( axios.isAxiosError(error) ) {
                setIsError({
                    hasError: true,
                    message: error.response?.data.message
                })
                showToast(error.response?.data.message);
            }
        }finally{
            setIsLoading( false );
        }
    }

    const logout = async () => {
        await AsyncStorage.removeItem('token');
        
        dispatch({ 
            type:'logout',
        })
    } 




    return (
        <AuthContext.Provider value={{
            ...state,
            isLoading,
            setIsLoading,
            registerUser,
            loginUser,
            logout
        }}>
            { children }
        </AuthContext.Provider>
    )
};