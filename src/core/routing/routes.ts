// ================================
// External and Internal Imports
// ================================

import { HomePage } from '@pages'
import { RouteConfig } from '@types'

// ================================
// Route Configuration
// ================================

/**
 * Application routes configuration
 * Defines all available routes and their corresponding page components
 */
export const appRoutes: RouteConfig[] = [
  // Main navigation routes
  {
    path: '/',
    element: HomePage
  }
]
