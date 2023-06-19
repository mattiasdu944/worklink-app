import { FC, useEffect, useState } from 'react';
import { VacantContext } from '.';
import { worklinkApi } from '../../api';
import { IVacant } from '../../interfaces/vacant';

interface PropsProvider{
    children : JSX.Element | JSX.Element[]
}

export const VacantProvider:FC<PropsProvider> = ({ children }) => {

    const [vacants, setVacants] = useState([] as IVacant[]);
    const [vacant, setVacant] = useState({} as IVacant);
    const [isLoading, setIsLoading] = useState(false);

    const getAllVacants = async (): Promise<void> => {
        const { data } = await worklinkApi.get('/jobs');
        setVacants( data )
    }

    useEffect(() => {
        getAllVacants();
    }, [])
    


    return (
        <VacantContext.Provider 
            value={{
                vacants,
                vacant,
                isLoading
            }}
        >
            { children }
        </VacantContext.Provider>
    )
}