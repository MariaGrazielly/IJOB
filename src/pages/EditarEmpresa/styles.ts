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
  container_dados:{
    width: "100%"
},
  label_input:{
    width: "100%",
    textAlign: "left",
    fontSize: 17,
    marginBottom: 5,
   },
  input_servicos:{
    backgroundColor: "white",
    justifyContent: "flex-start",
    width: "100%",
    height: 200,
    borderRadius: 4,
    fontSize: 18,
    color: 'black',
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 15,
    placeholderTextColor: "black",
    textAlignVertical: "top"
   }, 
  btn:{
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 10,
  },
  btn_salvar:{
    width: '40%',
    height: 50, 
    borderRadius: 4,
    backgroundColor: '#007EF3',    
    justifyContent: 'center',
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
  },
});