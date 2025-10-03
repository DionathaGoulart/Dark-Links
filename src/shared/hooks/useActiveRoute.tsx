// ================================
// External Imports
// ================================
import { useLocation } from 'react-router-dom'

// ================================
// Internal Imports
// ================================
import { UseActiveRouteReturn } from '@types'

// ================================
// Hook
// ================================

/**
 * Hook personalizado para detectar rota ativa com React Router
 * @returns Objeto com caminho atual e função para verificar rota ativa
 */
export const useActiveRoute = (): UseActiveRouteReturn => {
  // ================================
  // Hooks
  // ================================

  const location = useLocation()

  // ================================
  // Helper Functions
  // ================================

  /**
   * Verifica se uma rota está ativa
   * @param href - URL da rota a ser verificada
   * @returns True se a rota estiver ativa
   */
  const isActive = (href: string): boolean => {
    const currentPath = location.pathname

    // Rota home precisa ser exata
    if (href === '/') {
      return currentPath === '/'
    }

    // Outras rotas podem usar startsWith para sub-rotas
    return currentPath === href || currentPath.startsWith(href + '/')
  }

  // ================================
  // Return
  // ================================

  return {
    currentPath: location.pathname,
    isActive
  }
}
