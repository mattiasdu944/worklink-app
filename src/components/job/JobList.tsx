import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { TYPOGRAPHY } from '../../styles';

export const JobList = () => {
    return (
        <>
            {
                [1,2,3,4,5,6,7,8,9,0].map((_,index) => (
                    <View key={ index } style={ styles.container }>
                        <Image

                            source={{ uri:'https://play-lh.googleusercontent.com/WUcazXmUT97aoXa1TmB72z1RrP4shaBA4Te9vH5fcCHIPCBVjj5F6fGEPgNq6HXmXw=w480-h960-rw' }}
                            style={{ width: 50, height: 50, borderRadius:20 }}
                        />
                        <View>
                            <Text style={{...TYPOGRAPHY.title3, marginBottom:0 }}>Sr. FullStack developer</Text>
                            <Text style={{...TYPOGRAPHY.text}}>
                                Google - Remote
                            </Text>
                        </View>
                    </View>
                ))

            }
        
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        borderRadius:20,
        backgroundColor:'rgba(0,0,0,0.02)',
        padding:20,
        marginBottom:20,
        columnGap:20
    }   
});