import React from 'react';

import { View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from './../../../back-end/firebase-config';
import { styles } from './styles';
import logoImg from '../../../assets/logo.png';
import { Inputs } from '../../components/Input';
import * as Google from 'expo-google-app-auth'
import {useNavigation} from '@react-navigation/native';
import { propsStack } from '../../Models';
import { interpolateSharableColor } from 'react-native-reanimated';

//import  Icon  from 'react-native-vector-icons/FontAwesome5';

export function Login() {

    const navigation = useNavigation<propsStack>();
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [acessToken,setAcessToken] = React.useState("");
    const [acessInfo,setAcessInfo] = React.useState("");
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    async function singInGoogleAsync() {
      try{
        const result = await Google.logInAsync({
          androidClientId :"",
          iosClientId:"",
          scopes:["profile","email"]
 });
      
      if (result.type ==="success"){
          setAcessToken(acessToken);
      }else{
        console.log("permissão negada");
      }
    }
      catch(e){
        console.log(e);
      }
    }

    async function  getUserData() {
      
    }

    function showUserInfo(){}

    const handleSignIn =() => {
      signInWithEmailAndPassword(auth,email,senha )
      // userCredential passado em parametro teste
      .then((userCredential)=>{
        const user = userCredential.user;
        navigation.navigate("Home")
      })
      .catch (error =>{
        Alert.alert ('Usuario e/ou senha incorreta')
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
       <TouchableOpacity onPress={handleSignIn}>
        <Text style={styles.btn_entrar}>Entrar</Text>
       </TouchableOpacity>
      </View>    

      <View style={styles.container_btn}>
        <TouchableOpacity>
          <Text style={styles.title_btn}
          onPress={()=> navigation.navigate("Cadastro")}>Cadastre-se</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.title_btn}
            onPress={()=> navigation.navigate("RedefinirSenha")}>Redefinir senha</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha} >
        <View style={styles.linha_1}></View>
        <Text>OU</Text>
        <View style={styles.linha_2}></View>
      </View>

      <View style={styles.login_google}>
      <TouchableOpacity onPress={acessToken? getUserData:singInGoogleAsync}>
      
      <Text style={styles.texto_google}>LOGIN GOOGLE</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}