import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { TYPOGRAPHY } from '../../styles';
import { IVacant } from '../../interfaces/index';
import { StackNavigationProp } from '@react-navigation/stack';


interface Props{
    vacant: IVacant;
    navigation: StackNavigationProp<any, any, undefined>;
    
}

export const JobCard = ({ vacant, navigation }: Props) => {

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={ styles.container }
            onPress={() => navigation.navigate('JobScreen', { vacant })}
        >
            <Image
                source={{ uri: vacant.image }}
                style={{ width:'100%', height:150 }}
            />
            <View style={ styles.logo }>
                <Image
                    source={{ uri: vacant.company.image }}
                    style={{ width:50, height:50 }}
                />
            </View>
            <View style={ styles.content }>
                <Text style={ TYPOGRAPHY.title3 }>{ vacant.title }</Text>
                <Text style={ TYPOGRAPHY.text }>{ vacant.type }</Text>
                <Text>{ vacant.salary }Bs</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        borderRadius: 25,
        // padding:25,
        minHeight: 200,
        minWidth: 270,
        borderWidth: 2,
        borderColor:'rgba(0,0,0,0.05)',
        marginBottom:10,
        overflow:'hidden',
        position:'relative'
    },
    logo:{ 
        position: 'absolute',
        top:125,
        left:25,
        borderRadius:20,
        overflow:'hidden'
    },
    content:{
        padding: 25,
        paddingTop:30
    }
});