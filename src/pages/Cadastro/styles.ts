import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container:{
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
    label_input:{
        width: '100%',
        textAlign: "left",
        fontSize: 17,
        marginBottom: 5,
    },
    btn:{
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 10,
    },
    btn_cadastrar:{
        width: '40%',
        height: 50, 
        borderRadius: 4,
        backgroundColor: '#007EF3',    
        justifyContent: 'center',
    },
    btn_cancelar:{
        width: '40%',
        height: 50, 
        borderRadius: 4,
        backgroundColor: '#D01111', 
        justifyContent: 'center',
    },
    label_btn:{
        textAlign: 'center',
        color:'#fff',
        fontSize: 20,
    }




})