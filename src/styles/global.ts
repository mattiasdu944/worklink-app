import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// const { top } = useSafeAreaInsets();

export const COLORS = {
    primary: '#FD1339',
    secondary: '#504DFC',
    text: '#7c7c7c'
}


export const TYPOGRAPHY = StyleSheet.create({
    title1: {
        fontSize: 35,
        fontWeight: '800',
        marginBottom:10
    },

    title2: {
        fontSize: 25,
        fontWeight: '800',
        marginBottom:10
    },

    title3: {
        fontSize: 20,
        fontWeight: '800',
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.text
    }
});


export const COMPONENTS = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:15,
        justifyContent:'center',
        // paddingTop: top
    },
    buttonPrimary: {
        padding: 13,
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        textAlign:'center'
    },

    textInput: {
        borderRadius: 15,
        backgroundColor:'white',
        padding: 10,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.1)',
        marginBottom:15
    }
});
