import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';

export const SearchInput = () => {
    return (
        <View >

            <TextInput
                style={ styles.container }
                />
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0, 0.05)',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10
    },
});