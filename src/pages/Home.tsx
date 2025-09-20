import React from 'react'
import { useTheme } from '../shared/contexts/ThemeContext'
import { useI18n } from '../shared/contexts/I18nContext'
import { useDocumentTitle } from '@/shared/hooks/useDocumentTitle'
import { assets } from '../assets/index'
import { trackLinkClick } from '@/features/ga'

const HomePage = () => {
  const { theme } = useTheme()
  const { t } = useI18n()
  useDocumentTitle('home')

  // Função para lidar com cliques nos links
  const handleLinkClick = (title: string, url: string) => {
    trackLinkClick(title, url)
  }

  const socialLinks = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      href: 'https://www.youtube.com/channel/UCw1OmBxX3P-xY_GGkmslJ9g',
      label: 'YouTube'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      href: 'mailto:darkning.arts@gmail.com',
      label: 'Email'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      href: 'https://www.instagram.com/darkning.art/',
      label: 'Instagram'
    }
  ]

  const linkButtons = [
    {
      title: t.linktree?.redbubble || 'Clothing & Stickers (Redbubble)',
      href: 'http://GoodDark.redbubble.com'
    },
    {
      title: t.linktree?.colab55 || 'Arte no Brasil (Colab55)',
      href: 'https://www.colab55.com/@darkning'
    },
    {
      title: t.linktree?.inprnt || 'Art Prints (INPRNT)',
      href: 'https://www.inprnt.com/gallery/darkning/'
    },
    {
      title: t.linktree?.displate || 'Exclusive Posters (Displate)',
      href: 'https://displate.com/Darkning?art=683cd403062f7'
    },
    {
      title: t.linktree?.behance || 'Behance',
      href: 'https://www.behance.net/darkning'
    },
    {
      title: t.linktree?.portfolio || 'My Portfolio',
      href: 'https://dark.art.br'
    },
    {
      title: t.linktree?.donate || 'Support My Work ☕',
      href: 'https://ko-fi.com/darkning'
    }
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-primary-dark' : 'bg-primary-white'
      }`}
    >
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Profile Section */}
        <div className="text-center mb-12">
          {/* Profile Image */}
          <div className="relative mx-auto w-24 h-24 mb-6">
            <img
              src={assets.logo}
              alt="Profile"
              className="w-full h-full rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>

          {/* Username */}
          <h1
            className={`text-2xl font-semibold mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            @DARK
          </h1>

          {/* Bio */}
          <p
            className={`text-base leading-relaxed max-w-md mx-auto mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {t.linktree?.bio || 'Dark Illustrator & Digital Artist'}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(social.label, social.href)}
                className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link Buttons - Estilo da PrintsPage */}
        <div className="space-y-4">
          {linkButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLinkClick(button.title, button.href)}
              className={`block w-full p-4 mb-4 rounded-full text-center font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                theme === 'dark'
                  ? 'bg-black text-white border-2 border-white hover:bg-white hover:text-black'
                  : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white'
              }`}
            >
              {button.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
