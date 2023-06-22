import React from 'react'

import { MainLayout } from '../layouts';
import { JobsCarousel, SearchInput, SectionHeader, JobList } from '../components';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{};

export const HomeScreen = ({ navigation }: Props) => {
    return (
        <MainLayout>
            <SearchInput screen='SearchJobScreen' navigation={ navigation } placeholder={'Buscar empleo'}/>

            {/* Carousel */}
            <SectionHeader title={'Vacantes mas vistas'} subTitle='Ver todo'/>
            <JobsCarousel navigation={ navigation }/>

            {/* Carousel */}
            <SectionHeader title={'Vacantes recientes'} subTitle='Ver todo'/>
            <JobList navigation={ navigation } />

        </MainLayout>
    )
}