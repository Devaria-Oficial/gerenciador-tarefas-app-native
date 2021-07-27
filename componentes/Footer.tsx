import React from 'react';
import { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { footerStyles } from '../styles/styles';
import { ModalAdicaoEdicao } from './Modal';

export const Footer = (props : any) => {

    const { getLista } = props;

    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={[footerStyles.container]}>
            <TouchableOpacity style={footerStyles.button} onPress={() => setModalVisible(true)}>
                <Image style={footerStyles.image} source={require('../assets/images/add.png')} />
                <Text style={footerStyles.text}>Adicionar tarefa</Text>
            </TouchableOpacity>
            <ModalAdicaoEdicao getLista={getLista} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
}