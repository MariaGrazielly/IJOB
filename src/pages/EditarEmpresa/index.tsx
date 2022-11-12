import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Inputs, InputsMask } from '../../components/Input';

import { styles } from './styles';

export function EditarEmpresa() {

  const navigation = useNavigation();

  return (
    <Background>
      <ScrollView>
      <Header title='Editar Empresa' icone_imag />
     
        <View style={styles.container}>
          <View>
            <Image style={styles.imagem} source={require('../../assets/imag_test.png')} />
          </View>
          
          <View>
            <Text style={styles.label_input}>Whatsapp:</Text>
            <InputsMask titloInputMask='informe seu Whatsapp' type='cel-phone'/>

            <Text style={styles.label_input}>Celular:</Text>
            <InputsMask titloInputMask='informe seu celular' type='cel-phone'/>

            <Text style={styles.label_input}>CEP:</Text>
            <Inputs titloInput='Cep da empresa' />  

            <Text style={styles.label_input}>Rua:</Text>
            <Inputs titloInput='Endereço da empresa' />  

            <Text style={styles.label_input}>Bairro:</Text>
            <Inputs titloInput='Endereço da empresa' />  

            <Text style={styles.label_input}>Cidade:</Text>
            <Inputs titloInput='Endereço da empresa' />  

            <Text style={styles.label_input}>UF:</Text>
            <Inputs titloInput='Endereço da empresa' maxLength={2} />  

            <Text style={styles.label_input}>Serviços:</Text>
            <TextInput
            style={styles.input_servicos}
            placeholder="Liste seus serviços"
            multiline={true}
            numberOfLines={10}          
            />  

          <View style={styles.btn}>
            <TouchableOpacity
            style={styles.btn_salvar}>
            <Text style={styles.label_btn}>Salvar</Text>
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