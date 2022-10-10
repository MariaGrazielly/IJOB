import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 100,
        marginBottom: 100,
    },
    imagem:{
        width: "40%",
        height: "25%",
        marginBottom: 20,
        borderRadius: 8,
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