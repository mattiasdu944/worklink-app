import React from 'react'
import { View, Text } from 'react-native';
import { IUserProfileCertificates } from '../../interfaces';

import { TYPOGRAPHY } from '../../styles';
import { CertificateCard } from '.';

interface Props {
    certificates: IUserProfileCertificates[];
}

export const CertificateList = ({ certificates }: Props) => {
    return (
        <View style={{ marginBottom:20 }}>
            <Text style={ TYPOGRAPHY.title3 }>Certificados</Text>
            {
                certificates.length === 0
                ? (
                    <Text style={ TYPOGRAPHY.text }>No se encontraron certificados</Text>
                )
                : (
                    
                    [0,1,2,3,4,5].map((_, index) => (
                        <CertificateCard 
                            key={index}
                        />
                    ))
                    
                )
            }
        </View>
    )
}
