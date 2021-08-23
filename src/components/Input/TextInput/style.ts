import styled from 'styled-components/native'

import { TextInputMask } from 'react-native-masked-text'
import { theme } from '~/styles/theme'

export const Input = styled(TextInputMask).attrs(() => ({
  underlineAndroidColor: 'transparent',
}))`
  padding: 0 20px;
  font-size: 13px;
  background-color: ${theme.colors.grayStrong};
`
