import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { JobLayout, MainLayout } from '../../layouts';
import { IVacant } from '../../interfaces';
import { COLORS, TYPOGRAPHY } from '../../styles';
import { Ionicons } from '@expo/vector-icons';

interface Props extends StackScreenProps<any,any>{};

export const JobScreen = ({ route: { params } }: Props) => {
    const { vacant } = params as {vacant: IVacant};
    return (    
        <JobLayout>
            <TouchableOpacity
                style={ styles.buttonBack }
                activeOpacity={0.8}
            >
                <Ionicons
                    name='chevron-back-outline'
                    color='rgb(255,255,255)'
                    size={ 18 }
                />
            </TouchableOpacity>
            <View style={{ position:'relative' }}>
                <Image
                    style={ styles.image }
                    source={{ uri: vacant.image  }}
                />
            </View>
            <View style={ styles.container }>
                <Image
                    style={ styles.company }
                    source={{ uri: vacant.company.image  }}
                />
                <View style={ styles.content }>
                    <Text style={{ ...TYPOGRAPHY.title2, marginBottom:0, textAlign:'center' }}>{ vacant.title }</Text>
                    <Text style={{ ...TYPOGRAPHY.text, textAlign:'center' }}>{ vacant.company.name }</Text>
                    <Text style={{ ...TYPOGRAPHY.text, textAlign:'center' }}>{ vacant.location }</Text>
                    <TouchableOpacity
                        style={ styles.button }
                        activeOpacity={0.8}
                    >
                        <Text style={{ color:'#fff', textAlign:'center' }}>
                            Postular
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ ...TYPOGRAPHY.title3 }}>Sobre la vacante</Text>
                    <Text style={{ ...TYPOGRAPHY.text, textAlign:'justify' }}>
                        { vacant.description }
                    </Text>
                    
                    <Text style={{ ...TYPOGRAPHY.title3 }}>Requisitos</Text>
                    <View style={{ marginBottom:5 }}>
                        <Text>Educacion: </Text>
                        <Text style={{ ...TYPOGRAPHY.text, textAlign:'justify' }}>
                            { vacant.requirements.education }
                        </Text>
                    </View>
                    <View style={{ marginBottom:5 }}>
                        <Text>Experiencia: </Text>
                        <Text style={{ ...TYPOGRAPHY.text, textAlign:'justify' }}>
                            { vacant.requirements.experience }
                        </Text>
                    </View>

                    <View style={{ marginBottom:15 }}>
                        <Text>Habilidades: </Text>
                        <Text style={{ ...TYPOGRAPHY.text, textAlign:'justify' }}>
                            { vacant.requirements.skills }
                        </Text>
                    </View>

                    <View>
                        <Text style={{ ...TYPOGRAPHY.title3 }}>Beneficios</Text>
                        <View style={{ flexDirection:'row', gap:10, flexWrap:'wrap' }}>
                            {
                                vacant.benefits.map(benefit => (
                                    <View key={ benefit } style={ styles.benefit }>
                                        <Text style={{ color:'#fff' }}>{ benefit }</Text>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </View>
            </View>
        </JobLayout>
    )
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300,
    },
    company:{
        width: 100,
        height:100,
        borderRadius:100,
        position:'absolute',
        top:-50,
        borderColor:'#000',
        borderWidth:3,
        right:'41%',
        zIndex:1,
    },
    container: {
        backgroundColor:'#fff',
        position:'relative',
        // height:200,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        top: -30,
        paddingHorizontal:15
    },
    content:{
        marginTop: 70,
    },
    benefit:{
        paddingHorizontal: 15,
        paddingVertical: 7,
        backgroundColor: COLORS.primary,
        borderRadius: 20
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        paddingVertical: 10,
        marginTop:10,
        marginBottom:30
    },

    buttonBack: {
        backgroundColor: COLORS.primary,
        position: 'absolute',
        top:50,
        left:20,
        zIndex:3,
        borderRadius:100,
        padding:5
    }

});