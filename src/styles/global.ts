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
    },

    title2: {
        fontSize: 25,
        fontWeight: '800',
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
        // paddingTop: top
    },
    buttonPrimary: {
        padding: 13,
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        textAlign:'center'
    },

    textInput: {
        borderRadius: 10,
        backgroundColor:'white',
        padding: 13,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity:  0.3,
        shadowRadius: 0.5,
        elevation: 3,
        marginBottom:15
    }
});
