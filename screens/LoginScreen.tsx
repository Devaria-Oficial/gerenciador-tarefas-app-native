import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { executaRequisicao } from '../services/api';
import { loginStyles, defaultStyles } from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = () => {

    const navigation = useNavigation();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const executaLogin = async () => {
        try {
            setLoading(true);
            setErrorMsg('');

            if (!login || login.length < 5
                || !password || password.length < 5) {
                setErrorMsg('Favor preencher corretamente os dados');
                setLoading(false);
                return;
            }

            const body = {
                login,
                senha: password
            };

            const resultado = await executaRequisicao('login', 'post', body);
            if(resultado?.data?.token){
                AsyncStorage.setItem('accessToken', resultado.data.token);
                AsyncStorage.setItem('usuarioNome', resultado.data.nome);
                AsyncStorage.setItem('usuarioEmail', resultado.data.email);
                navigation.navigate('Home');   
                return; 
            }
            setErrorMsg('Não foi possível efetuar o login, fale com o administrador.')
        } catch (e) {
            if (e?.response?.data?.message) {
                console.log(e?.response?.data);
                setErrorMsg(e.response.data.message);
            } else {
                console.log(e);
                setErrorMsg('Não foi possível efetuar o login, fale com o administrador.')
            }
        }
        setLoading(false);
    }

    return (
        <View style={defaultStyles.container}>
            <View style={loginStyles.form}>
                <Image source={require('../assets/images/logo.png')} style={loginStyles.logo} />

                {errorMsg
                    ? <Text style={defaultStyles.errorMsg}>{errorMsg}</Text>
                    : null}

                <View style={[defaultStyles.horizontalView, loginStyles.inputView]}>
                    <Image source={require('../assets/images/mail.png')} style={loginStyles.icone} />
                    <TextInput
                        style={loginStyles.input}
                        placeholder="Digite seu email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={login}
                        onChangeText={setLogin} />
                </View>
                <View style={[defaultStyles.horizontalView, loginStyles.inputView]}>
                    <Image source={require('../assets/images/lock.png')} style={loginStyles.icone} />
                    <TextInput secureTextEntry={true} style={loginStyles.input} placeholder="Digite sua senha"
                        value={password}
                        autoCapitalize="none"
                        onChangeText={setPassword} />
                </View>

                <TouchableOpacity style={loginStyles.button} onPress={executaLogin}
                    disabled={loading}>
                    {
                        loading ?
                            <ActivityIndicator color="#fff" />
                            :
                            <Text style={loginStyles.buttonText}>Login</Text>
                    }

                </TouchableOpacity>
            </View>
        </View>
    );
}