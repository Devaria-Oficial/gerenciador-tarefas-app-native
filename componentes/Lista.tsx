import React, { useState } from 'react';
import { View, Image, Text, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { listaStyles } from '../styles/styles';
import { ItemLista } from './ItemLista';
import colors from '../constants/Colors';
import { ModalAdicaoEdicao } from './Modal';

export const Lista = (props: any) => {
    const { lista, refreshing, getLista, loading } = props;

    const [modalVisible, setModalVisible] = useState(false);
    const [tarefa, setTarefa] = useState<any>(null);

    const renderItem = (obj: any) => {
        const { item } = obj;
        return <ItemLista item={item} selecionarTarefa={selecionarTarefa} />
    }

    const selecionarTarefa = (tarefa : any) => {
        setTarefa(tarefa);
        setModalVisible(true);
    }

    return (
        <View style={[listaStyles.container, (loading === true || lista === null || lista.length === 0 ? listaStyles.empty : null)]}>

            {loading === true ?
                <ActivityIndicator color={colors.primaryColor} size="large" />
                :
                lista === null || lista.length === 0 ?
                    <>
                        <Image style={listaStyles.image} source={require('../assets/images/not-found.png')} />
                        <Text style={listaStyles.text}>Você ainda não possui tarefas cadastradas!</Text>
                    </>
                    :
                    <>
                        <FlatList
                            data={lista}
                            keyExtractor={item => item._id}
                            renderItem={renderItem}
                            refreshControl={<RefreshControl
                                colors={[colors.primaryColor, colors.mediumGreyColor]}
                                refreshing={refreshing}
                                onRefresh={getLista} />}
                        />
                        <ModalAdicaoEdicao getLista={getLista} modalVisible={modalVisible} setModalVisible={setModalVisible} tarefa={tarefa} setTarefa={setTarefa} />
                    </>
            }
        </View>
    );
}
