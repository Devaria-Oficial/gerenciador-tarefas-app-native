import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { filtroStyles, defaultStyles } from '../styles/styles';
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

export const Filtros = () => {

    const [showFiltros, setShowFiltros] = useState(false);
    const [status, setStatus] = useState(0);
    const [periodoDe, setPeriodoDe] = useState<Date>(new Date());
    const [showPeriodoDe, setShowPeriodoDe] = useState(false);
    const [periodoAte, setPeriodoAte] = useState<Date>(new Date());
    const [showPeriodoAte, setShowPeriodoAte] = useState(false);

    return (
        <View style={filtroStyles.container}>
            <View style={filtroStyles.title}>
                <Text style={filtroStyles.titleText}>Tarefas</Text>
                <TouchableOpacity onPress={() => setShowFiltros(!showFiltros)}>
                    <Image source={require('../assets/images/filtro.png')} />
                </TouchableOpacity>
            </View>
            {showFiltros === true && (
                <View style={filtroStyles.filtros}>
                    <View style={filtroStyles.filtrosCampos}>
                        <Text style={filtroStyles.label}>Período de:</Text>
                        <TouchableOpacity style={[defaultStyles.inputSelect, filtroStyles.datePicker]}
                            onPress={() => setShowPeriodoDe(!showPeriodoDe)}>
                            <Text style={filtroStyles.label}>{moment(periodoDe).format("DD/MM/yyyy")}</Text>
                        </TouchableOpacity>
                        {showPeriodoDe === true && <DateTimePicker
                            mode="date"
                            value={periodoDe}
                            is24Hour={true}
                            display="default"
                            onChange={(_: any, selectedDate: any) => {
                                setPeriodoDe(selectedDate)
                                setShowPeriodoDe(false)
                            }}
                        />
                        }
                    </View>
                    <View style={filtroStyles.filtrosCampos}>
                        <Text style={filtroStyles.label}>Período até:</Text>
                        <TouchableOpacity style={[defaultStyles.inputSelect, filtroStyles.datePicker]}
                            onPress={() => setShowPeriodoAte(!showPeriodoAte)}>
                                <Text style={filtroStyles.label}>{moment(periodoAte).format("DD/MM/yyyy")}</Text>
                        </TouchableOpacity>
                        {showPeriodoAte === true && <DateTimePicker style={defaultStyles.inputSelect}
                            mode="date"
                            value={periodoAte}
                            is24Hour={true}
                            display="default"
                            onChange={(_: any, selectedDate: any) => {
                                setPeriodoAte(selectedDate)
                                setShowPeriodoAte(false)
                            }}
                        />}
                    </View>
                    <View style={filtroStyles.filtrosCampos}>
                        <Text style={filtroStyles.label}>Status:</Text>
                        <Picker
                            style={[defaultStyles.inputSelect, { borderColor: "#7C7786", borderWidth: 5 }]}
                            itemStyle={defaultStyles.inputSelect}
                            selectedValue={status}
                            onValueChange={(itemValue) => setStatus(itemValue)}>
                            <Picker.Item label="Todas" value={0} />
                            <Picker.Item label="Ativas" value={1} />
                            <Picker.Item label="Concluídas" value={2} />
                        </Picker>
                    </View>
                </View>
            )}
        </View>
    );
}
