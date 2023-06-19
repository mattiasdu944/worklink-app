import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { JobCard } from '../job'
import { VacantContext } from '../../context/vacants'
import { StackNavigationProp } from '@react-navigation/stack';

interface Props{
    navigation: StackNavigationProp<any, any, undefined>;
}


export const JobsCarousel = ({ navigation }: Props) => {    

    const { vacants } = useContext(VacantContext);

    return (
        <>
        
            <FlatList
                data={ vacants }
                renderItem={({ item }) => (
                    <JobCard vacant={ item } navigation={ navigation }/>
                )}
                // keyExtractor={(_ , index) => index}
                contentContainerStyle={{ columnGap: 15, marginBottom:25 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                
            />
        </>
    )
}
