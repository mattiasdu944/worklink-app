import { useContext } from 'react';
import { useProfile } from '../../hooks';
import { AuthContext } from '../../context/auth/AuthContext';

import { FullLoadingView, ProfileBanner } from '../../components'
import { MainLayout } from '../../layouts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';



export const CompanyScreen = () => {

    const { user, logout } = useContext( AuthContext );

    const { profile, isLoading } = useProfile( user?.username );
    console.log({user});

    if( isLoading ){
        return (
            <FullLoadingView/>
        )
    }

    return (
        <MainLayout>
            {/* <ProfileBanner 
                banner={ profile.banner } 
                email={ profile.email } 
                image={ profile.image } 
                name={ profile.name }
            /> */}
            <TouchableOpacity
                // style={ styles.buttonLogout }
                activeOpacity={0.8}
                onPress={ logout }
            >
                <Text style={{ color:'#fff', textAlign:'center' }}>
                    Cerrar Sesion
                </Text>
            </TouchableOpacity>
        </MainLayout>
    )
}
