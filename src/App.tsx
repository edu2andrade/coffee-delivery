import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globals'
import { defaultTheme } from '../src/styles/themes/default'

import { HomePage } from './pages/home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HomePage />
      <GlobalStyle />
    </ThemeProvider>
  )
}
