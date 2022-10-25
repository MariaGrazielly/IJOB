import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Alert, Image, ScrollView } from 'react-native';
import { firebaseConfig } from '../../../back-end/firebase-config';
import { Inputs } from '../../components/Input';
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native';
import { propsStack } from '../../Models';
import { Header } from '../../components/Header';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { Background } from '../../components/Background';
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
export function Cadastro() {
   
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const [image, setImage] = useState(null);
    
    
    const navigation = useNavigation<propsStack>();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const storage = getStorage();
    




    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        
      });
  
      console.log(result);
      setImage (result.uri);
  
      if (!result.cancelled) {
        
        const Ref = ref(storage, "imgPerfil/" );
        // + result.fileName
        var img = await fetch(result.uri);
        const bytes = await img.blob();
        await uploadBytes(Ref, bytes);
        //var url = getDownloadURL(ref(storage, 'imgPerfil/'))
      }
    };
    
    
    const handleCreateAccont = async () =>{

      if (cpf === "" && nome === "" && dataNascimento === ""){

        
        Alert.alert ("Complete os campos em branco.");
      }
      else {

        
        if (confirmaSenha === senha){
          
          try {
            const docRef = await addDoc(collection(db, "users"), {
              cpf: cpf,
              dataNascimento: dataNascimento,
              name: nome,
            // image: 
              
          });
          
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
      
        createUserWithEmailAndPassword(auth,email,senha)
        // função de criação de conta
          .then((userCredential)=>{
            Alert.alert('conta criada');
            const user = userCredential.user;
            console.log (user);
            navigation.navigate('Login');
          })
          .catch(error =>{console.log (error)
            Alert.alert(error.menssage);
          })
      }
      else {Alert.alert("Senhas não são iguais, por favor tente novamente.")}
    }}
  


    return(
      <Background>
      <ScrollView>
        <Header title='Cadastro' icone_imag />
        <View>
        <View style={styles.container}>
        
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
       
        <TouchableOpacity  
            onPress={pickImage} 
            style={styles.btn_cadastrar}>
            <Text style={styles.label_btn}>foto</Text>
            
        </TouchableOpacity>

        <Text style={styles.label_input}>Nome:</Text>
        <Inputs 
        titlo='Nome completo'
        onChangeText={(text)=> setNome(text)}
        />  

        <Text style={styles.label_input}>CPF:</Text>
        <Inputs 
        titlo='123.256.525-58'
        onChangeText={(text)=> setCPF(text)}
        />  

        <Text style={styles.label_input}>Data de Nascimento:</Text>
        <Inputs 
        titlo='10/11/1922'
        onChangeText={(text)=> setDataNascimento(text)}
        />  
        
        <Text style={styles.label_input}>E-mail:</Text>
        <Inputs 
        titlo='maria@gmail.com'
        onChangeText={(text)=> setEmail(text)}
        />

        <Text style={styles.label_input}>Senha:</Text>
        <Inputs 
        titlo='Escolha uma senha'
        onChangeText={(text)=> setSenha(text)}
        secureTextEntry
        />

        <Text style={styles.label_input}>Confirmar Senha:</Text>
        <Inputs 
        titlo='Confirme sua Senha'
        onChangeText={(text)=> setConfirmaSenha(text)}
        secureTextEntry
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