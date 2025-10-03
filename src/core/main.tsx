// ================================
// External Imports
// ================================
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// ================================
// Internal Imports
// ================================
import { I18nProvider } from '@core'
import App from './App'
import '@styles'

// ================================
// Application Bootstrap
// ================================

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nProvider>
  </StrictMode>
)
