import axios, { Method } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL  = 'http://192.168.15.12:3001/api/';
const instance = axios.create({
    baseURL : URL,
    timeout: 30000
});

export const executaRequisicao = async(endpoint: string, metodo : Method, body?: any ) => {

    const accessToken =  await AsyncStorage.getItem('accessToken');

    let headers : any = {'Content-Type' : 'application/json'};
    if(accessToken){
        headers['Authorization'] = 'Bearer ' + accessToken;
    }

    console.log(`executando: ${URL}${endpoint}, metodo ${metodo}, body ${JSON.stringify(body)}, headers ${JSON.stringify(headers)}`);
    return instance.request({
        url : endpoint,
        method: metodo,
        data : body? body : '',
        headers : headers
    });
}