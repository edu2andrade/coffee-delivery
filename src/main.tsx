import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/styles/themes/default'
import { GlobalStyle } from './styles/globals'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from './app/store'

import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <ReduxProvider store={store}>
          <App />
          <GlobalStyle />
        </ReduxProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
