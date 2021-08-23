import React, { forwardRef } from 'react'
import { TextInputProps } from 'react-native'

import * as S from './style'

interface ITextInputProps extends TextInputProps {
  value: string
  placeholder?: string
}

export const MoneyInput = forwardRef(
  ({ value, placeholder, ...props }: ITextInputProps, ref): JSX.Element => {
    return (
      <S.InputContainer>
        <S.Input
          ref={ref}
          type={'money'}
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: '',
          }}
          placeholder={placeholder}
          value={value}
          maxLength={14}
          {...props}
        />
      </S.InputContainer>
    )
  },
)
