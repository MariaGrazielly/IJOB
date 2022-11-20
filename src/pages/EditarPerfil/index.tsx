import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Text, Alert } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { firebaseConfig } from '../../../back-end/firebase-config';
import { initializeApp } from 'firebase/app';
import { doc, DocumentData, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { propsStack } from '../../Models';

export function EditarPerfil() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage ();
  const auth = getAuth();
  const navigation = useNavigation<propsStack>();
  
  const [image, setImage] = useState (null);
  const [imgUrl, setImgUrl] = useState ("");
  const [dados,setDados]= useState<DocumentData> ([]);
  const [email, setEmail] = useState<string|null>('');

  useEffect (()=>{

    onAuthStateChanged(auth, async (user) => {

        if (user) {
            //recuperar id
            const  uid =  user.uid;
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);
            setEmail (user.email);
            
            
            
            
                    if (docSnap.exists()) {
                        //setar dados do usuario
                        setDados (docSnap.data())
                        
                       
                    } else {
                        // não existe dado
                        console.log("Não existe documento!");
                    }
                
            } else {
            console.log ('error')
        }

    });

   

},[setDados])


  
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

  const updateCollectionUser = async () => {

    
    onAuthStateChanged(auth, async (user) => {
            
      if (user) {
          const  uid =  user.uid;
          const docRef = doc(db, "users", uid);
          

          try{
              await updateDoc(docRef, {
              'image': imgUrl
            
          });
          
          Alert.alert (
            "Editar Perfil",
            "Tem certeza que deseja editar Perfil?", [
              {
                text: 'Cancelar',
                style: 'cancel'
              },
              {
                text: 'Editar',
                onPress: () => Alert.alert("Perfil editado com sucesso"),
              }
            ],
            {cancelable: false}       
                 
          );
          

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
      <Header title='Editar Perfil' icone_imag />
        <View style={styles.container}>

        {
          image ? <Image style={styles.imagem} source={{ uri: image }} />
          :
          <TouchableOpacity  
          onPress={pickImage}>
          <Image style={styles.imagem} source={{ uri: dados.image }} />
          </TouchableOpacity>
          }

          <View style={styles.info}>
          <View style={styles.info_texto}>
            <Text style={styles.info_label}>Nome:</Text>
            <Text style={styles.info_conteudo}>{dados.name}</Text>
          </View>
          <View style={styles.info_texto}>
            <Text style={styles.info_label}>Email:</Text>
            <Text style={styles.info_conteudo}>{email}</Text>
          </View>
        </View> 
        <TouchableOpacity  
            onPress={()=> navigation.goBack()}
            style={styles.btn_cancelar}>
            <Text style={styles.label_btn}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={updateCollectionUser} 
            style={styles.btn_salvar}>
            <Text style={styles.label_btn}>Salvar</Text>
            </TouchableOpacity>
        </View> 
    </Background>
  );
}