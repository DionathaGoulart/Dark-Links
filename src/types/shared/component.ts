// ================================
// Component Types
// ================================

/**
 * Item de navegação
 * @interface NavItem
 */
export interface NavItem {
  label: string
  href: string
  onClick?: () => void
}

/**
 * Props do componente Navigation
 * @interface NavigationProps
 */
export interface NavigationProps {
  items: NavItem[]
}
