import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'

import { Pages } from './pages'
import { theme } from './styles/theme'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ backgroundColor: theme.colors.background }} />
      <Pages />
    </ThemeProvider>
  )
}
