import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { defaultStyles, loginStyles } from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {

    const navigation = useNavigation();

    const sair = async () => {
        await AsyncStorage.removeItem("accessToken");
        await AsyncStorage.removeItem("usuarioNome");
        await AsyncStorage.removeItem("usuarioEmail");
        navigation.navigate("Login");
    }

    return (
        <View style={defaultStyles.container}>
            <Text style={defaultStyles.errorMsg}>Home Gerenciador</Text>
            <TouchableOpacity style={loginStyles.button} onPress={sair}>
                <Text style={loginStyles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}