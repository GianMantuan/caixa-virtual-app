import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

import { Header } from '~/components/Header'
import { Text } from '~/components/Text'

const { height } = Dimensions.get('screen')

export const HeaderLogin = styled(Header)`
  height: ${height / 2}px;
`

export const IntroContainer = styled.View`
  flex-direction: column;
  align-items: center;
`

export const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`

export const Description = styled(Text)`
  font-size: 15px;
  font-weight: 400;
  text-align: center;
`

export const Logo = styled.Image`
  position: absolute;
  resize-mode: cover;
  width: 300px;
  height: 300px;
  margin-bottom: 100px;
  align-self: center;
`
