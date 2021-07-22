import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { defaultStyles } from '../styles/styles';
import { Header } from '../componentes/Header';
import { Filtros } from '../componentes/Filtros';
import { Lista } from '../componentes/Lista';
import { Footer } from '../componentes/Footer';
import { useState } from 'react';
import { executaRequisicao } from '../services/api';

export const HomeScreen = () => {

    // STATES DA LISTA
    const [tarefas, setTarefas] = useState([]);
    
    // STATES DOS FILTROS
    const [periodoDe, setPeriodoDe] = useState('');
    const [periodoAte, setPeriodoAte] = useState('');
    const [status, setStatus] = useState(0);

    // STATE DE EXIBICAO DO MODAL
    const [showModal, setShowModal] = useState(false);

    // STATES DO CADASTRO
    const [erro, setErro] = useState('');
    const [nomeTarefa, setNomeTarefa] = useState('');
    const [dataPrevisaoTarefa, setDataPrevisaoTarefa] = useState('');

    const getTarefasComFiltro = async () => {
        try {
            let filtros = '?status=' + status;

            if (periodoDe) {
                filtros += '&periodoDe=' + periodoDe;
            }

            if (periodoAte) {
                filtros += '&periodoAte=' + periodoAte;
            }

            const resultado = await executaRequisicao('tarefa' + filtros, 'get');
            if (resultado && resultado.data) {
                setTarefas(resultado.data);
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getTarefasComFiltro()
    }, [status, periodoDe, periodoAte]);

    return (
        <SafeAreaView style={[defaultStyles.container, defaultStyles.containerTop]}>
            <Header />
            <Filtros />
            <Lista lista={tarefas} />
            <Footer />
        </SafeAreaView>
    );
}