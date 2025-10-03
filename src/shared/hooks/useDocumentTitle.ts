// ================================
// External Imports
// ================================
import { useEffect } from 'react'

// ================================
// Internal Imports
// ================================
import { useI18n } from '@core'
import { PageKey } from '@types'

// ================================
// Hook
// ================================

/**
 * Hook para definir o título do documento baseado nas traduções
 * @param pageKey - Chave da página para obter o título
 */
export const useDocumentTitle = (pageKey: PageKey): void => {
  // ================================
  // Hooks
  // ================================

  const { t } = useI18n()

  // ================================
  // Effects
  // ================================

  useEffect(() => {
    const title = t.pages[pageKey].title
    document.title = `${title} - Dark`
  }, [t, pageKey])
}
