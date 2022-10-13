import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: "10%",
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

    sidebar:{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: "red",
    },
    sidebar_texto:{
        width: '50%',
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    }
});