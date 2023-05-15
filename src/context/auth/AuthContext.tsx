

import { Dispatch, SetStateAction, createContext } from 'react';
import { IUser } from '../../interfaces';


interface ContextProps {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>
    status: 'checking' | 'authenticated' | 'not-authenticated';
    user : IUser | null;

    registerUser: (email: string, password: string, name: string, lastname: string, username: string) => Promise<void>;
    loginUser: (email: string, password: string) => Promise<void>;
    logout: () => void;
}


export const AuthContext = createContext({} as ContextProps );