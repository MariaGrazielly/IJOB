import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import { propsStack } from '../../Models';
import { styles } from './styles';

interface HeaderProps{
    title: string;
    icone_imag?: boolean;
}

export function Header({title, icone_imag}: HeaderProps) {

    const navigation = useNavigation<propsStack>();

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

  return (
    <View style={styles.header}>
        { icone_imag?
            <View style={styles.headerIcone}>
            <Icon style={styles.icone_header} name="arrow-left"
                onPress={()=> navigation.goBack()}  /> 
            <Text style={styles.texto_header}>{title}</Text>
            </View>
            :
            <View style={styles.headerImage}>
                <Image style={styles.img_header} source={require("../../../assets/logo.png")} />
                <Icon style={styles.icone_header_menu} name="menu"
                onPress={showSidebar}  /> 
            </View>    
            
        }

        {
            sidebar &&
            <View style={styles.sidebar}>
                <Text style={styles.sidebar_texto}>funciona</Text>
            </View>
           
                        
        }

    </View>
  );
}