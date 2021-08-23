import styled from 'styled-components/native'
import { Animated } from 'react-native'

import { theme } from '~/styles/theme'

export const Container = styled(Animated.View)`
  width: 100%;
  background-color: ${theme.colors.background};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`
