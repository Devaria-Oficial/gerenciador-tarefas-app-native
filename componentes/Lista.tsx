import React from 'react';
import { View, Image, Text, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { listaStyles } from '../styles/styles';
import { ItemLista } from './ItemLista';
import colors from '../constants/Colors';

export const Lista = (props : any) => {
    const {lista, refreshing, getLista, loading} = props;

    const renderItem = (obj: any) => {
        const {item} = obj;
        return <ItemLista item={item} />
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
                <FlatList 
                    data={lista}
                    keyExtractor={item => item._id}
                    renderItem={renderItem}
                    refreshControl={<RefreshControl
                        colors={[colors.primaryColor, colors.mediumGreyColor]}
                        refreshing={refreshing}
                        onRefresh={getLista} />}
                />
            }
        </View>
    );
}
