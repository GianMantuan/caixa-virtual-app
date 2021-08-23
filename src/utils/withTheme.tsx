import React from 'react'
import styled, { DefaultTheme, ThemeProvider } from 'styled-components/native'

import { themes } from '../styles'

const Background = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  flex: 1;
`

export const AppHoc = ({ children }) => {
  const _theme: DefaultTheme = themes

  return (
    <ThemeProvider theme={_theme}>
      <Background>{children}</Background>
    </ThemeProvider>
  )
}

export const withTheme = (fn: any) => <AppHoc>{fn()}</AppHoc>
