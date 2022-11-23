import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Alert } from 'react-native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';
import { propsStack } from '../../Models';
import { firebaseConfig } from '../../../back-end/firebase-config';
import { initializeApp } from 'firebase/app';
import { Inputs } from '../../components/Input';
import { styles } from './styles';
import { Header } from '../../components/Header';


export function RedefinirSenha() {

  const [email, setEmail] = useState("");
  const navigation = useNavigation<propsStack>();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  async function forgotPassword (){
    //redefinir Senha
    await sendPasswordResetEmail(auth,email)
        .then(() => {
            Alert.alert('Você receberá em alguns instantes um email com as informações para o cadastro da nova senha. Não esqueça de verificar sua caixa de Spam.')
            navigation.navigate('Login')
            console.log("Sucesso")
        })
    .catch((error) => {
      console.log("error => ", error)
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        //Alert.alert(errorMessage);
    });
}

  return (
    <View>
      <Header icone_imag title='Redefinir senha'/>

      <View style={styles.container}>

      <View style={styles.texto_novasenha}>
        <Text style={styles.texto}>Por favor digite seu endereço de email.
              
        </Text>
      </View>

    
      <Inputs 
        titloInput='E-mail'
        onChangeText={setEmail}
        />
  
  
      <View>
        <TouchableOpacity 
        style={styles.btn}
        onPress={ forgotPassword }>
            <Text style={styles.btn_texto}>Redefinir senha</Text>
        </TouchableOpacity>
        </View>
        </View>
    </View>
  );
}