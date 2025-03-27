import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import Logo from '../../assets/logo.png';
import { style } from './style';

export default function ScheduleAppointment({ navigation }: any) {
    const [patientName, setPatientName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    async function handleSchedule() {
        if (!patientName || !date || !time || !description) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }

        try {
            // Aqui você pode adicionar a lógica para salvar o agendamento no banco de dados
            Alert.alert('Sucesso', 'Consulta agendada com sucesso!');
            navigation.navigate('Home'); 
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível agendar a consulta.');
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text style={style.text}>Agendar Consulta</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>NOME DO PACIENTE</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={patientName}
                        onChangeText={setPatientName}
                    />
                    <MaterialIcons name="person" size={20} color={themas.Colors.gray} />
                </View>
                <Text style={style.titleInput}>DATA</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={date}
                        onChangeText={setDate}
                        placeholder="DD/MM/AAAA"
                    />
                    <MaterialIcons name="date-range" size={20} color={themas.Colors.gray} />
                </View>
                <Text style={style.titleInput}>HORÁRIO</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={time}
                        onChangeText={setTime}
                        placeholder="HH:MM"
                    />
                    <MaterialIcons name="access-time" size={20} color={themas.Colors.gray} />
                </View>
                <Text style={style.titleInput}>DESCRIÇÃO</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={description}
                        onChangeText={setDescription}
                    />
                    <MaterialIcons name="description" size={20} color={themas.Colors.gray} />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={handleSchedule}>
                    <Text style={style.textButton}>Agendar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
