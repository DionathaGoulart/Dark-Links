// ================================
// External Imports
// ================================
import React from 'react'

// ================================
// Internal Imports
// ================================
import { NavItem } from './component'

// ================================
// Layout Types
// ================================

/**
 * Props base para componentes de layout
 * @interface LayoutProps
 */
export interface LayoutProps {
  children: React.ReactNode
}

/**
 * Configuração do cabeçalho
 * @interface HeaderConfig
 */
export interface HeaderConfig {
  logoSrc?: string
  logoAlt?: string
  showNavigation?: boolean
  customNav?: NavItem[]
  instagramUrl?: string
  youtubeUrl?: string
}

/**
 * Configuração do rodapé
 * @interface FooterConfig
 */
export interface FooterConfig {
  show?: boolean
  content?: React.ReactNode
}

/**
 * Props do layout principal
 * @interface MainLayoutProps
 */
export interface MainLayoutProps {
  children: React.ReactNode
  header?: {
    showNavigation?: boolean
    logoSrc?: string
    logoAlt?: string
    instagramUrl?: string
    youtubeUrl?: string
  }
  footer?: {
    show?: boolean
  }
  className?: string
}
