import React, { useEffect } from 'react'
import { AppRouter, appRoutes } from '@core/router'
import { MainLayout, ThemeProvider } from '@shared'
import { initializeAnalytics } from '@/features/ga'

const App: React.FC = () => {
  useEffect(() => {
    initializeAnalytics()
  }, [])

  return (
    <ThemeProvider>
      <MainLayout>
        <AppRouter routes={appRoutes} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
