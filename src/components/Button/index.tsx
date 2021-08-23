import React from 'react'
import { TextStyle, ViewStyle } from 'react-native'

import * as S from './style'

export interface IText {
  color?: string
  positive?: boolean
  negative: boolean
}

export interface IButtonProps {
  text?: string
  onPress: () => void
  color?: boolean
  uppercase?: boolean
  positive?: boolean
  negative?: boolean
  disabled?: boolean
  margin?: boolean
  style?: ViewStyle
  customTextStyle?: TextStyle
  customStyle?: ViewStyle
}

export const Button = ({
  text,
  onPress,
  customStyle,
  customTextStyle,
  color,
  margin,
  uppercase,
  positive = false,
  negative = false,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <S.Container
      style={[{ margin: margin ? 13 : 0 }, customStyle]}
      color={color}
      onPress={onPress}
      positive={positive}
      negative={negative}
      {...props}>
      <S.ButtonText color={color} uppercase={uppercase} style={customTextStyle}>
        {text}
      </S.ButtonText>
    </S.Container>
  )
}
