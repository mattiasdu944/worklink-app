import React from 'react'
import { FlatList } from 'react-native'
import { JobCard } from '../job'

export const JobsCarousel = () => {
    return (
        <>
        
            <FlatList
                data={[0,1,2,3,4,5]}
                renderItem={({ item }) => (
                    <JobCard/>
                )}
                // keyExtractor={(_ , index) => index}
                contentContainerStyle={{ columnGap: 15, marginBottom:25 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                
            />
        </>
    )
}
