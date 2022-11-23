import React, { ReactElement, useState } from 'react';
import { TouchableOpacity, View, Image, Text, Modal, Linking } from 'react-native';


import { styles } from './styles';

interface PropsInfoEmpresa{
    name_empresa: string;
    cidade: string;
    estado: string;
    rua: string;
    bairro: string;
    cep: string;
    whatsapp: string;
    servicos: string;
    imagem: string;
    cpf_cnpj?: string;
    children?: boolean;
}

export function CardServico({name_empresa, cidade, estado, rua, bairro, cep, whatsapp, servicos, imagem, cpf_cnpj, children}: PropsInfoEmpresa) {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <TouchableOpacity style={styles.container} 
    onPress={showSidebar}>
        <View>
          {
            imagem?
            <Image style={styles.img_empresa} 
            source={{uri: `${imagem}`}} 
            />
            :
            <Image style={styles.img_empresa} 
            source={require("../../../assets/sem-foto.jpg")} 
            />
          }

        </View>
        <View style={styles.info_empresa}>
            <Text style={styles.nomeEmpresa}>{name_empresa}</Text>
            <Text style={styles.cidadeEmpresa}>Cidade: {cidade} - {estado}</Text>
        </View>
    </TouchableOpacity>

      {
        sidebar &&
        <Modal transparent>
          <View style={styles.modal}>
            <View style={styles.conteudoModal}>
              <View style={styles.infoModal}>
                <Text style={styles.dados}>Empresa:</Text>
                <Text style={styles.dadosInfo}>{name_empresa}</Text>
              </View>

              <View style={styles.infoModal}>
                <Text style={styles.dados}>CPF/CNPJ:</Text>
                <Text style={styles.dadosInfo}>{cpf_cnpj}</Text>
              </View>

              <View style={styles.infoModal}>
                <Text style={styles.dados}>Endereço:</Text>
                <Text style={styles.dadosInfo}>
                  Rua: {rua}
                </Text>  
                <Text style={styles.dadosInfo}>
                  Bairro: {bairro}
                </Text>
                <Text style={styles.dadosInfo}>
                  Cidade/Estado: {cidade} - {estado}
                </Text>
                <Text style={styles.dadosInfo}>  
                  CEP: {cep}
                </Text>
              </View>
            
              <View style={styles.infoModal}>
                <Text style={styles.dados}>Whatsapp:</Text>
                <Text style={styles.dadosInfo}
                 onPress={() => { 
                  Linking.openURL(`https://api.whatsapp.com/send?phone=55${whatsapp}&text=Ol%C3%A1%2C%20`); 
                }}> 
                {whatsapp}</Text>
              </View>

              <View style={styles.infoModal}>
                <Text style={styles.dados}>Serviços:</Text>
                <Text style={styles.dadosInfo}>{servicos}</Text>
              </View>

              <View style={styles.btn_modal}>
              <TouchableOpacity style={styles.fecharModal}
              onPress={showSidebar}
              >
                <Text>Fechar</Text>
              </TouchableOpacity>

              {
              children?
              <TouchableOpacity style={styles.verificarModal}>
                <Text style={styles.textoVerificado}>Verificada</Text>
              </TouchableOpacity>
              :
              <></>
              }
              
              </View>
            </View>
          </View>
          
        </Modal>
      }

    </>
  );
}