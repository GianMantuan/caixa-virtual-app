import styled from 'styled-components/native'
import { Animated } from 'react-native'
import { IButtonProps, IText } from '.'
import { Text } from '../Text'

const defineColorText = (
  theme?: any,
  color?: boolean,
  positive?: boolean,
  negative?: boolean,
): string => {
  if (positive) return theme.colors.positive
  if (negative) return theme.colors.negative
  if (color) return theme.colors.background

  return theme.colors.white
}

const defineColorButton = (
  theme?: any,
  color?: boolean,
  positive?: boolean,
  negative?: boolean,
): string => {
  if (positive) return theme.colors.positive
  if (negative) return theme.colors.negative
  if (color) return theme.colors.white

  return 'transparent'
}

export const Container = styled.TouchableOpacity<IButtonProps>`
  justify-content: center;
  align-items: center;
  border-color: #fff;
  border-radius: 50px;
  height: 48px;
  padding: 0 15px;
  background-color: ${({ theme, color, positive, negative }) =>
    defineColorButton(theme, !!color, !!positive, !!negative)};
  margin-bottom: ${(props) => (props.marginBottom ? 10 : 0)};
  border-width: 1px;
  flex-direction: row;
`

export const ButtonText = styled(Text)<IText>`
  color: ${({ theme, color, positive, negative }) =>
    defineColorText(theme, !!color, !!positive, !!negative)};
  font-size: ${({ theme }) => theme.button.fontSize};
  font-weight: ${({ theme }) => theme.button.fontWeight};
  text-align: center;
`
