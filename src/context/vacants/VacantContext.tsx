import { createContext } from 'react'
import { IVacant } from '../../interfaces/vacant';

interface ContextProps {
    vacant: IVacant;
    vacants: IVacant[];
    isLoading: boolean;
}

export const VacantContext = createContext( {} as ContextProps );