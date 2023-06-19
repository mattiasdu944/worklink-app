import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { JobCard } from '../job'
import { VacantContext } from '../../context/vacants'

export const JobsCarousel = () => {
    
    
    const { vacants } = useContext(VacantContext);
    return (
        <>
        
            <FlatList
                data={ vacants }
                renderItem={({ item }) => (
                    <JobCard vacant={ item }/>
                )}
                // keyExtractor={(_ , index) => index}
                contentContainerStyle={{ columnGap: 15, marginBottom:25 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                
            />
        </>
    )
}
