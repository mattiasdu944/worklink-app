

import { Dispatch, SetStateAction, createContext } from 'react';
// import { IUser } from '../../interfaces';


interface ContextProps {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>
    // isLoggedIn: boolean;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    // user?: IUser;
    registerUser: (email: string, password: string, name: string, lastname: string, username: string) => Promise<{ hasError: boolean; message?: string; }>;
    loginUser: (email: string, password: string) => void;
    // logout: () => void;
}


export const AuthContext = createContext({} as ContextProps );