import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './style/GlobalStyle'
import { defaultTheme } from './style/theme'

export const LiComponentProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
