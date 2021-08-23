import styled from 'styled-components/native'
import { TextInputMask } from 'react-native-masked-text'

export const InputContainer = styled.View``

export const Input = styled(TextInputMask).attrs(() => ({
  underlineAndroidColor: 'transparent',
}))`
  padding: 0 20px;
  font-size: 32px;
`
