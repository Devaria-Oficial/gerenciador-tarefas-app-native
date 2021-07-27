import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { defaultStyles } from '../styles/styles';
import { Header } from '../componentes/Header';
import { Filtros } from '../componentes/Filtros';
import { Lista } from '../componentes/Lista';
import { Footer } from '../componentes/Footer';
import { useState } from 'react';
import { executaRequisicao } from '../services/api';
import moment from 'moment';

export const HomeScreen = () => {

    // STATES DA LISTA
    const [tarefas, setTarefas] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    
    // STATES DOS FILTROS
    const [periodoDe, setPeriodoDe] = useState(new Date());
    const [periodoAte, setPeriodoAte] = useState(new Date());
    const [status, setStatus] = useState(0);

    // STATE DE EXIBICAO DO MODAL
    const [showModal, setShowModal] = useState(false);

    // STATES DO CADASTRO
    const [erro, setErro] = useState('');
    const [nomeTarefa, setNomeTarefa] = useState('');
    const [dataPrevisaoTarefa, setDataPrevisaoTarefa] = useState('');

    const getTarefasComFiltro = async () => {
        try {
            setRefreshing(true);
            setLoading(true);
            let filtros = '?status=' + status;

            if (periodoDe) {
                filtros += '&periodoDe=' + moment(periodoDe).format("yyyy-MM-DD");
            }

            if (periodoAte) {
                filtros += '&periodoAte=' + moment(periodoAte).format("yyyy-MM-DD");
            }

            const resultado = await executaRequisicao('tarefa' + filtros, 'get');
            if (resultado && resultado.data) {
                setTarefas(resultado.data);
            }
        } catch (e) {
            console.log(e);
        }
        setRefreshing(false);
        setLoading(false);
    }

    useEffect(() => {
        getTarefasComFiltro()
    }, [status, periodoDe, periodoAte]);

    return (
        <SafeAreaView style={[defaultStyles.container, defaultStyles.containerTop]}>
            <Header />
            <Filtros 
                periodoDe={periodoDe}
                status={status}
                periodoAte={periodoAte}
                setStatus={setStatus}
                setPeriodoDe={setPeriodoDe}
                setPeriodoAte={setPeriodoAte} />

            <Lista lista={tarefas} refreshing={refreshing} getLista={getTarefasComFiltro} loading={loading} />            
            <Footer getLista={getTarefasComFiltro}/>
        </SafeAreaView>
    );
}