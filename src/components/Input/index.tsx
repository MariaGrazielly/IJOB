import React from 'react';
import {TextInput, TextInputProps } from 'react-native';
import {TextInputMask, TextInputMaskProps} from 'react-native-masked-text'

interface Props extends TextInputProps{
    titloInput: string;
}
interface Props2 extends TextInputMaskProps{
  titloInputMask: string;
}

import { styles } from './styles';

export function Inputs({titloInput, ...rest}: Props) {
  return (
    <TextInput
    style={styles.container}
    placeholder={titloInput}
    {...rest}
    />
  );
}

export function InputsMask({titloInputMask, ...rest2}: Props2) {
  return (
    <TextInputMask
    style={styles.container}
    placeholder={titloInputMask}
    {...rest2}
    />
  );
}