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

    img_empresa:{
        width: 75,
        height: 75,
        borderRadius: 50,
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
      padding: 10,
    },
    dados:{
      width: "100%",
      fontSize: 18,
      fontWeight: "500",
      backgroundColor: "rgba(100, 100, 100, 0.3)",
    },
    dadosInfo:{
      fontSize: 17,
      padding: 2,
      backgroundColor: "rgba(100, 100, 100, 0.1)",
      borderRadius: 8,
    },
    btn_modal:{
      flexDirection: "row",
      position: "absolute",
      bottom: 5,
      right: 25,
    },
    fecharModal:{
      backgroundColor: "#CDCCCC",
      marginRight: 15,
      padding: 8,
      borderRadius: 4,
    },
    verificarModal:{
      backgroundColor: "green",
      padding: 8,
      borderRadius: 4,
      
    }, 
    textoVerificado:{
      color: "#FFFFFF",
    }

});