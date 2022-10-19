import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {ScrollView, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Inputs } from '../../components/Input';
import { propsStack } from '../../Models';

import { styles } from './styles';

export function CadastrarEmpresa() {

  const navigation = useNavigation<propsStack>();


  return (
    <Background>
    <ScrollView>
        <Header />
        <View>
          <View style={styles.container}>
          <Image style={styles.imagem} source={require('../../assets/imag_test.png')} />

          <Text style={styles.label_input}>Nome da empresa:</Text>
          <Inputs titlo='Empresa'/>  

          <Text style={styles.label_input}>CNPJ ou CPF:</Text>
          <Inputs titlo='10210310525'/>  

          <Text style={styles.label_input}>Whatsapp:</Text>
          <Inputs titlo='88925232356'/>  

          <Text style={styles.label_input}>Celular:</Text>
          <Inputs titlo='88925232356'/>  

          <Text style={styles.label_input}>CEP:</Text>
          <Inputs titlo='Cep da empresa'/>  
          
          <Text style={styles.label_input}>Rua:</Text>
          <Inputs titlo='Endereço da empresa'/>  

          <Text style={styles.label_input}>Bairro:</Text>
          <Inputs titlo='Endereço da empresa'/>  

          <Text style={styles.label_input}>Cidade:</Text>
          <Inputs titlo='Endereço da empresa'/>  

          <Text style={styles.label_input}>UF:</Text>
          <Inputs titlo='Endereço da empresa'/>  

          <Text style={styles.label_input}>Serviços:</Text>
          <TextInput style={styles.input_servicos}
          placeholder="Liste seus serviços"
          multiline={true}
          numberOfLines={10}          
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