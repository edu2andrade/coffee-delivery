import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globals'
import { defaultTheme } from '../src/styles/themes/default'

import { HomePage } from './pages/home'
import { Header } from './components/header'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <HomePage />
      <GlobalStyle />
    </ThemeProvider>
  )
}
