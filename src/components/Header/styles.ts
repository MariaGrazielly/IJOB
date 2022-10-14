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
        padding: 15,
        fontSize: 30,
        fontWeight: "600",
    },
    modal_lista:{
        width: "50%",
        minHeight: "100%",
        backgroundColor: "#CDCCCC",
        marginTop: "24%",
    },
    imagem:{
       width: "100%",
       alignItems: "center",
       marginTop: 15, 
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
        padding: 20,

    },
    label_navigator:{
        fontSize: 17,
        fontWeight: "400",
        marginBottom: 15,
        marginTop: 15,
    },
    label_Sair_navigator:{
        textAlign: "center",
        marginTop: "90%",
        fontSize: 20,
        fontWeight: "600",
    }

});