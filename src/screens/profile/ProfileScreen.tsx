import { useContext } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { useProfile } from '../../hooks';
import { AuthContext } from '../../context/auth/AuthContext';

import { COLORS } from '../../styles';
import { MainLayout } from '../../layouts';
import { FullLoadingView, ProfileBanner, About, CertificateList, ExperienceList } from '../../components';

export const ProfileScreen = () => {
    const { user, logout } = useContext( AuthContext );
    const { userProfile, isLoading } = useProfile( user?.username);


    if( isLoading ){
        return (
            <FullLoadingView/>
        )
    }

    return (
        <MainLayout>
            <ProfileBanner 
                userProfile={ userProfile! }
            />

            <About
                description={ userProfile!.profile.description }
            />

            <CertificateList 
                certificates={ userProfile!.profile.certificates }
            />
            
            <ExperienceList
                experiences={ userProfile!.profile.experience }
            />

            <TouchableOpacity
                style={ styles.buttonLogout }
                activeOpacity={0.8}
                onPress={ logout }
            >
                <Text style={{ color:'#fff', textAlign:'center' }}>
                    Cerrar Sesion
                </Text>
            </TouchableOpacity>
            <View style={{ minHeight:100 }}>
                
            </View>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    buttonLogout: {
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        paddingVertical: 10
    }
});