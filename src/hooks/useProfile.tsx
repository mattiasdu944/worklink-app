import { useEffect, useState } from 'react';

import { worklinkApi } from '../api'
import { IProfile } from '../interfaces'


interface ProfileProps{
    isLoading: boolean;
    profile : IProfile;
}

export const useProfile = ( username: string | null | undefined, role: 'student' ): ProfileProps => {

    
    const [isLoading, setIsLoading] = useState(true as boolean)
    const [profile, setProfile] = useState({} as any)


    if( !username ){
        username = '';
    }

    const getProfile = async ()  => {
        setIsLoading(true);

        try {
            const { data } = await worklinkApi.get(`/user/profile?username=${ username }`)
            setProfile( data as IProfile )
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
