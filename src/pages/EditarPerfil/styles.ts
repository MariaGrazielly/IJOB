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
    marginBottom: 40,
    borderRadius: 8,
    backgroundColor: "white",
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
}
});