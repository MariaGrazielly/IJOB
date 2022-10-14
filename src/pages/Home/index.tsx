import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function Home() {
  return (
    <ScrollView>
      <Header />
    </ScrollView>
  );
}