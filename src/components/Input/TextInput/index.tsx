import React from 'react'
import { TextInputProps } from 'react-native'
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text'

import * as S from './style'

interface ITextInputProps extends TextInputProps {
  value: string
  type: TextInputMaskTypeProp
  options?: TextInputMaskOptionProp
  placeholder?: string
}

export const TextInput = ({
  type = 'custom',
  options,
  value,
  placeholder,
  ...props
}: ITextInputProps): JSX.Element => {
  return (
    <S.Input
      type={type}
      options={options}
      placeholder={placeholder}
      value={value}
      {...props}
    />
  )
}
