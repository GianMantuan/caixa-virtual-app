import styled from 'styled-components/native'

import { TextInput } from '~/components/Input'
import { Text } from '~/components/Text'

import { theme } from '~/styles/theme'

export const IntroContainer = styled.View`
  flex-direction: column;
  align-items: center;
`

export const InputContainer = styled.View`
  width: 100%;
`

export const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const InputSignin = styled(TextInput)`
  height: 40px;
  padding: 8px;
  margin: 5px 0;
  border-radius: 8px;
  background-color: rgba(170, 170, 170, 0.4);
  color: #000;
  font-weight: bold;
`

export const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`
