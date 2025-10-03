// ================================
// External Imports
// ================================
import React, { createContext, useEffect, useState } from 'react'

// ================================
// Internal Imports
// ================================
import { Theme, ThemeContextType, ThemeProviderProps } from '@types'

// ================================
// Constants
// ================================

const STORAGE_KEY = 'theme'
const DEFAULT_THEME: Theme = 'dark'
const DARK_CLASS = 'dark'

// ================================
// Context
// ================================

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// ================================
// Helper Functions
// ================================

/**
 * Obtém o tema inicial do localStorage ou retorna o padrão
 * @returns Tema inicial
 */
const getInitialTheme = (): Theme => {
  try {
    const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme
    }
  } catch (error) {
    console.warn('Could not access localStorage for theme:', error)
  }
  return DEFAULT_THEME
}

/**
 * Aplica o tema ao documento HTML
 * @param theme - Tema a ser aplicado
 */
const applyThemeToDocument = (theme: Theme): void => {
  try {
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add(DARK_CLASS)
    } else {
      root.classList.remove(DARK_CLASS)
    }
  } catch (error) {
    console.warn('Could not apply theme to document:', error)
  }
}

/**
 * Salva o tema no localStorage
 * @param theme - Tema a ser salvo
 */
const saveThemeToStorage = (theme: Theme): void => {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch (error) {
    console.warn('Could not save theme to localStorage:', error)
  }
}

// ================================
// Provider Component
// ================================

/**
 * Provider de tema que gerencia estado e persistência do tema
 * @component
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // ================================
  // Hooks
  // ================================

  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  // ================================
  // Effects
  // ================================

  useEffect(() => {
    saveThemeToStorage(theme)
    applyThemeToDocument(theme)
  }, [theme])

  // ================================
  // Helper Functions
  // ================================

  /**
   * Alterna entre tema claro e escuro
   */
  const toggleTheme = (): void => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  // ================================
  // Context Value
  // ================================

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme
  }

  // ================================
  // Render
  // ================================

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

// ================================
// Exports
// ================================

// Export context for hooks
export { ThemeContext }
