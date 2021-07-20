import React from 'react';
import { SafeAreaView } from 'react-native';
import { defaultStyles } from '../styles/styles';
import { Header } from '../componentes/Header';
import { Filtros } from '../componentes/Filtros';

export const HomeScreen = () => {
    return (
        <SafeAreaView style={[defaultStyles.container, defaultStyles.containerTop]}>
            <Header/>
            <Filtros/>
        </SafeAreaView>
    );
}