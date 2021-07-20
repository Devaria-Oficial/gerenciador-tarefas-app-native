import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { defaultStyles, headerStyles } from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useEffect } from 'react';

export const Header = () => {

    const [primeiroNome, setPrimeiroNome] = useState('');

    const getNome = async () => {
        const usuarioNome = await AsyncStorage.getItem('usuarioNome');
        if (usuarioNome) {
            const first = usuarioNome?.split(' ')[0] || '';
            setPrimeiroNome(first);
        }
    }

    useEffect(() => {
        getNome();
    }, []);


    const navigation = useNavigation();
    const efetuarLogout = async () => {
        await AsyncStorage.removeItem("accessToken");
        await AsyncStorage.removeItem("usuarioNome");
        await AsyncStorage.removeItem("usuarioEmail");
        navigation.navigate("Login");
    }

    return (
        <View style={headerStyles.container}>
            <Image style={headerStyles.logo} source={require('../assets/images/logo.png')} />
            <View style={headerStyles.viewSair}>
                <Text style={headerStyles.textNome}>{'Olá, ' + primeiroNome}</Text>
                <TouchableOpacity onPress={efetuarLogout}>
                    <Image style={headerStyles.sair} source={require('../assets/images/sair.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
