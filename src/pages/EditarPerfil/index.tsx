import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function EditarPerfil() {
  return (
    <Background>
      <Header title='Editar Perfil' icone_imag />
        <View style={styles.container}>

          <TouchableOpacity>
          <Image style={styles.imagem} source={require('../../assets/imag_test.png')} />
          </TouchableOpacity>

          <View style={styles.info}>
          <View style={styles.info_texto}>
            <Text style={styles.info_label}>Nome:</Text>
            <Text style={styles.info_conteudo}>Maria</Text>
          </View>
          <View style={styles.info_texto}>
            <Text style={styles.info_label}>Email:</Text>
            <Text style={styles.info_conteudo}>maria@gmail.com</Text>
          </View>
        </View> 
        </View> 
    </Background>
  );
}