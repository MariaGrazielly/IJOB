import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
  },
  title:{
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  btn:{
  width: '100%', 
  height: 50, 
  marginBottom: 10,
  borderRadius: 4,
  backgroundColor: '#007EF3',
  justifyContent: 'center',
  },

  btn_entrar:{
    textAlign: "center",
    fontSize: 20,
    color: '#fff'
  },

  title_btn:{
    fontSize: 17,
  }, 

  container_btn:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    padding: 4,
  },
  linha:{
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
  },
  linha_1:{
    width: "45%",
    borderTopWidth: 1,

  },
  linha_2:{
    width: "45%",
    borderTopWidth: 1,
  },
  login_google:{
    marginTop: 50,
    backgroundColor: "white",
  },
  texto_google:{
    fontSize: 30,
    color: 'blue',
    padding: 4,
  }
});