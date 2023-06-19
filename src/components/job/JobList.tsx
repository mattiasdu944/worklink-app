import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { TYPOGRAPHY } from '../../styles';
import { VacantContext } from '../../context/vacants/VacantContext';

export const JobList = () => {

    const { vacants } = useContext(VacantContext);

    return (
        <>
            {
                vacants.map(( vacant ) => (
                    <View key={ vacant._id } style={ styles.container }>
                        <Image

                            source={{ uri:vacant.company.image }}
                            style={{ width: 50, height: 50, borderRadius:20 }}
                        />
                        <View>
                            <Text style={{...TYPOGRAPHY.title3, marginBottom:0 }}>
                                { vacant.title }
                            </Text>
                            <Text style={{...TYPOGRAPHY.text, maxWidth:'90%'}}>
                                { vacant.company.name } - { vacant.type }
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