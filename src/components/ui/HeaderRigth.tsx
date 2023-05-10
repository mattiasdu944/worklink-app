import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export const HeaderRigth = () => {
    return (
        <TouchableOpacity
            style={ styles.icon }
            activeOpacity={ 0.5 }
        >
            <Ionicons
                name='notifications-outline'
                color='#000'
                size={ 24 }
            />
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    icon:{
        backgroundColor:'rgba(0, 0, 0, 0.05)',
        alignItems:'center',
        padding:10,
        borderRadius:15,
        marginRight:15
    }
});