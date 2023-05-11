import { FC, useReducer, useState } from 'react';
import axios from 'axios';
import { IUser } from '../../interfaces';
import { worklinkApi } from '../../client';
import { ToastAndroid } from "react-native";



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
        ToastAndroid.show(message, ToastAndroid.BOTTOM);
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
            }
            showToast(isError.message);
        }finally{
            setIsLoading( false );
            
        }
    }   


    const registerUser = async(email: string, password: string, name: string, lastname: string, username: string): Promise<{hasError: boolean; message?: string}> => {
        try {
            const { data } = await worklinkApi.post('/user/register', { name, email, password, lastname, username });
            const { user } = data;
            
            dispatch({ type: 'signUp', payload:{ user: {} as IUser, token:'' } });
            return {
                hasError: false
            }

        } catch (error) {
            if ( axios.isAxiosError(error) ) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }

            return {
                hasError: true,
                message: 'No se pudo crear el usuario - intente de nuevo'
            }
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