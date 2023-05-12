import React, { useEffect, useState } from 'react'
import { worklinkApi } from '../api';
import axios from 'axios';

export const useFetch = ( term: string ) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});
    const [data, setData] = useState()


    const getData = async () => {
        try {
            setIsLoading(true);
            const { data } = await worklinkApi.get(term);
            setData(data)
        } catch (error) {
            if ( axios.isAxiosError(error) ) {
                setError(error.response?.data);
            }
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, [])
    


    return {
        isLoading,
        error,
        data
    }
}
