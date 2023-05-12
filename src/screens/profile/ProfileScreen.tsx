import { useContext } from 'react'
import { Text, View } from 'react-native';

import { AuthContext } from '../../context';

import { MainLayout } from '../../layouts';
import { FullLoadingView, ProfileBanner } from '../../components';
import { useProfile } from '../../hooks';

export const ProfileScreen = () => {
    const { user } = useContext( AuthContext );
    const { userProfile, isLoading } = useProfile( user!.username );

    console.log(user);

    if( isLoading ){
        return (
            <FullLoadingView/>
        )
    }


    return (
        <MainLayout>
            <ProfileBanner 
                userProfile={ userProfile }
            />

            <View style={{ minHeight:100 }}>
                
            </View>
        </MainLayout>
    )
}
