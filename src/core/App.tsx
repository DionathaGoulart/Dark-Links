// ================================
// External Imports
// ================================
import React, { useEffect } from 'react'

// ================================
// Internal Imports
// ================================
import { AppRouter, appRoutes, ThemeProvider } from '@core'
import { MainLayout } from '@shared'
import { initializeAnalytics } from '@features/ga'

// ================================
// Main Component
// ================================

/**
 * Componente principal da aplicação que inicializa analytics e fornece contexto de tema
 * @component
 */
const App: React.FC = () => {
  // ================================
  // Effects
  // ================================

  useEffect(() => {
    initializeAnalytics()
  }, [])

  // ================================
  // Render
  // ================================

  return (
    <ThemeProvider>
      <MainLayout>
        <AppRouter routes={appRoutes} />
      </MainLayout>
    </ThemeProvider>
  )
}

// ================================
// Exports
// ================================
export default App
