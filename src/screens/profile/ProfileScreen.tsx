import { useContext } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { useProfile } from '../../hooks';
import { AuthContext } from '../../context/auth/AuthContext';

import { MainLayout } from '../../layouts';
import { FullLoadingView, ProfileBanner } from '../../components';
import { COLORS } from '../../styles';

export const ProfileScreen = () => {
    const { user, logout } = useContext( AuthContext );
    const { userProfile, isLoading } = useProfile( user?.username);


    if( isLoading ){
        return (
            <FullLoadingView/>
        )
    }

    console.log(userProfile);

    return (
        <MainLayout>
            <ProfileBanner 
                userProfile={ userProfile! }
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