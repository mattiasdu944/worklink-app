import React from 'react'
import { View, Text } from 'react-native';
import { MainLayout } from '../../layouts';
import { ProfileBanner } from '../../components/profile/ProfileBanner';

export const ProfileScreen = () => {
    return (
        <MainLayout>
            <ProfileBanner/>

            <View style={{ minHeight:100 }}>

            </View>
        </MainLayout>
    )
}
