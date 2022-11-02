import { url } from 'inspector';
import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text, Modal } from 'react-native';
import {WebView} from "react-native-webview"

import { styles } from './styles';

interface PropsInfoEmpresa{
    name_empresa: string;
    cidade: string;
    estado: string;
    rua: string;
    bairro: string;
    uf: string;
    cep: string;
    whatsapp: string;
    servicos: string;
    imagem: string;
}

export function CardServico({name_empresa, cidade, estado, rua, bairro, uf, cep, whatsapp, servicos, imagem}: PropsInfoEmpresa) {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <TouchableOpacity style={styles.container} 
    onPress={showSidebar}>
        <View style={styles.container_img}>
            <Image style={styles.img_empresa} source={{uri: `${imagem}`}} />
        </View>
        <View style={styles.info_empresa}>
            <Text style={styles.nomeEmpresa}>{name_empresa}</Text>
            <Text style={styles.cidadeEmpresa}>Cidade: {cidade}-{estado}</Text>
        </View>
    </TouchableOpacity>

      {
        sidebar &&
        <Modal transparent>
          <View style={styles.modal}>
            <View style={styles.conteudoModal}>
              <View style={styles.infoModal}>
                <Text>Empresa:</Text>
                <Text>{name_empresa}</Text>
              </View>

              <View style={styles.infoModal}>
                <Text>Endereço:</Text>
                <Text style={styles.dados}>
                  Rua: {rua}
                </Text>  
                <Text style={styles.dados}>
                  Bairro: {bairro}
                </Text>
                <Text style={styles.dados}>
                  Cidade-UF: {cidade}-{uf}
                </Text>
                <Text style={styles.dados}>  
                  CEP: {cep}
                </Text>
              </View>
            
              <View style={styles.infoModal}>
                <Text>Whatsapp:</Text>
                <Text>{whatsapp}</Text>
              </View>

              <View style={styles.infoModal}>
                <Text>Serviços:</Text>
                <Text>{servicos}</Text>
              </View>

              <View style={styles.fecharModal}>
              <TouchableOpacity
              onPress={showSidebar}
              >
                <Text>Fechar</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      }

    </>
  );
}