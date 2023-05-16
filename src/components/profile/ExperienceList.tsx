import React from 'react'
import { View, Text } from 'react-native';
import { TYPOGRAPHY } from '../../styles';
import { IUserProfileExperience } from '../../interfaces';
import { ExperienceCard } from './';

interface Props{
    experiences: IUserProfileExperience[]
}

export const ExperienceList = ( { experiences }: Props ) => {
    return (
        <View style={{ marginBottom:20 }}>
            <Text style={ TYPOGRAPHY.title3 }>Experiencia</Text>
            {
                experiences.length !== 0
                ? (
                    <Text style={ TYPOGRAPHY.text }>No se encontro experiencia</Text>
                )
                : (
                    
                        [0,1,2,3,4,5].map((_, index) => (
                            <ExperienceCard 
                                key={index}
                            />
                        ))
                    
                )
            }
        </View>
    )
}
