import { StyleSheet } from 'react-native';

const COLORS = {
    primary: '#FD1339',
    secondary: '#504DFC',
    text: '#7c7c7c'
}


export const TYPOGRAPHY = StyleSheet.create({
    title1: {
        fontSize: 30,
        fontWeight: '800',
    },

    title2: {
        fontSize: 25,
        fontWeight: '800',
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.text
    }


});
