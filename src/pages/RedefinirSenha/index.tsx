import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Alert } from 'react-native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';
import { propsStack } from '../../Models';
import { firebaseConfig } from '../../../back-end/firebase-config';
import { initializeApp } from 'firebase/app';
import { Inputs } from '../../components/Input';
import { styles } from './styles';


export function RedefinirSenha() {

  const [email, setEmail] = useState("");
  const navigation = useNavigation<propsStack>();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  async function forgotPassword (){
    //redefinir Senha
    await sendPasswordResetEmail(auth,email)
        .then(() => {
            Alert.alert('Verifique sua caixa de Entrada e/ou Spam.')
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
    <View style={styles.container} >
    <Inputs 
        titloInput='E-mail'
        onChangeText={setEmail}
        />
      <View >
        <TouchableOpacity onPress={ forgotPassword }>
            <Text 
            >Redefinir senha</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}