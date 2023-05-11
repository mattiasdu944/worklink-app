import { FC, useReducer } from 'react';
import axios from 'axios';
import { IUser } from '../../interfaces';
import { worklinkApi } from '../../client';



import { AuthContext } from './';
import { AuthState, authReducer } from './AuthReducer';


const AUTH_INITIAL_STATE: AuthState = {
    status: 'checking',
    errorMessage: '',
    token: null,
    user: null,
}


export const AuthProvider:FC<any> = ({ children }) => {


    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)


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
            registerUser,
        }}>
            { children }
        </AuthContext.Provider>
    )
};