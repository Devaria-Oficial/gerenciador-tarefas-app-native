import React from 'react';
import { View, Text } from 'react-native';
import { defaultStyles } from '../styles/styles';

export const HomeScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <Text style={defaultStyles.errorMsg}>Home Gerenciador</Text>
        </View>
    );
}