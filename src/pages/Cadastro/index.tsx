import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Alert, Image, ScrollView } from 'react-native';
import { firebaseConfig } from '../../../back-end/firebase-config';
import { Inputs } from '../../components/Input';
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native';
import { propsStack } from '../../Models';
import { Header } from '../../components/Header';


export function Cadastro() {
   
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    
    
    const [confirmaSenha, setConfirmaSenha] = useState("");
    
    const navigation = useNavigation<propsStack>();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    
    const handleCreateAccont =() =>{
      if (confirmaSenha === senha){
     
      createUserWithEmailAndPassword(auth,email,senha,)
      // userCredential passado em parametro teste
      .then((userCredential)=>{
        Alert.alert('conta criada');
        const user = userCredential.user;
        console.log (user);
        navigation.navigate('Login');
      })
      .catch(error =>{console.log (error)
        Alert.alert(error.menssage);
      })
    }
    else {Alert.alert("Senhas não são iguais, por favor tente novamente.")}
    }
    return(
      <ScrollView>
        <Header title='Cadastro'/>
        <View>
        <View style={styles.container}>

        <Image style={styles.imagem} source={require('../../assets/imag_test.png')} />

        <Text style={styles.label_input}>Nome:</Text>
        <Inputs 
        titlo='Nome completo'
        onChangeText={(text)=> setNome(text)}
        />  

        <Text style={styles.label_input}>CPF:</Text>
        <Inputs 
        titlo='123.256.525-58'
        onChangeText={(text)=> setCPF(text)}
        />  

        <Text style={styles.label_input}>Data de Nascimento:</Text>
        <Inputs 
        titlo='10/11/1922'
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
        onChangeText={(text)=> setConfirmaSenha(text)}
        secureTextEntry
        />

      <View style={styles.btn}>
      <TouchableOpacity  
        onPress={handleCreateAccont} 
        style={styles.btn_cadastrar}>
        <Text style={styles.label_btn}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity  
        onPress={()=> navigation.goBack()} 
        style={styles.btn_cancelar}>
        <Text style={styles.label_btn}>Cancelar</Text>
      </TouchableOpacity>
      </View>
      
      </View>   
      </View>
      </ScrollView>
    );

}