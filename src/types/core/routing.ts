// ================================
// External Imports
// ================================
import React from 'react'

// ================================
// Routing Types
// ================================

/**
 * Configuração de rota da aplicação
 * @interface RouteConfig
 */
export interface RouteConfig {
  /** Caminho da URL da rota */
  path: string

  /** Componente React para renderizar nesta rota */
  element: React.ComponentType

  /** Título opcional para a rota (ex: para título da página ou navegação) */
  title?: string
}

/**
 * Props do componente AppRouter
 * @interface AppRouterProps
 */
export interface AppRouterProps {
  routes: RouteConfig[]
}

/**
 * Props do componente RouteRenderer
 * @interface RouteRendererProps
 */
export interface RouteRendererProps {
  route: RouteConfig
}
