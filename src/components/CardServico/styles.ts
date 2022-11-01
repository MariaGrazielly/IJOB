import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2E2E7",
    padding: 10,
    margin: 15,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container_img:{
    
  },
    img_empresa:{
        width: 75,
        height: 70,
    },

    info_empresa:{
     width: "70%",  
     flexDirection: "column", 
     padding: 5,
    },
    nomeEmpresa:{
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 10,
    },
    cidadeEmpresa:{
        fontSize: 15,
        fontWeight: "500",
       
    },

    modal:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(52, 51, 51, 0.5)",
    },
    conteudoModal:{
      width: "80%",
      height: "60%",
      borderRadius: 4,
      padding: 15,
      backgroundColor: "#fff",
    },
    infoModal:{
      padding: 13,
    },
    dados:{
      width: "100%",
    },
    fecharModal:{
      backgroundColor: "#CDCCCC",
      marginBottom: 10,
      marginRight: 15,
      padding: 12,
      position: "absolute",
      bottom: 0,
      right: 0,
      borderRadius: 4,
    },

});