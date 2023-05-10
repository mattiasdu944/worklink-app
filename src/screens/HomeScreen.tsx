import React from 'react'
import { Text, View } from 'react-native';

import { COLORS, TYPOGRAPHY } from '../styles';
import { MainLayout } from '../layouts';
import { BannerHome, JobsCarousel, SearchInput, SectionHeader, JobList } from '../components';

export const HomeScreen = () => {
    return (
        <MainLayout>
            <BannerHome/>    
            <SearchInput/>

            {/* Carousel */}
            <SectionHeader title={'Popular Jobs'} subTitle='Ver todo'/>
            <JobsCarousel/>


            {/* Carousel */}
            <SectionHeader title={'Recent Jobs'} subTitle='Ver todo'/>
            <JobList/>

        </MainLayout>
    )
}

// 