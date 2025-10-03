// ================================
// External Imports
// ================================
import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

// ================================
// Internal Imports
// ================================
import { AppRouterProps, RouteRendererProps } from '@types'

// ================================
// Helper Components
// ================================

/**
 * Componente que renderiza rotas individuais e define título do documento
 * @component
 */
const RouteRenderer: React.FC<RouteRendererProps> = ({ route }) => {
  const { element: Element, title } = route

  // ================================
  // Effects
  // ================================

  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [title])

  // ================================
  // Render
  // ================================

  return <Element />
}

// ================================
// Main Component
// ================================

/**
 * Componente de roteamento principal que gerencia navegação da aplicação
 * com scroll automático para o topo e definição dinâmica de título
 * @component
 */
export const AppRouter: React.FC<AppRouterProps> = ({ routes }) => {
  // ================================
  // Hooks
  // ================================

  const location = useLocation()

  // ================================
  // Effects
  // ================================

  useEffect(() => {
    // Scroll para o topo quando a rota mudar
    window.scrollTo(0, 0)
  }, [location.pathname])

  // ================================
  // Helper Functions
  // ================================

  const renderRoutes = () =>
    routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={<RouteRenderer route={route} />}
      />
    ))

  const renderFallbackRoute = () => (
    <Route path="*" element={<Navigate to="/" replace />} />
  )

  // ================================
  // Render
  // ================================

  return (
    <Routes>
      {renderRoutes()}
      {renderFallbackRoute()}
    </Routes>
  )
}
