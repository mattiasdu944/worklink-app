import React from 'react'

import { MainLayout } from '../layouts';
import { JobsCarousel, SearchInput, SectionHeader, JobList } from '../components';

export const HomeScreen = () => {
    return (
        <MainLayout>
            <SearchInput placeholder={'Buscar empleo'}/>

            {/* Carousel */}
            <SectionHeader title={'Vacantes mas vistas'} subTitle='Ver todo'/>
            <JobsCarousel/>

            {/* Carousel */}
            <SectionHeader title={'Vacantes recientes'} subTitle='Ver todo'/>
            <JobList/>

        </MainLayout>
    )
}