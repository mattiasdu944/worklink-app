import { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { worklinkApi } from '../../api';

import { JobLayout } from '../../layouts';
import { FullLoadingView, SearchInput, SectionHeader } from '../../components';
import { TYPOGRAPHY } from '../../styles';
import { IVacant } from '../../interfaces';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface Props extends StackScreenProps<any,any>{};

export const SearchJobScreen = ({ navigation, route: { params },  }: Props) => {
    const { search } = params as {search: string};
    const [vacants, setVacants] = useState([] as IVacant[]);
    const [isLoading, setIsLoading] = useState(false);

    const searchVacants = async (search:string): Promise<void> => {
        try {
            setIsLoading( true );
            const { data } = await worklinkApi.get(`/jobs/search/${ search }`);
            setVacants( data )
            setIsLoading( false );
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading( false );
        }
    }

    useEffect(() => {
        searchVacants(search);
    }, [])

    useEffect(() => {
        searchVacants(search);
    }, [search])


    if( isLoading ){
        return <FullLoadingView/>
    }
    const { top } = useSafeAreaInsets();

    return (
        <ScrollView style={{ flex: 1, paddingTop: top * 2, paddingHorizontal: 15 }}>

            <SearchInput screen='SearchJobScreen' navigation={ navigation } placeholder={'Buscar empleo'}/>
            <SectionHeader title={`Resultados de: ${ search }`}/>
            {
                vacants.length == 0
                ? (
                    <View style={{ flex:1, justifyContent:'center', alignItems:'center', minHeight:300 }}>
                        <Text style={{ color:'rgba(0,0,0,0.5)', fontSize:20 }}>No se econtraron empleos</Text>
                    </View>
                )

                : (
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
                )
            }
        </ScrollView>
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