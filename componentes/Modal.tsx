import React from 'react';
import { View, Modal, Text, TouchableOpacity, TextInput } from 'react-native';
import { defaultStyles, modalStyles } from '../styles/styles';
import { useState } from 'react';
import { executaRequisicao } from '../services/api';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../constants/Colors';
import { useEffect } from 'react';

export const ModalAdicaoEdicao = (props: any) => {

    const { getLista, modalVisible, setModalVisible, tarefa, setTarefa } = props;

    // STATES DO CADASTRO
    const [erro, setErro] = useState('');
    const [nomeTarefa, setNomeTarefa] = useState('');
    const [dataPrevisaoTarefa, setDataPrevisaoTarefa] = useState<Date | null>(null);
    const [dataConclusao, setDataConclusao] = useState<Date | null>(null);
    const [showData, setShowData] = useState(false);
    const [showDataConclusao, setShowDataConclusao] = useState(false);

    useEffect(() => {
        if (tarefa) {
            if (tarefa.nome) {
                setNomeTarefa(tarefa.nome);
            }

            if (tarefa.dataPrevistaConclusao) {
                setDataPrevisaoTarefa(moment(tarefa.dataPrevistaConclusao).toDate());
            }

            if (tarefa.dataConclusao) {
                setDataConclusao(moment(tarefa.dataConclusao).toDate());
            }
        }
    }, [tarefa])

    const closeModal = () => {
        setModalVisible(false);
        setErro('');
        setNomeTarefa('');
        setDataPrevisaoTarefa(null);
        setDataConclusao(null);
        setShowData(false);
        setShowDataConclusao(false);
        if(setTarefa){
            setTarefa(null);
        }
    }

    const salvarTarefa = async () => {
        try {
            if (!nomeTarefa || !dataPrevisaoTarefa) {
                setErro('Favor informar nome e data de previsão');
                return;
            }

            const body = {
                nome: nomeTarefa,
                dataPrevistaConclusao: dataPrevisaoTarefa,
                dataConclusao: dataConclusao ? dataConclusao : null
            }

            if (tarefa && tarefa._id) {
                await executaRequisicao('tarefa/' + tarefa._id, 'put', body);
            } else {
                await executaRequisicao('tarefa', 'post', body);
            }

            setNomeTarefa('');
            setErro('');
            setDataPrevisaoTarefa(null);
            setDataConclusao(null);
            setShowDataConclusao(false);
            setShowData(false);
            setModalVisible(false);
            await getLista();
        } catch (e) {
            console.log(e);
            if (e?.response?.data?.erro) {
                setErro(e.response.data.erro);
            } else {
                setErro('Não foi possível cadastrar a tarefa, fale com o administrador.')
            }
        }
    }

    const excluirTarefa = async () => {
        try {
            if (tarefa && tarefa._id) {
                await executaRequisicao('tarefa/' + tarefa._id, 'delete');
                setNomeTarefa('');
                setErro('');
                setDataPrevisaoTarefa(null);
                setDataConclusao(null);
                setShowDataConclusao(false);
                setShowData(false);
                setModalVisible(false);
                await getLista();
            } else {
                setErro('Não foi possível excluir a tarefa, fale com o administrador.')
            }
        } catch (e) {
            console.log(e);
            if (e?.response?.data?.erro) {
                setErro(e.response.data.erro);
            } else {
                setErro('Não foi possível excluir a tarefa, fale com o administrador.')
            }
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={[defaultStyles.container, modalVisible ? { backgroundColor: 'rgba(0,0,0,0.5)' } : null]} >
                <View style={modalStyles.container}>
                    <Text style={modalStyles.title}>{tarefa ? "Alterar uma tarefa" : "Adicionar uma tarefa"}</Text>
                    {erro ? <Text style={modalStyles.error}>{erro}</Text> : null}
                    <TextInput
                        placeholder="Nome da tarefa"
                        placeholderTextColor={colors.mediumGreyColor}
                        style={modalStyles.input}
                        value={nomeTarefa}
                        onChangeText={setNomeTarefa} />

                    <TouchableOpacity style={modalStyles.input}
                        onPress={() => setShowData(!showData)} >
                        <Text style={modalStyles.inputText}>{dataPrevisaoTarefa ? moment(dataPrevisaoTarefa).format("DD/MM/yyyy") : "Data prevista de término"}</Text>
                    </TouchableOpacity>
                    {showData === true && <DateTimePicker
                        mode="date"
                        value={dataPrevisaoTarefa ? dataPrevisaoTarefa : new Date()}
                        is24Hour={true}
                        display="default"
                        onChange={(_: any, selectedDate: any) => {
                            setDataPrevisaoTarefa(selectedDate)
                            setShowData(false)
                        }}
                    />}

                    {
                        tarefa !== null && tarefa !== undefined ?
                            (
                                <>
                                    <TouchableOpacity style={modalStyles.input}
                                        onPress={() => setShowDataConclusao(!showDataConclusao)} >
                                        <Text style={modalStyles.inputText}>{dataConclusao ?
                                            moment(dataConclusao).format("DD/MM/yyyy") : "Data de conclusão"}</Text>
                                    </TouchableOpacity>
                                    {showDataConclusao === true && <DateTimePicker
                                        mode="date"
                                        value={dataConclusao ? dataConclusao : new Date()}
                                        is24Hour={true}
                                        display="default"
                                        onChange={(_: any, selectedDate: any) => {
                                            setDataConclusao(selectedDate)
                                            setShowDataConclusao(false)
                                        }}
                                    />}
                                </>
                            )
                            : null
                    }

                    <View style={[defaultStyles.horizontalView, modalStyles.buttons]}>
                        <TouchableOpacity onPress={salvarTarefa} style={[modalStyles.button, tarefa ? modalStyles.buttonsEdit : null]}>
                            <Text style={modalStyles.buttonText}>{tarefa ? "Alterar" : "Salvar"}</Text>
                        </TouchableOpacity>
                        {
                            tarefa ?
                                <TouchableOpacity onPress={excluirTarefa} style={modalStyles.buttonDelete}>
                                    <Text style={modalStyles.buttonDeleteText}>Excluir</Text>
                                </TouchableOpacity>
                                : null
                        }

                        <TouchableOpacity onPress={closeModal} style={[modalStyles.buttonCancel, tarefa ? modalStyles.buttonsEdit : null]}>
                            <Text style={modalStyles.buttonCancelText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    );
}
