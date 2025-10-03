// ================================
// External Imports
// ================================
import React, { createContext, useState } from 'react'

// ================================
// Internal Imports
// ================================
import { enTranslations, ptTranslations } from '@shared'
import { Language, I18nContextType, I18nProviderProps } from '@types'

// ================================
// Constants
// ================================

const STORAGE_KEY = 'app-language'
const DEFAULT_LANGUAGE: Language = 'en'

const translations = {
  pt: ptTranslations,
  en: enTranslations
}

// ================================
// Context
// ================================

const I18nContext = createContext<I18nContextType | undefined>(undefined)

// ================================
// Helper Functions
// ================================

/**
 * Detecta o idioma do navegador
 * @returns Idioma detectado
 */
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase()

  if (browserLang.startsWith('pt')) {
    return 'pt'
  }

  return DEFAULT_LANGUAGE
}

/**
 * Obtém o idioma inicial do localStorage ou detecta do navegador
 * @returns Idioma inicial
 */
const getInitialLanguage = (): Language => {
  try {
    const savedLanguage = localStorage.getItem(STORAGE_KEY)
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      return savedLanguage as Language
    }
  } catch (error) {
    console.warn('Could not access localStorage for language:', error)
  }

  return detectBrowserLanguage()
}

/**
 * Salva o idioma no localStorage
 * @param language - Idioma a ser salvo
 */
const saveLanguageToStorage = (language: Language): void => {
  try {
    localStorage.setItem(STORAGE_KEY, language)
  } catch (error) {
    console.warn('Could not save language to localStorage:', error)
  }
}

// ================================
// Provider Component
// ================================

/**
 * Provider de internacionalização que gerencia estado de idioma e traduções
 * @component
 */
export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  // ================================
  // Hooks
  // ================================

  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  // ================================
  // Helper Functions
  // ================================

  /**
   * Define o novo idioma e salva no localStorage
   * @param newLanguage - Novo idioma
   */
  const setLanguage = (newLanguage: Language): void => {
    setLanguageState(newLanguage)
    saveLanguageToStorage(newLanguage)
  }

  // ================================
  // Context Value
  // ================================

  const contextValue: I18nContextType = {
    language,
    translations: translations[language],
    setLanguage,
    t: translations[language]
  }

  // ================================
  // Render
  // ================================

  return (
    <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
  )
}

// ================================
// Exports
// ================================

// Export context for hooks
export { I18nContext }
