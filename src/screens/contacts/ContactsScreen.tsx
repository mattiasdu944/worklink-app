import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

import { MainLayout } from '../../layouts';
import { SearchInput, MyContactsButtons } from '../../components';
import { MyContactsScreen } from './MyContactsScreen';

export const ContactsScreen = () => {
    return (
        <MainLayout>
            <SearchInput placeholder={'Buscar contacto'}/>
            <MyContactsButtons/>
            <MyContactsScreen/>
            
        </MainLayout>
    )
}

