import { FC, useReducer, useState } from 'react';
import { ToastAndroid } from "react-native";

import axios from 'axios';
import { worklinkApi } from '../../api'

import { AuthContext } from './';
import { AuthState, authReducer } from './authReducer';


const AUTH_INITIAL_STATE: AuthState = {
    status: 'checking',
    errorMessage: '',
    token: null,
    user: null,
}


export const AuthProvider:FC<any> = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({hasError: false, message:''});

    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)


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
                    user: data.user
                },
            
            })

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
                    user: data.user
                },
            
            })

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





    return (
        <AuthContext.Provider value={{
            ...state,
            isLoading,
            setIsLoading,
            registerUser,
            loginUser,
        }}>
            { children }
        </AuthContext.Provider>
    )
};