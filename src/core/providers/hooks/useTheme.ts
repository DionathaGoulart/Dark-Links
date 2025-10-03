// ================================
// External Imports
// ================================
import { useContext } from 'react'

// ================================
// Internal Imports
// ================================
import { ThemeContext } from '../ThemeContext'
import { ThemeContextType } from '@types'

// ================================
// Hook
// ================================

/**
 * Hook para acessar o contexto de tema
 * @returns Valor do contexto de tema
 * @throws Error se usado fora do ThemeProvider
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
  }

  return context
}
