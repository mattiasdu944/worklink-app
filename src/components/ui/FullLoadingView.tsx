import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { COLORS } from '../../styles'

export const FullLoadingView = () => {
    return (
        <View style={{ flex:1, justifyContent:'center' }}>
            <ActivityIndicator color={ COLORS.primary } size={50}/>
        </View>
    )
}
