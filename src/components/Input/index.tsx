import React from 'react';
import {TextInput, TextInputProps } from 'react-native';

interface Props extends TextInputProps{
    titlo: string;
}

import { styles } from './styles';

export function Inputs({titlo, ...rest}: Props) {
  return (
    <TextInput style={styles.container}
    placeholder={titlo}
    {...rest}
    />
  );
}