import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, DocumentData, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { firebaseConfig } from '../../../back-end/firebase-config';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Inputs, InputsMask } from '../../components/Input';
import * as ImagePicker from 'expo-image-picker';


import { styles } from './styles';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { propsStack } from '../../Models';

export function EditarEmpresa() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  const storage = getStorage ();
  const navigation = useNavigation<propsStack>();
  
  

  const [whatsapp,setWhatsapp] = useState("");
  const [celular,setCelular] = useState("");
  const [cep,setCep] = useState("");
  const [rua,setRua] = useState("");
  const [bairro,setBairro] = useState("");
  const [cidade,setCidade] = useState("");
  const [uf,setUf] = useState("");
  const [servicos,setServicos] = useState("");
  const [image, setImage] = useState (null);
  const [imgUrl, setImgUrl] = useState ("");
  const [dados,setDados]= useState<DocumentData> ([]);
  

  useEffect (()=>{

    onAuthStateChanged(auth, async (user) => {

        if (user) {
            
            const  uid =  user.uid;
            const docRef = doc(db, "createUserCnpj", uid);
            const docSnap = await getDoc(docRef);
            
            
            
                    if (docSnap.exists()) {
                        //setar dados do usuario
                        setDados (docSnap.data())
                        // setBairro (dados.bairro);
                        // setRua(dados.rua);
                        // setCelular(dados.celular);
                        // setServicos(dados.servicos);
                        // setCidade(dados.cidade);
                        // setUf(dados.uf);
                        // setWhatsapp(dados.whatsapp);
                        // setCep(dados.cep);
                        
                       
                       
                    } else {
                        // n??o existe dado
                        console.log("N??o existe documento!");
                    }
                
            } else {
            console.log ('error')
        }

    });

   // ,setBairro,setRua,setCelular,setServicos,setCidade,setUf,setWhatsapp,setCep

},[dados])

      




  const pickImage = async () => {
   
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      
    });

    console.log(result);
    setImage (result.uri);

    if (!result.cancelled) {

      console.log("Filename", result.uri);

      let test = result.uri;

      let palavraDividida =  test.split("/");

      console.log("palavraDividida", palavraDividida[palavraDividida.length - 1])
      let ultimoElemento = palavraDividida[palavraDividida.length - 1] ;
      
      const Ref = ref(storage, "imgPerfilEmpresa/" + ultimoElemento );
      // + result.fileName
      var img = await fetch(result.uri);
      const bytes = await img.blob();
      await uploadBytes(Ref, bytes);
     
      await getDownloadURL(ref(storage, "imgPerfilEmpresa/" + ultimoElemento)).then((x)=>{
        setImgUrl (x)
      });

     
    }
  };


      

      
    
      
  const updateCollectionCnpj =async () => {

        
    // Alert.alert (
    //   "Editar Empresa",
    //   "Tem certeza que deseja editar empresa?", [
    //     {
    //       text: 'Cancelar',
    //       style: 'cancel'
    //     },
    //     {
    //       text: 'Editar',
    //       onPress: () => Alert.alert("Empresa editada com sucesso"),
    //     }
    //   ],
    //   {cancelable: false}            
    // );

    
      onAuthStateChanged(auth, async (user) => {
              
        if (user) {
            const  uid =  user.uid;
            const docRef = doc(db, "createUserCnpj", uid);

         
            try{
                await updateDoc(docRef, {
                'whatsapp': whatsapp,
                "celular": celular,
                "cep": cep,
                "rua": rua,
                "bairro": bairro,
                "cidade" : cidade,
                "uf" : uf,
                "servicos" : servicos,
               "imagemCnpj" : imgUrl
              
            });
            Alert.alert ("edi????o feita com sucesso");
            navigation.navigate("Home");

            }catch(e){
              console.error("Error adding document: ", e);
            }
            
            
          } else {
            console.log ('error')
        }
        


    });

    
      
  }
  

  return (
    <Background>
      <ScrollView>
      <Header title='Editar Empresa' icone_imag />
     
        <View style={styles.container}>
        
          {
          image ? <Image style={styles.imagem} source={{ uri: image }} />
          :
          <TouchableOpacity  
          onPress={pickImage}>
          <Image style={styles.imagem} source={{ uri: dados.imagemCnpj }} />
          <Text style={styles.label_editar}>Editar foto</Text>
          </TouchableOpacity>
          }
          
          
          <View style={styles.container_dados}>

            <Text style={styles.label_input}>Whatsapp:</Text>
            <InputsMask titloInputMask='informe seu Whatsapp' 
            type='cel-phone'
            onChangeText={(text)=> setWhatsapp(text)}/>

            <Text style={styles.label_input}>Celular:</Text>
            <InputsMask titloInputMask='informe seu celular'
             type='cel-phone'
            onChangeText={(text)=> setCelular(text)}/>

            <Text style={styles.label_input}>CEP:</Text>
            <InputsMask titloInputMask='Cep da empresa' 
            type='zip-code'
            onChangeText={(text)=> setCep(text)}/>  

            <Text style={styles.label_input}>Rua:</Text>
            <Inputs titloInput='Endere??o da empresa'
            
            onChangeText={(text)=> setRua(text)}/>  

            <Text style={styles.label_input}>Bairro:</Text>
            <Inputs titloInput='Endere??o da empresa'
           
            onChangeText={(text)=> setBairro(text)} />  

            <Text style={styles.label_input}>Cidade:</Text>
            <Inputs titloInput='Endere??o da empresa'
            
            onChangeText={(text)=> setCidade(text)} />  

            <Text style={styles.label_input}>UF:</Text>
            <Inputs titloInput='Endere??o da empresa' maxLength={2}
            
            onChangeText={(text)=> setUf(text)} />  

            <Text style={styles.label_input}>Servi??os:</Text>
            <TextInput
            style={styles.input_servicos}
            placeholder="Liste seus servi??os"
            multiline={true}
            numberOfLines={10}   
            
            onChangeText={(text)=> setServicos(text)}       
            />  

          <View style={styles.btn}>

            <TouchableOpacity  
            onPress={()=> navigation.goBack()}
            style={styles.btn_cancelar}>
            <Text style={styles.label_btn}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={updateCollectionCnpj} 
            style={styles.btn_salvar}>
            <Text style={styles.label_btn}>Salvar</Text>
            </TouchableOpacity>
          </View>

          </View>
          
        </View>
      
      </ScrollView>
    </Background>
  );
}