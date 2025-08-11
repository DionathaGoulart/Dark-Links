import React from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { LanguageSwitch } from '../ui/LanguageSwitch'
import { HeaderConfig } from './types'

export const LayoutHeader: React.FC<HeaderConfig> = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-transparent z-30">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-end h-16 sm:h-20">
          {/* Theme Toggle e Language Switch no canto direito */}
          <div className="flex items-center space-x-3">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
