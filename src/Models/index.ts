import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Home: undefined
    Login?:{
        name?: string;
    }
    Cadastro?:{
        name?: string;
    }
    RedefinirSenha: undefined;
    EditarEmpresa: undefined;
    Editarperfil: undefined;
    CadastrarEmpresa: undefined;
    Search: undefined
    
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>