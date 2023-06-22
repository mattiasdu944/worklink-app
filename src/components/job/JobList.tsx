import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TYPOGRAPHY } from '../../styles';
import { VacantContext } from '../../context/vacants/VacantContext';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props{
    navigation: StackNavigationProp<any, any, undefined>;
}

export const JobList = ({ navigation }: Props) => {

    const { vacants } = useContext(VacantContext);

    return (
        <>
            {
                vacants.map(( vacant ) => (
                    <TouchableOpacity 
                        key={ vacant._id } 
                        activeOpacity={0.8}
                        style={ styles.container }
                        onPress={() => navigation.navigate('JobScreen', { vacant })}
                    >
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
                    </TouchableOpacity>
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