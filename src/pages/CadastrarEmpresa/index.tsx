import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import {ScrollView, View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { firebaseConfig } from '../../../back-end/firebase-config';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Inputs, InputsMask } from '../../components/Input';
import { propsStack } from '../../Models';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles';

export function CadastrarEmpresa() {

  const [nomeEmpresa,setNomeEmpresa] = useState("");
  const [cpf_cnpj,setCpf_cnpj] = useState("");
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

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const navigation = useNavigation<propsStack>();
  const storage = getStorage ();
  
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

  const handleCreateAccont = async () =>{
          if (nomeEmpresa==="" && cpf_cnpj==="" && whatsapp==="" && celular==="" && cep==="" && rua==="" && bairro==="" && cidade ==="" && uf ==="" && servicos==="") {
            Alert.alert ("Complete os campos em branco.");
         }
          else{
          try {
            const docRef = await addDoc(collection(db, "createUserCnpj"), {
              nomeEmpresa: nomeEmpresa,
              cpf_cnpj: cpf_cnpj,
              whatsapp: whatsapp,
              celular: celular,
              cep: cep,
              rua: rua,
              bairro: bairro,
              cidade : cidade,
              uf : uf,
              servicos : servicos,
              imagemCnpj : imgUrl
              
          });
          
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          }
      }


  return (
    <Background>
    <ScrollView>
        <Header />
        <View>
          <View style={styles.container}>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          {/* <Image style={styles.imagem} source={require('../../assets/imag_test.png')} /> */}
          <TouchableOpacity  
            onPress={pickImage} 
            style={styles.btn_cadastrar}>
            <Text style={styles.label_btn}>adicione uma foto</Text>
          </TouchableOpacity>

          <Text style={styles.label_input}>Nome da empresa:</Text>
          <Inputs titloInput='Empresa'
          onChangeText={(text)=> setNomeEmpresa(text)}/>  

          <Text style={styles.label_input}>CNPJ ou CPF:</Text>
          <InputsMask titloInputMask='10210310525' type={'cnpj'} value={cpf_cnpj}
          onChangeText={(text)=> setCpf_cnpj(text)}/>   

          <Text style={styles.label_input}>Whatsapp:</Text>
          <InputsMask titloInputMask='88925232356' type="cel-phone" value={whatsapp}
          onChangeText={(text)=> setWhatsapp(text)}/>   

          <Text style={styles.label_input}>Celular:</Text>
          <InputsMask titloInputMask='88925232356' type={'cel-phone'} value={celular}
          onChangeText={(text)=> setCelular(text)}/>  

          <Text style={styles.label_input}>CEP:</Text>
          <Inputs titloInput='Cep da empresa'
          onChangeText={(text)=> setCep(text)}/>  
          
          
          <Text style={styles.label_input}>Rua:</Text>
          <Inputs titloInput='Endereço da empresa'
          onChangeText={(text)=> setRua(text)}/>  

          <Text style={styles.label_input}>Bairro:</Text>
          <Inputs titloInput='Endereço da empresa'
          onChangeText={(text)=> setBairro(text)}/>  

          <Text style={styles.label_input}>Cidade:</Text>
          <Inputs titloInput='Endereço da empresa'
          onChangeText={(text)=> setCidade(text)}/>  

          <Text style={styles.label_input}>UF:</Text>
          <Inputs titloInput='Endereço da empresa'
          onChangeText={(text)=> setUf(text)}/>  

          <Text style={styles.label_input}>Serviços:</Text>
          <TextInput style={styles.input_servicos}
          placeholder="Liste seus serviços"
          multiline={true}
          numberOfLines={10}  
          onChangeText={(text)=> setServicos(text)}        
          />  

      <View style={styles.btn}>
      <TouchableOpacity  
        onPress={handleCreateAccont} 
        style={styles.btn_cadastrar}>
        <Text style={styles.label_btn}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity  
        onPress={()=> navigation.goBack()} 
        style={styles.btn_cancelar}>
        <Text style={styles.label_btn}>Cancelar</Text>
      </TouchableOpacity>
      </View>
      
      </View>  

          
      </View>
    </ScrollView>
    </Background>

  );
}