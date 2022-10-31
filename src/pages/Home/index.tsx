import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { CardServico } from '../../components/CardServico';
import { Header } from '../../components/Header';
import { doc,collection, getDocs, getFirestore, query, where, onSnapshot, DocumentData } from "firebase/firestore";
import { styles } from './styles';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../../../back-end/firebase-config';

export function Home() {

  const [text, setText] = useState("");
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [dados, setDados] = useState<DocumentData[]>([]);
  console.log (dados);
  useEffect (
    ()=>
    onSnapshot(collection(db,'createUserCnpj'),(snapshot)=>
    setDados(snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id})))
    

  ),[])
  
    

  return (
    <ScrollView>
      <Header />

    <View style={styles.buttonPesquisar}>
      <TextInput 
      style={styles.inputPesquisar}
      placeholder='Pesquisar'
      autoCorrect={false}
      value={text}
      onChangeText = {(text) => setText(text)}
      />

    <TouchableOpacity style={styles.buttonIconPesquisar}>
    
      
      
     <Icon style={styles.iconPesquisar} name="magnifier" />
     </TouchableOpacity>
    </View>
    {dados.map((dado)=>(
        
           
         <Text> {dado.nomeEmpresa}</Text>
        
      ))}

    <CardServico
    name_empresa='Borracharia'
    cidade='Juazeiro do norte'
    estado='CE'
    />
    </ScrollView>
  );
}