import React from 'react'
import { MoneyInput } from '~/components/Input/MoneyInput'

import * as S from './style'

export const Transaction = ({ value, placeholder, onChangeText, ...props }) => {
  return (
    <S.Conatiner>
      <MoneyInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        {...props}
      />
    </S.Conatiner>
  )
}
