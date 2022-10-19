import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import { propsStack } from '../../Models';
import { styles } from './styles';

interface HeaderProps{
    title?: string;
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
                <Modal transparent>
                    <View style={styles.modal}>
                        <View style={styles.modal_lista}>

                            <View>
                            <Icon style={styles.icone_close_menu} name="close"
                            onPress={showSidebar}  /> 
                            </View>

                            <View style={styles.imagem}>
                                <Image style={styles.imag_menu} source={require('../../assets/imag_test.png')} />
                                <Text style={styles.img_texto}>Usuário Teste</Text> 
                            </View>
                            
                            <View style={styles.linha_menu}></View>

                            <View style={styles.menu_navigator}>
                                <TouchableOpacity onPress={()=> {
                                    navigation.navigate("Editarperfil")
                                    showSidebar()}}>
                                    <Text style={styles.label_navigator}>Editar Perfil</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{ 
                                    navigation.navigate("CadastrarEmpresa")
                                    showSidebar()}}>
                                    <Text style={styles.label_navigator}>Cadastrar Empresa</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                                    <Text style={styles.label_Sair_navigator}>Sair</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>
           
                        
        }
    </View>
  );
}