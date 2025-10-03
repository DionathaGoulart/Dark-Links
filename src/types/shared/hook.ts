// ================================
// Hook Types
// ================================

/**
 * Tipo de retorno do hook useActiveRoute
 * @interface UseActiveRouteReturn
 */
export interface UseActiveRouteReturn {
  /** Caminho atual da rota */
  currentPath: string
  /** Função para verificar se uma rota está ativa */
  isActive: (href: string) => boolean
}
