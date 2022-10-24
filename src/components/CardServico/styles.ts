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
       
    }
});