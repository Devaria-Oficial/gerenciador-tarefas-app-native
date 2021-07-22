import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { listaStyles } from '../styles/styles';
import { ItemLista } from './ItemLista';

export const Lista = (props : any) => {
    const {lista} = props;

    const renderItem = (obj: any) => {
        const {item} = obj;
        return <ItemLista item={item} />
    }

    return (
        <View style={[listaStyles.container, (lista === null || lista.length === 0 ? listaStyles.empty : null)]}>
            
            {lista === null || lista.length === 0 ? 
                <>
                    <Image style={listaStyles.image} source={require('../assets/images/not-found.png')} />
                    <Text style={listaStyles.text}>Você ainda não possui tarefas cadastradas!</Text>
                </>
            :
                <FlatList 
                    data={lista}
                    keyExtractor={item => item._id}
                    renderItem={renderItem}
                />
            }
        </View>
    );
}
