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

  const [localFiltro, setLocalFiltro] = useState("");
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
      onChangeText = {setLocalFiltro}
      />

    <TouchableOpacity style={styles.buttonIconPesquisar}>
     <Icon style={styles.iconPesquisar} name="magnifier" />
     </TouchableOpacity>
    </View>

    {dados.filter((dado)=>{
      if(localFiltro == ""){
        return dado
      }else if(dado.nomeEmpresa.toLowerCase().includes(localFiltro.toLowerCase()) || dado.cidade.toLowerCase().includes(localFiltro.toLowerCase())){
        return dado
      }
    }).map((dado, idex)=>(
      <CardServico
      key={idex}
      name_empresa={dado.nomeEmpresa? dado.nomeEmpresa: "Sem Nome"}
      cidade={dado.cidade? dado.cidade: "Sem Nome"}
      estado={dado.uf? dado.uf: "Sem nome"}
      rua={dado.rua? dado.rua: "Sem nome"}
      bairro={dado.bairro? dado.bairro: "Sem nome"}
      cep={dado.cep? dado.cep: "Sem nome"}
      whatsapp={dado.whatsapp? dado.whatsapp: "Sem nome"}
      servicos={dado.servicos? dado.servicos: "Sem nome"}
      imagem={dado.imagemCnpj}
      />
                
      ))}


    </ScrollView>
  );
}