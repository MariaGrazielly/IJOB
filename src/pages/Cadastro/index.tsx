import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Alert, Image, ScrollView } from 'react-native';
import { firebaseConfig } from '../../../back-end/firebase-config';
import { Inputs, InputsMask } from '../../components/Input';
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native';
import { propsStack } from '../../Models';
import { Header } from '../../components/Header';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { Background } from '../../components/Background';
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { text } from 'stream/consumers';

export function Cadastro() {
   
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const [image, setImage] = useState(null);
    const [imgUrl,setImgUrl] = useState ('');
    
    
    const navigation = useNavigation<propsStack>();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const storage = getStorage();
    




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
        
        const Ref = ref(storage, "imgPerfil/" + ultimoElemento );
        // + result.fileName
        var img = await fetch(result.uri);
        const bytes = await img.blob();
        await uploadBytes(Ref, bytes);
       
        await getDownloadURL(ref(storage, "imgPerfil/" + ultimoElemento)).then((x)=>{
          setImgUrl (x)
        });

       
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
             image: imgUrl
              
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
            setEmail ("")
            setSenha("")
            setCPF("")
            setConfirmaSenha("")
            setDataNascimento("")
            setImgUrl('')
            setNome('')
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
        
        {image ?
        <Image style={styles.imagem} source={{ uri: image }} />
        :
        <TouchableOpacity  
        onPress={pickImage} 
        >
        <Image style={styles.imagem} source={require('../../assets/imag_test.png')} />
        </TouchableOpacity>
        }
       


        <Text style={styles.label_input}>Nome:</Text>
        <Inputs 
        titloInput='Nome completo'
        onChangeText={(text)=> setNome(text)}
        />  

        <Text style={styles.label_input}>CPF:</Text>
        <InputsMask
        titloInputMask='123.256.525-58'
        type={'cpf'}
        value={cpf}
        onChangeText={(text)=> setCPF(text)}
        />  

        <Text style={styles.label_input}>Data de Nascimento:</Text>
        <InputsMask
        titloInputMask='10/11/1922'
        type={'datetime'}
        value={dataNascimento}
        onChangeText={(text)=> setDataNascimento(text)}
        />  
        
        <Text style={styles.label_input}>E-mail:</Text>
        <Inputs 
        value={email}
        titloInput='maria@gmail.com'
        onChangeText={(text)=> setEmail(text)}
        />

        <Text style={styles.label_input}>Senha:</Text>
        <Inputs 
        value={senha}
        titloInput='Escolha uma senha'
        onChangeText={(text)=> setSenha(text)}
        secureTextEntry
        />

        <Text style={styles.label_input}>Confirmar Senha:</Text>
        <Inputs 
        titloInput='Confirme sua Senha'
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