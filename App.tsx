import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import {useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter';
import { Home } from './src/pages/Home';
import { Loading } from './src/components/Loading';
import { Login } from './src/pages/Login';
import React from 'react';
import {Cadastro} from './src/pages/Cadastro';

export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black});

  return (
    <Background>
      <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
      />
      {fontsLoaded ? <Cadastro /> : <Loading />}

    </Background>
  );
}


