import { useContext } from 'react';
import { useProfile } from '../../hooks';
import { AuthContext } from '../../context/auth/AuthContext';

import { FullLoadingView, ProfileBanner } from '../../components'
import { MainLayout } from '../../layouts';



export const CompanyScreen = () => {

    const { user, logout } = useContext( AuthContext );

    const { profile, isLoading } = useProfile( user?.username, 'company');

    if( isLoading ){
        return (
            <FullLoadingView/>
        )
    }

    return (
        <MainLayout>
            <ProfileBanner 
                banner={ profile.banner } 
                email={ profile.email } 
                image={ profile.image } 
                name={ profile.name }
            />
        
        </MainLayout>
    )
}
