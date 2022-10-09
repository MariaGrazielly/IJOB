import React, { useState } from 'react';

import { View, Image, Text, Button, TouchableOpacity, Alert} from 'react-native';
import {getAuth,signInWithEmailAndPassword,} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from './../../../back-end/firebase-config';
import { styles } from './styles';
import logoImg from '../../../assets/logo.png';
import { Inputs } from '../../components/Input';
import { GoogleSigninButton } from 'react-native-google-signin';
import {useNavigation} from '@react-navigation/native';
import { propsStack } from '../../Models';

//import  Icon  from 'react-native-vector-icons/FontAwesome5';

export function Login() {

    const navigation = useNavigation<propsStack>();
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
  
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSignIn =() => {
      signInWithEmailAndPassword(auth,email,senha )
      // userCredential passado em parametro teste
      .then((userCredential)=>{
        const user = userCredential.user;
        navigation.navigate("Home")
      })
      .catch (error =>{
        console.log (error)
      })
    }
    
    
  return (
    <View style={styles.container}>
        <Image source={logoImg} />
        <Text style={styles.title}>Acesse sua conta</Text>
        <Inputs 
        titlo='E-mail'
        onChangeText={(text)=> setEmail(text)}
        />
        <Inputs 
        titlo='Senha'
        onChangeText={(text)=> setSenha(text)}
        secureTextEntry
        />

      <View style={styles.btn}>
       <Button onPress={handleSignIn} title='Entrar'  />
      </View>    

      <View style={styles.container_btn}>
        <TouchableOpacity>
          <Text style={styles.title_btn}
          onPress={()=> navigation.navigate("Cadastro")}>Cadastre-se</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.title_btn}>Redefinir senha</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha} >
        <View style={styles.linha_1}></View>
        <Text>OU</Text>
        <View style={styles.linha_2}></View>
      </View>

      <View style={styles.login_google}>
        <Text style={styles.texto_google}>LOGIN GOOGLE</Text>
      </View>

    </View>
  );
}