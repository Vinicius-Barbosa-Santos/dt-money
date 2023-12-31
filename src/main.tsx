import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { Global } from './styles/global'
import { TransactionProvider } from './context/TransactionsContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <Home />
      </TransactionProvider>
      <Global />
    </ThemeProvider>
  </React.StrictMode>,
)
