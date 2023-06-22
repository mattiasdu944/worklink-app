import { useContext } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { useProfile } from '../../hooks';
import { AuthContext } from '../../context/auth/AuthContext';

import { COLORS } from '../../styles';
import { MainLayout } from '../../layouts';
import { FullLoadingView, ProfileBanner, About, CertificateList, ExperienceList } from '../../components';

export const ProfileScreen = () => {
    const { user, logout } = useContext( AuthContext );
    const { profile, isLoading } = useProfile( user?.username);


    console.log({user});

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
            
            <TouchableOpacity
                style={ styles.buttonEdit }
                activeOpacity={0.8}
                onPress={ logout }
            >
                <Text style={{ color:COLORS.primary, textAlign:'center' }}>
                    Editar perfil
                </Text>
            </TouchableOpacity>

            <About
                description={ profile.description }
            />
            <CertificateList 
                certificates={ profile.certificates }
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

            {/* <ExperienceList
                experiences={ profile.experience }
            /> */}
            {/* 

            

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
                
            </View> */}
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    buttonLogout: {
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        paddingVertical: 10,
        marginBottom:20
    },
    buttonEdit: {
        borderColor:  COLORS.primary,
        borderWidth:1,
        borderRadius: 15,
        paddingVertical: 10,
        marginBottom:30,
        marginTop:30,
    }
});