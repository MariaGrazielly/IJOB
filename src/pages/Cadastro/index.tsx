import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Text, Button, TouchableOpacity, View, Alert } from 'react-native';
import { firebaseConfig } from '../../../back-end/firebase-config';
import { Inputs } from '../../components/Input';
import { styles } from './styles';

export function Cadastro() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

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
        
        <Inputs 
        titlo='E-mail'
        onChangeText={(text)=> setEmail(text)}
        />
        <Inputs 
        titlo='Senha'
        onChangeText={(text)=> setSenha(text)}
        secureTextEntry
        />

      
       <TouchableOpacity  
       onPress={handleCreateAccont} 
       style={styles.btn}>
        <Text>cadastro</Text>
        </TouchableOpacity>
         
      
      </View>   
    );

}