import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 18,
    },
    imagem:{
        width: "40%",
        height: "24%",
        marginBottom: 20,
        borderRadius: 8,
    },
    label_input:{
        width: '100%',
        textAlign: "left",
        fontSize: 18,
        marginBottom: 5,
    },
    btn:{
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 30,
    },
    btn_cadastrar:{
        width: '40%',
        height: 50, 
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: '#007EF3',    
        justifyContent: 'center',
    },
    btn_cancelar:{
        width: '40%',
        height: 50, 
        marginBottom: 10,
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