import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native';

import { TYPOGRAPHY } from '../../styles';


export const MyFollowersScreen = () => {
    return (
        <>
            {
                [1,2,3,4,5,6,7,8,9,0].map((_,index) => (
                    <View key={ index } style={ styles.container }>
                        <Image

                            source={{ uri:'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
                            style={{ width: 50, height: 50, borderRadius:100 }}
                        />
                        <View>
                            <Text style={{...TYPOGRAPHY.title3, marginBottom:0 }}>Don Pepe Perez</Text>
                            <Text style={{...TYPOGRAPHY.text}}>
                                Ing. Negocios internacionales
                            </Text>
                            <Text style={{...TYPOGRAPHY.text}}>
                                6to Sem
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