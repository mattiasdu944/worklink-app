import { useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../context';

import { MainLayout } from '../../layouts';
import { FullLoadingView, ProfileBanner } from '../../components';
import { useProfile } from '../../hooks';

export const ProfileScreen = () => {
    const { user, logout } = useContext( AuthContext );
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

            <TouchableOpacity
                onPress={ logout }
            >
                <Text>Cerrar Sesion</Text>
            </TouchableOpacity>
            <View style={{ minHeight:100 }}>
                
            </View>
        </MainLayout>
    )
}
