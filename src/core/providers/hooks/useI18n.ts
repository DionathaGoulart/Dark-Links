// ================================
// External Imports
// ================================
import { useContext } from 'react'

// ================================
// Internal Imports
// ================================
import { I18nContext } from '../I18nContext'
import { I18nContextType } from '@types'

// ================================
// Hook
// ================================

/**
 * Hook para acessar o contexto de internacionalização
 * @returns Valor do contexto de i18n
 * @throws Error se usado fora do I18nProvider
 */
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext)

  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }

  return context
}
