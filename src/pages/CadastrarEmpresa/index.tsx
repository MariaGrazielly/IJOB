import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import {ScrollView, View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { firebaseConfig } from '../../../back-end/firebase-config';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Inputs } from '../../components/Input';
import { propsStack } from '../../Models';

import { styles } from './styles';

export function CadastrarEmpresa() {

  const [nomeEmpresa,setNomeEmpresa] = useState("");
  const [cpf_cnpj,setCpf_cnpj] = useState("");
  const [whatsapp,setWhatsapp] = useState("");
  const [celular,setCelular] = useState("");
  const [cep,setCep] = useState("");
  const [rua,setRua] = useState("");
  const [bairro,setBairro] = useState("");
  const [cidade,setCidade] = useState("");
  const [uf,setUf] = useState("");
  const [servicos,setServicos] = useState("");



  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const navigation = useNavigation<propsStack>();

  const handleCreateAccont = async () =>{
          if (nomeEmpresa==="" && cpf_cnpj==="" && whatsapp==="" && celular==="" && cep==="" && rua==="" && bairro==="" && cidade ==="" && uf ==="" && servicos==="") {
            Alert.alert ("Complete os campos em branco.");
          }
          else{
          try {
            const docRef = await addDoc(collection(db, "users"), {
              nomeEmpresa: nomeEmpresa,
              cpf_cnpj: cpf_cnpj,
              whatsapp: whatsapp,
              celular: celular,
              cep: cep,
              rua: rua,
              bairro: bairro,
              cidade : cidade,
              uf : uf,
              servicos : servicos
              
          });
          
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }
      }


  return (
    <Background>
    <ScrollView>
        <Header />
        <View>
          <View style={styles.container}>
          <Image style={styles.imagem} source={require('../../assets/imag_test.png')} />

          <Text style={styles.label_input}>Nome da empresa:</Text>
          <Inputs titlo='Empresa'
          onChangeText={()=> setNomeEmpresa}/>  

          <Text style={styles.label_input}>CNPJ ou CPF:</Text>
          <Inputs titlo='10210310525'
          onChangeText={()=> setCpf_cnpj}/>   

          <Text style={styles.label_input}>Whatsapp:</Text>
          <Inputs titlo='88925232356'
          onChangeText={()=> setWhatsapp}/>   

          <Text style={styles.label_input}>Celular:</Text>
          <Inputs titlo='88925232356'
          onChangeText={()=> setCelular}/>  

          <Text style={styles.label_input}>CEP:</Text>
          <Inputs titlo='Cep da empresa'
          onChangeText={()=> setCep}/>  
          
          
          <Text style={styles.label_input}>Rua:</Text>
          <Inputs titlo='Endereço da empresa'
          onChangeText={()=> setRua}/>  

          <Text style={styles.label_input}>Bairro:</Text>
          <Inputs titlo='Endereço da empresa'
          onChangeText={()=> setBairro}/>  

          <Text style={styles.label_input}>Cidade:</Text>
          <Inputs titlo='Endereço da empresa'
          onChangeText={()=> setCidade}/>  

          <Text style={styles.label_input}>UF:</Text>
          <Inputs titlo='Endereço da empresa'
          onChangeText={()=> setUf}/>  

          <Text style={styles.label_input}>Serviços:</Text>
          <TextInput style={styles.input_servicos}
          placeholder="Liste seus serviços"
          multiline={true}
          numberOfLines={10}  
          onChangeText={()=> setServicos}        
          />  

      <View style={styles.btn}>
      <TouchableOpacity  
        //onPress={handleCreateAccont} 
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
    </Background>

  );
}