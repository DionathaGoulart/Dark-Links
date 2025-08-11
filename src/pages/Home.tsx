import React from 'react'
import { useTheme } from '../shared/contexts/ThemeContext'
import { useI18n } from '../shared/contexts/I18nContext'
import { useDocumentTitle } from '@/shared/hooks/useDocumentTitle'
import { assets } from '../assets/index'

const HomePage = () => {
  const { theme } = useTheme()
  const { t } = useI18n()
  useDocumentTitle('home')

  const socialLinks = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      href: '#',
      label: 'YouTube'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
      href: '#',
      label: 'Email'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      href: '#',
      label: 'Instagram'
    }
  ]

  const linkButtons = [
    {
      title: t.linktree?.redbubble || 'Clothing, stickers and more (Redbubble)',
      href: '#'
    },
    {
      title: t.linktree?.colab55 || 'Compre minha arte no Brasil (Colab55)',
      href: '#'
    },
    {
      title: t.linktree?.inprnt || 'Prints (INPRNT)',
      href: '#'
    },
    {
      title: t.linktree?.displate || 'My exclusive posters on Displate 🤍',
      href: '#'
    },
    {
      title: t.linktree?.portfolio || 'Portfolio',
      href: '#'
    },
    {
      title: t.linktree?.donate || 'Donate (づ⁠ ᴗ _ᴗ)づ⁠☕',
      href: '#'
    }
  ]

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-black' // Tema escuro = fundo branco
          : 'bg-white' // Tema claro = fundo preto
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Profile Card */}
          <div
            className={`${
              theme === 'dark'
                ? 'bg-white/10 border-white/50'
                : 'bg-black/10 border-black/50'
            } backdrop-blur-sm rounded-none border-2 border-dashed p-8 mb-8 text-center shadow-2xl hover:shadow-inner transition-all duration-500 hover:border-solid`}
          >
            {/* Profile Image - Horror Manga Style */}
            <div className="relative mx-auto w-32 h-32 mb-6 group">
              <div
                className={`absolute inset-0 ${
                  theme === 'dark' ? 'bg-white' : 'bg-black'
                } transform rotate-45 transition-transform duration-700 group-hover:rotate-[225deg]`}
              >
                <div
                  className={`w-full h-full ${
                    theme === 'dark' ? 'bg-black' : 'bg-white'
                  } transform -rotate-45 flex items-center justify-center border-4 ${
                    theme === 'dark' ? 'border-white' : 'border-black'
                  } border-dashed overflow-hidden`}
                >
                  {/* Opção 1: Imagem personalizada */}
                  <img
                    src={assets.logo}
                    alt="Profile"
                    className={`w-20 h-20 object-cover ${
                      theme === 'dark'
                        ? 'filter grayscale contrast-150 invert'
                        : 'filter grayscale contrast-150'
                    } hover:animate-pulse transition-all duration-300`}
                  />

                  {/* Opção 2: Fallback com kanji (descomente se não tiver imagem)
                  <div
                    className={`text-4xl font-black ${
                      theme === 'dark' ? 'text-black' : 'text-white'
                    } tracking-widest font-mono hover:animate-pulse`}
                  >
                    闇
                  </div>
                  */}
                </div>
              </div>
            </div>

            {/* Username - Horror Typography */}
            <h1
              className={`text-3xl font-white mb-2 tracking-wider font-mono ${
                theme === 'dark' ? 'text-white' : 'text-black'
              } hover:tracking-widest transition-all duration-300`}
            >
              @DARK
            </h1>

            {/* Bio */}
            <p
              className={`mb-8 text-sm tracking-wide font-mono ${
                theme === 'dark' ? 'text-white/90' : 'text-black/90'
              }`}
            >
              {t.linktree?.bio || '/// DARK ILUSTRATOR ///'}
            </p>

            {/* Social Icons - Minimalist Horror */}
            <div className="flex justify-center space-x-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-2 transition-all duration-300 hover:scale-125 transform ${
                    theme === 'dark'
                      ? 'text-white/80 hover:text-white'
                      : 'text-black/80 hover:text-black'
                  } hover:rotate-12`}
                  aria-label={social.label}
                >
                  <div
                    className={`border-2 border-dashed p-2 hover:border-solid transition-all duration-300 ${
                      theme === 'dark'
                        ? 'border-white/60 hover:border-white'
                        : 'border-black/60 hover:border-black'
                    }`}
                  >
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Link Buttons - Horror Manga Aesthetic */}
          <div className="space-y-6">
            {linkButtons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`block w-full p-6 font-white text-center transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group font-mono tracking-wide ${
                  theme === 'dark'
                    ? 'bg-white/5 hover:bg-white/15 text-white border-2 border-white border-dashed hover:border-solid'
                    : 'bg-black/5 hover:bg-black/15 text-black border-2 border-black border-dashed hover:border-solid'
                } backdrop-blur-sm hover:tracking-widest text-sm`}
              >
                <span className="relative z-10 block transform group-hover:skew-x-1 transition-transform duration-300">
                  {button.title.toUpperCase()}
                </span>
              </a>
            ))}
          </div>

          {/* Footer - Minimalist Horror */}
          <div className="text-center mt-16">
            <p
              className={`text-xs font-mono tracking-widest ${
                theme === 'dark' ? 'text-white/50' : 'text-black/50'
              }`}
            >
              {t.linktree?.footer || '/// END ///'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
