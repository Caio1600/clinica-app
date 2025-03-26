import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { style } from "./style";
import Logo from '../../assets/logo.png';
import { themas } from "../../global/themes";
import { createTable, getUser, insertUser } from "../../database/database";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        createTable();
        insertUser('teste@teste.com', '1234').then(() => console.log('Usuário inserido!'));
    }, []);

    async function getLogin() {
        setLoading(true);
    
        if (!email || !password) {
            Alert.alert('Atenção', 'Informe os campos obrigatórios!');
            setLoading(false);
            return;
        }
    
        const exists = await getUser(email, password);
        setLoading(false);
    
        if (exists) {
            Alert.alert('Acesso autorizado', 'Bem-vindo ' + email);
        } else {
            Alert.alert('Não Autorizado', 'Email ou senha incorretos');
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain" />
                <Text style={style.text}>Bem vindo!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>EMAIL</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
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
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getLogin}>
                    {loading ? <ActivityIndicator /> : <Text style={style.textButton}>Entrar</Text>}
                </TouchableOpacity>
            </View>
        </View>
    );
}
