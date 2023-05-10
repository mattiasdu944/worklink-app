import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import { TYPOGRAPHY } from '../../styles';

export const JobCard = () => {
    return (
        <View style={ styles.container }>
            <Image
                source={{ uri:'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'}}
                style={{ width:'100%', height:150 }}
            />
            <View style={ styles.logo }>
                <Image
                    source={{ uri:'https://static.vecteezy.com/system/resources/previews/010/353/285/large_2x/colourful-google-logo-on-white-background-free-vector.jpg' }}
                    style={{ width:50, height:50 }}
                />
            </View>
            <View style={ styles.content }>
                <Text style={ TYPOGRAPHY.title3 }>Jr. Data Science</Text>
                <Text style={ TYPOGRAPHY.text }>Presencial</Text>
                <Text>$3000 - $5000</Text>
            </View>
        </View>
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