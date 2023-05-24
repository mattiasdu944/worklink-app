import { useEffect, useState } from 'react';

import { worklinkApi } from '../api'
import { ICompany, IProfile } from '../interfaces'


interface ProfileProps{
    isLoading: boolean;
    profile : IProfile | ICompany;
}

export const useProfile = ( username: string | null | undefined, role: 'student'|'company' ): ProfileProps => {

    
    const [isLoading, setIsLoading] = useState(true as boolean)
    const [profile, setProfile] = useState({} as any)


    if( !username ){
        username = '';
    }

    const getProfile = async ()  => {
        setIsLoading(true);

        try {
            const { data } = await worklinkApi.get(`/user/profile?username=${ username }`)
            role == 'company' ? setProfile( data as ICompany ) : setProfile( data as IProfile )
            setIsLoading(false);
            
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
        }    
    }
    

    useEffect(() => {
        getProfile();
    }, [])
    

    return { profile, isLoading }
}
