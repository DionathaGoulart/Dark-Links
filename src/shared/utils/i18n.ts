// ================================
// Internal Imports
// ================================
import { Language } from '@types'

// ================================
// Constants
// ================================

/**
 * Idiomas suportados pela aplicação
 */
export const SUPPORTED_LANGUAGES: Language[] = ['pt', 'en']

/**
 * Nomes dos idiomas para exibição
 */
export const LANGUAGE_NAMES = {
  pt: 'Português',
  en: 'English'
} as const

// ================================
// Helper Functions
// ================================

/**
 * Detecta o idioma a partir do caminho da URL
 * @param pathname - Caminho da URL
 * @returns Idioma detectado ou null se não encontrado
 */
export const detectLanguageFromPath = (pathname: string): Language | null => {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]

  if (firstSegment && SUPPORTED_LANGUAGES.includes(firstSegment as Language)) {
    return firstSegment as Language
  }

  return null
}

/**
 * Obtém o idioma do navegador
 * @returns Idioma do navegador ou inglês como padrão
 */
export const getBrowserLanguage = (): Language => {
  if (typeof navigator === 'undefined') return 'en'

  const browserLang = navigator.language.toLowerCase()

  // Português brasileiro ou português em geral
  if (browserLang.startsWith('pt')) {
    return 'pt'
  }

  // Default para inglês
  return 'en'
}

/**
 * Formata o nome do idioma para exibição
 * @param language - Código do idioma
 * @returns Nome formatado do idioma
 */
export const formatLanguageDisplay = (language: Language): string => {
  return LANGUAGE_NAMES[language] || language.toUpperCase()
}
