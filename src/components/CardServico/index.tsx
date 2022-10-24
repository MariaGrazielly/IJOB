import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';

import { styles } from './styles';

interface PropsInfoEmpresa{
    name_empresa: string;
    cidade: string;
    estado: string;
}

export function CardServico({name_empresa, cidade, estado}: PropsInfoEmpresa) {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.container_img}>
            <Image style={styles.img_empresa} source={require("../../../src/assets/foto_empresa.png")} />
        </View>
        <View style={styles.info_empresa}>
            <Text style={styles.nomeEmpresa}>{name_empresa}</Text>
            <Text style={styles.cidadeEmpresa}>Cidade: {cidade}-{estado}</Text>
        </View>
    </TouchableOpacity>
  );
}