import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
    marginBottom: 30,
  },
   imagem:{
    width: 150,
    height: 150,
    marginBottom: 80,
    borderRadius: 8,
    backgroundColor: "white",
},

label_editar:{
  fontSize: 15,
  padding: 5,
  position: "absolute",
  right: 30,
  bottom: 40,
  backgroundColor: "#007EF3",
},

info:{
  width: '100%',
  padding: 20,
},
info_texto:{
  flexDirection: 'row',
  paddingTop: 10, 
  alignItems: 'center',
},
info_label:{
  fontSize: 20,
  fontWeight: '500',
  marginRight: 15,
},
info_conteudo:{
  fontSize: 20,
},
editarUser:{
  width: '90%',
  flexDirection: 'row',
  marginTop: 80,
},
btn_salvar:{
  width: '40%',
  height: 50, 
  borderRadius: 4,
  backgroundColor: '#007EF3',    
  justifyContent: 'center',
  marginLeft: 50,
},
label_btn:{
  textAlign: 'center',
  color:'#fff',
  fontSize: 20,
},
btn_cancelar:{
  width: '40%',
  height: 50, 
  borderRadius: 4,
  backgroundColor: '#D01111',    
  justifyContent: 'center',
}
});