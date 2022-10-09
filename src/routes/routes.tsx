import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';
import { propsNavigationStack } from '../Models';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();

export function TORoutes(){
    return (
        <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Screen name="Login" component={Login} />
                <Screen name="Home" component={Home} />
                <Screen name="Cadastro" component={Cadastro} />
        </Navigator>
    )
}