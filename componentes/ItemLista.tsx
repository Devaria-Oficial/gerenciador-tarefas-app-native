import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { itemStyles } from '../styles/styles';
import moment from 'moment';
import { ModalAdicaoEdicao } from './Modal';

export const ItemLista = (props: any) => {
    const { item, selecionarTarefa } = props;
    const { dataConclusao, nome, dataPrevistaConclusao } = item;

    const getDataTexto = (dtConclusao: string, dtPrevisaoConclusao: string) => {
        if (dtConclusao) {
            return `Concluído em: ${moment(dtConclusao).format('DD/MM/yyyy')}`
        } else {
            return `Previsão de conclusão em: ${moment(dtPrevisaoConclusao).format('DD/MM/yyyy')}`
        }
    };

    const renderContent = () => (
        <>
            <Image
                style={itemStyles.image}
                source={dataConclusao ? require('../assets/images/concluido.png')
                    : require('../assets/images/nao-concluido.png')} />
            <View>
                <Text style={[itemStyles.text, (dataConclusao ? itemStyles.textConcluido : null)]}>{item.nome}</Text>
                <Text style={itemStyles.textData}>{getDataTexto(dataConclusao, dataPrevistaConclusao)}</Text>
            </View>
        </>
    )

    return (
        dataConclusao ?
            <View style={[itemStyles.container]}>
                {renderContent()}
            </View>
            :
            <TouchableOpacity style={[itemStyles.container, itemStyles.naoConcluido]} 
                onPress={() => selecionarTarefa(item)}>
                {renderContent()}
            </TouchableOpacity>
    );
}
