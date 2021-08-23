import styled from 'styled-components/native'
import { Animated } from 'react-native'
import { Text } from '~/components/Text'

export const Container = styled.View`
  margin: 20px;
`

export const Header = styled.View`
  margin-bottom: 30px;
`

export const BalanceContainer = styled(Animated.View)`
  margin-bottom: 30px;
`

export const TextField = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ size }) => (size ? size : '13')}px;
  letter-spacing: 1px;
`

export const Action = styled(Animated.View)`
  flex-direction: row;
  height: 100%;
`
