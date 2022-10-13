import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';
import { propsNavigationStack } from '../Models';
import { Button, Image } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import { RedefinirSenha } from '../pages/RedefinirSenha';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();

function LogoTitle() {
    return (
      <Image
        style={{ width: 40, height: 40 }}
        source={require('../../assets/logo.png')}
      />
    );
  }

export function TORoutes(){
    return (
        <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Screen name="Login" 
                component={Login} 
                />

                <Screen name="Home" 
                component={Home} 
                />

                <Screen name="Cadastro" component={Cadastro} />

                <Screen name="RedefinirSenha" component={RedefinirSenha} />
        </Navigator>
    )
}