import React, { useEffect, useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import { propsStack } from '../../Models';
import { styles } from './styles';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, DocumentData, getDoc, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../back-end/firebase-config';

interface HeaderProps{
    
     title?: string;
     icone_imag?: boolean;
     empresa?: string;
}

    


export function Header({title,icone_imag, empresa}: HeaderProps) {

    const navigation = useNavigation<propsStack>();
    const auth = getAuth();
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const [dados, setDados] = useState<DocumentData>([]);
    
    useEffect (()=>{

        onAuthStateChanged(auth, async (user) => {
            
            if (user) {
                //recuperar id
                const  uid =  user.uid;
                const docRef = doc(db, "users", uid);
                const docSnap = await getDoc(docRef);
                
                
                
             
                        if (docSnap.exists()) {
                            //setar dados do usuario
                            setDados (docSnap.data())
                           // console.log("documento:",dados);
                        } else {
                            // não existe dado
                            console.log("Não existe documento!");
                        }
                    
                } else {
                console.log ('error')
            }
            


        });

    },[setDados])
    
   // console.log(dados)
  
    // const confirmaCnpj = async () => {

    //     onAuthStateChanged(auth, async (user) => {
            
    //         if (user) {
                 
    //             const  uid =  user.uid;
    //             const docRef = doc(db, "createUserCnpj", uid);
    //             const docSnap = await getDoc(docRef);
                
                
                
             
    //                     if (docSnap.exists()) {
        //aq que tem que tar o retorno da tela de edição de empresa
                           
    //                     } else {
                          //aq que tem que tar o retorno da tela de cadastro de empresa  
    //                     }
                    
    //             } else {
    //             console.log ('error')
    //         }
    //     })
    // }

    const exit = ()=> {
        //função de deslogar do banco
    signOut(auth).then(() => {
       navigation.navigate('Login');
       
      }).catch((error) => {
        
      });
      
    }

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
                                {
                               (dados.image == "")?
                                    <Image style={styles.imag_menu} source={require('../../assets/imag_test.png')} />
                                :
                                    <Image style={styles.imag_menu} source={{uri: `${dados.image}`}} />
                                }
                                <Text style={styles.img_texto}>{dados.name}</Text> 
                            </View>
                            
                            <View style={styles.linha_menu}></View>

                            <View style={styles.menu_navigator}>
                                <TouchableOpacity onPress={()=> {
                                    navigation.navigate("Editarperfil")
                                    showSidebar()}}>
                                <Text style={styles.label_navigator}>
                                       <Icon2 style={styles.label_navigator} name='edit'/> Editar Perfil</Text>
                                </TouchableOpacity>

                                    {
                                        (dados.id != empresa)?
                                        <>
                                            <TouchableOpacity onPress={()=>{
                                                navigation.navigate("EditarEmpresa")
                                                showSidebar()
                                            }}>
                                                <Text style={styles.label_navigator}>
                                                <Icon2 style={styles.label_navigator} name='edit'/> Editar Empresa</Text>
                                             </TouchableOpacity>
                                        </>
                                        :
                                        <>
                                            <TouchableOpacity onPress={()=>{ 
                                            navigation.navigate("CadastrarEmpresa")
                                            showSidebar()}}>
                                                <Text style={styles.label_navigator}>
                                                <Icon2 style={styles.label_navigator} name='id-card-o' /> Cadastrar Empresa</Text>
                                            </TouchableOpacity>
                                        </>
                                    }


                            </View>
                            
                            <View>
                                
                            <TouchableOpacity onPress={exit}>
                                    <Text style={styles.label_Sair_navigator}>
                                    <Icon style={styles.label_Sair_navigator} name="logout" /> Sair</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
           
                        
        }
    </View>
  );
}