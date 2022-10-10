import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Alert, Image } from 'react-native';
import { firebaseConfig } from '../../../back-end/firebase-config';
import { Inputs } from '../../components/Input';
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native';
import { propsStack } from '../../Models';

export function Cadastro() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigation = useNavigation<propsStack>();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const handleCreateAccont =() =>{
      createUserWithEmailAndPassword(auth,email,senha)
      // userCredential passado em parametro teste
      .then((userCredential)=>{
        console.log ('conta criada');
        const user = userCredential.user;
        console.log (user);
      })
      .catch(error =>{console.log (error)
        Alert.alert(error.menssage);
      })
    }
    return(
        <View style={styles.container}>

        <Image style={styles.imagem} source={require('../../assets/imag_test.png')} />

        <Text style={styles.label_input}>Nome:</Text>
        <Inputs 
        titlo='Nome completo'
        onChangeText={(text)=> setEmail(text)}
        />  
        
        <Text style={styles.label_input}>E-mail:</Text>
        <Inputs 
        titlo='maria@gmail.com'
        onChangeText={(text)=> setEmail(text)}
        />

        <Text style={styles.label_input}>Senha:</Text>
        <Inputs 
        titlo='Escolha uma senha'
        onChangeText={(text)=> setSenha(text)}
        secureTextEntry
        />

        <Text style={styles.label_input}>Confirmar Senha:</Text>
        <Inputs 
        titlo='Confirme sua Senha'
        onChangeText={(text)=> setSenha(text)}
        secureTextEntry
        />

      <View style={styles.btn}>
      <TouchableOpacity  
        onPress={handleCreateAccont} 
        style={styles.btn_cadastrar}>
        <Text style={styles.label_btn}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity  
        onPress={()=> navigation.navigate("Login")} 
        style={styles.btn_cancelar}>
        <Text style={styles.label_btn}>Cancelar</Text>
      </TouchableOpacity>
      </View>
      
      </View>   
    );

}