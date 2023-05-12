import { useEffect, useState } from 'react'
import { IUserProfile } from '../interfaces'
import { worklinkApi } from '../api'


interface UserProfileProps{
    isLoading: boolean;
    userProfile : IUserProfile;
}

export const useProfile = ( username: string ): UserProfileProps => {

    const [isLoading, setIsLoading] = useState(false as boolean)
    const [userProfile, setUserProfile] = useState({} as IUserProfile)


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
