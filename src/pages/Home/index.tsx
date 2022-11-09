import React, { useEffect, useState } from 'react';
import { View, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { CardServico } from '../../components/CardServico';
import { Header } from '../../components/Header';
import { collection, getFirestore, onSnapshot, DocumentData } from "firebase/firestore";
import { styles } from './styles';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../../../back-end/firebase-config';
import { getAuth } from 'firebase/auth';
//https://firebase.google.com/docs/auth/web/manage-users?hl=pt-br
// recuperação de token, olhar dps

export function Home() {

  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const [dados, setDados] = useState<DocumentData[]>([]);
  const [localFiltro, setLocalFiltro] = useState <DocumentData[]>([]);
  const [setarDados,setSetarDados] = useState ('');

  useEffect (
    ()=>

    onSnapshot(collection(db,'createUserCnpj'),(snapshot)=>
    setDados(snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id})))
    
  ),[])
  
  
   const searchFilterFunction=(text: string )=>{
        if(text){
          const newData = dados.filter(dado=>{
            const itemData = dado.nomeEmpresa? dado.nomeEmpresa.toUpperCase(): ''.toUpperCase();
            const textData = text.toUpperCase();
            setSetarDados (text);
            return itemData.indexOf(textData)> -1;
          })
          setLocalFiltro(newData);
        }else {
          setLocalFiltro (dados);
        }
   }

  return (
    
    <ScrollView>
      <Header />

    <View style={styles.buttonPesquisar}>
      <TextInput 
      style={styles.inputPesquisar}
      placeholder='Pesquisar'
      onChange = {(event) =>{searchFilterFunction(event.nativeEvent.text)}
    }
      />
      
    
    </View>
    
    {setarDados ? (
    localFiltro.map((dado, idex)=>(
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
                
      )))
    :
    dados.map((dado, idex)=>(
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
                
      ))
    }


    </ScrollView>
  );
}