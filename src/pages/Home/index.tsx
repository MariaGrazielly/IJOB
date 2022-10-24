import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { CardServico } from '../../components/CardServico';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function Home() {

  const [text, setText] = useState("");

  return (
    <ScrollView>
      <Header />

    <View style={styles.buttonPesquisar}>
      <TextInput 
      style={styles.inputPesquisar}
      placeholder='Pesquisar'
      autoCorrect={false}
      //value={text}
      />

    <TouchableOpacity style={styles.buttonIconPesquisar}>
     <Icon style={styles.iconPesquisar} name="magnifier" />
     </TouchableOpacity>
    </View>

    <CardServico
    name_empresa='Borracharia'
    cidade='Juazeiro do norte'
    estado='CE'
    />
    </ScrollView>
  );
}