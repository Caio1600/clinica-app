import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { insertUser, createTable } from '../../database/database';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import Logo from '../../assets/logo.png';
import { style } from './style';

export default function Register({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        createTable(); 
    }, []);

    async function handleRegister() {
        if (!email || !password || !confirmPassword) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem!');
            return;
        }

        try {
            await insertUser(email, password);
            Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
            navigation.navigate('Login'); 
        } catch (error) {
            Alert.alert('Erro', 'O email já está em uso!');
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain" />
                <Text style={style.text}>Cadastro</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>EMAIL</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <MaterialIcons name="email" size={20} color={themas.Colors.gray} />
                </View>
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        secureTextEntry
                        onChangeText={setPassword}
                    />
                    <MaterialIcons name="remove-red-eye" size={20} color={themas.Colors.gray} />
                </View>
                <Text style={style.titleInput}>CONFIRMAR SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={confirmPassword}
                        secureTextEntry
                        onChangeText={setConfirmPassword}
                    />
                    <MaterialIcons name="remove-red-eye" size={20} color={themas.Colors.gray} />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={handleRegister}>
                    <Text style={style.textButton}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
