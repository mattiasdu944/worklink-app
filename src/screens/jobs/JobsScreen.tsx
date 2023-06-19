import React from 'react'
import { MainLayout } from '../../layouts';
import { JobList, SectionHeader } from '../../components';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{};

export const JobsScreen = ({ navigation }: Props) => {
    return (
        <MainLayout>
            <SectionHeader title={'Vacantes disponibles'}/>
            <JobList navigation={ navigation }/>
        </MainLayout>
    )
}
