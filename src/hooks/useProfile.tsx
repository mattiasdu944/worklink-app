import { useEffect, useState } from 'react'

import { worklinkApi } from '../api'
import { IUserProfile } from '../interfaces'


interface UserProfileProps{
    isLoading: boolean;
    userProfile : IUserProfile | null;
}

export const useProfile = ( username: string | null | undefined ): UserProfileProps => {

    const [isLoading, setIsLoading] = useState(true as boolean)
    const [userProfile, setUserProfile] = useState({} as IUserProfile)

    if( !username ){
        username = '';
    }


    const getUserProfile = async ()  => {
        setIsLoading(true);
        try {
            const { data } = await worklinkApi.get(`/user/profile?username=${ username }`)
            setUserProfile( data as IUserProfile );
            setIsLoading(false);
            
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
        }        
    }

    useEffect(() => {
        getUserProfile();
    }, [])
    
    return { userProfile, isLoading }
}
