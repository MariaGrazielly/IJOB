import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 95,
        backgroundColor: "#CDCCCC",
    },
    headerIcone:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: "5%",
    },
    icone_header:{
        padding: 15,
        fontSize: 25,
        fontWeight: "600",
        marginRight: "25%",
    },
    texto_header:{
        fontSize: 20,
        fontWeight: "600",
     },
     headerImage:{
        padding: 15,
        marginTop: "5%",
        flexDirection: 'row',
        justifyContent: 'space-between',
     },
     img_header:{
        width: 50,
        height: 50,
        marginRight: "25%",
     },
     icone_header_menu:{
        padding: 15,
        fontSize: 25,
        fontWeight: "600",
    },
    
    modal:{
        flex: 1,
        alignItems: "flex-end",
        backgroundColor: "rgba(52, 51, 51, 0.5)",
    },
    icone_close_menu:{
        width: 50,
        padding: 10,
        fontSize: 30,
        fontWeight: "600",
        marginTop: 40,
    },
    modal_lista:{
        width: "50%",
        minHeight: "100%",
        backgroundColor: "#CDCCCC",
    },
    imagem:{
       width: "100%",
       alignItems: "center",
       marginTop: 40, 
    },

    imag_menu:{
        width: 80,
        height: 80,
        borderRadius: 8,
    },

    img_texto:{
        marginTop: 10,
        fontSize: 16,
        fontWeight: "500",
    },
    linha_menu:{
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        borderBottomWidth: 1,
    },
    menu_navigator:{
        paddingLeft: 15,
        paddingTop: 20,
        marginBottom: 120,
    },
    label_navigator:{
        fontSize: 17,
        fontWeight: "400",
        marginBottom: 15,
        marginTop: 15,
    },
    label_Sair_navigator:{
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
    }

});