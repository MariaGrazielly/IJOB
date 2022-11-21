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
  shadowColor: "#888",
  shadowOpacity: 0.7,
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
  
  // linha:{
  //   width:'100%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   padding: 4,
  // },
  // linha_1:{
  //   width: "45%",
  //   borderTopWidth: 1,

  // },
  // linha_2:{
  //   width: "45%",
  //   borderTopWidth: 1,
  // },

  // login_google:{
  //   width: "100%",
  //   marginTop: 30,
  //   alignItems: 'center',
  // },
  // label_login_google:{
  //   marginBottom: 25,
  //   fontSize: 20,
  //   fontWeight: '300',
  //   textAlign: 'center',
  // },
  // btn_google:{
  //   width: "54%",
  //   flexDirection: "row",
  //   borderRadius: 8,   
  //   justifyContent: 'center', 
  //   alignItems: 'center',
  //   backgroundColor: '#FFFFFF',
  //   shadowColor: '#888',
  //   shadowOpacity: 0.6,
  //   shadowRadius: 4,
  //   padding: 5,
  // },
  // img_google:{
  //   width: 45,
  //   height: 45,
  //   backgroundColor: "#FFFFFF",
  //   marginRight: 15,
  //   borderRadius: 20,
  // },
  // texto_google:{
  //   fontSize: 30,
  //   color: '#888',
  //   padding: 4,
  //   backgroundColor: "#fff",
  // }
});