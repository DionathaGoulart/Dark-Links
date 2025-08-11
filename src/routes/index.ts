import { MainLayout } from '@shared'

import { RouteConfig, RouteGroup } from '@/core'
import HomePage from '@/pages/Home'

export const appRoutes: (RouteConfig | RouteGroup)[] = [
  {
    layout: MainLayout,
    routes: [
      {
        path: '/',
        element: HomePage
      }
    ]
  }
]
