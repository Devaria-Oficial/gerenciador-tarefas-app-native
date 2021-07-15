import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { loginStyles, defaultStyles } from '../styles/styles';

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

            //const resultado = await executaRequisicao('login', 'post', body);
            // if(resultado?.data?.token){
            //     localStorage.setItem('accessToken', resultado.data.token);
            //     localStorage.setItem('usuarioNome', resultado.data.nome);
            //     localStorage.setItem('usuarioEmail', resultado.data.email);
            //     props.setAccessToken(resultado.data.token);
            // }

            navigation.navigate('Home');
        } catch (e) {
            console.log(e);
            if (e?.response?.data?.erro) {
                setErrorMsg(e.response.data.erro);
            } else {
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
                        value={login}
                        onChangeText={setLogin} />
                </View>
                <View style={[defaultStyles.horizontalView, loginStyles.inputView]}>
                    <Image source={require('../assets/images/lock.png')} style={loginStyles.icone} />
                    <TextInput secureTextEntry={true} style={loginStyles.input} placeholder="Digite sua senha"
                        value={password}
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