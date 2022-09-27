import React, { useState } from 'react';
import { View, Image, Text, Button } from 'react-native';
import {auth} from "../../BD/firebase";
import { styles } from './styles';
import logoImg from '../../../assets/logo.png';
import { Inputs } from '../../components/Input';
//import  Icon  from 'react-native-vector-icons/FontAwesome5';

export function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
        <Image source={logoImg} />
        <Text style={styles.title}>Acesse sua conta</Text>
        <Inputs 
        titlo='E-mail'
        onChangeText={setEmail}
        />
        <Inputs 
        titlo='Senha'
        onChangeText={setSenha}
        />
        <Button title='Entrar' />
    
    </View>
  );
}