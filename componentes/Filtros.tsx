import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { headerStyles } from '../styles/styles';

export const Filtros = () => {

    const [showFiltros, setShowFiltros] = useState(false);

    return (
        <View style={headerStyles.container}>
            <View>
                <Text style={headerStyles.textNome}>Tarefas</Text>
                <TouchableOpacity onPress={() => setShowFiltros(!showFiltros)}>
                    <Image source={require('../assets/images/filtro.png')} />
                </TouchableOpacity>
            </View>
            {showFiltros === true && (
                    <View >
                        <View>
                            <Text>Período de:</Text>
                            <TextInput />
                        </View>
                        <View>
                            <Text>Período até:</Text>
                            <TextInput />
                        </View>
                        <View>
                            <Text>Status:</Text>
                            <TextInput>
                                {/* <option value={0}>Todas</option>
                                <option value={1}>Ativas</option>
                                <option value={2}>Concluídas</option> */}
                            </TextInput>
                        </View>
                    </View>
                )}
        </View>
    );
}
