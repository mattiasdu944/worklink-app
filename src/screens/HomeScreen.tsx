import React from 'react'

import { MainLayout } from '../layouts';
import { BannerHome, SearchInput } from '../components';
import { Text } from 'react-native';
import { TYPOGRAPHY } from '../styles';

export const HomeScreen = () => {
    return (
        <MainLayout>
            <Text style={ TYPOGRAPHY.title1 }>
                Find your creative job
            </Text>
            <SearchInput/>
            <Text style={ TYPOGRAPHY.title3 }>Popular Jobs</Text>
            <BannerHome/>
            <Text style={ TYPOGRAPHY.title3 }>Recent Jobs</Text>
          
        </MainLayout>
    )
}

// 