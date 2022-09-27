import React, { useState } from 'react';
<<<<<<< HEAD
import { View, Image, Text, Button, TouchableOpacity} from 'react-native';

=======
import { View, Image, Text, Button } from 'react-native';
import {auth} from "../../BD/firebase";
>>>>>>> 849a39bb7c872c8da465e8717101e038698a2b57
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

      <View style={styles.btn}>
        <Button title='Entrar' />
      </View>    

      <View style={styles.container_btn}>
        <TouchableOpacity>
          <Text style={styles.title_btn}>Cadastre-se</Text>
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

    </View>
  );
}