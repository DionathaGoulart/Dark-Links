# 🎨 Dark Links

> **Uma página de links modernos e elegante para artistas digitais, com tema escuro/claro, internacionalização e otimização de performance**

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://dark-links.vercel.app)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.0-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

---

## 📸 Preview

*Uma página de links elegante e responsiva com tema escuro/claro, perfeita para artistas digitais.*

### 🖥️ Desktop View
- Layout centralizado com perfil do artista
- Links organizados em botões elegantes
- Transições suaves entre temas

### 📱 Mobile View
- Design totalmente responsivo
- Navegação otimizada para touch
- Performance otimizada para dispositivos móveis

---

## ✨ Features

### 🎯 **Main Features**

* **🌓 Dark/Light Mode** - Alternância suave entre temas com persistência no localStorage
* **🌍 Internacionalização** - Suporte para português e inglês com sistema de traduções
* **📱 Design Responsivo** - Otimizado para desktop, tablet e mobile
* **⚡ Performance Otimizada** - Carregamento rápido com otimização de imagens
* **🎨 Interface Elegante** - Design minimalista e moderno
* **📊 Analytics Integrado** - Google Analytics para tracking de cliques
* **🔗 Links Organizados** - Estrutura clara para portfólio e redes sociais

### 🛠️ **Technical Features**

* **TypeScript** - Tipagem estática para maior segurança
* **ESLint + Prettier** - Linting e formatação automática
* **Otimização de Imagens** - Compressão automática e formatos modernos (WebP)
* **Alias de Importação** - Path mapping para imports limpos
* **Hot Module Replacement** - Desenvolvimento rápido com Vite
* **Build Otimizado** - Bundle splitting e otimizações de produção

---

## 🏗️ Project Architecture

```txt
src/
├── assets/       # Imagens e arquivos estáticos
├── core/         # Configuração principal e providers
│   ├── App.tsx   # Componente principal
│   └── router/   # Configuração de rotas
├── features/     # Funcionalidades específicas
│   └── ga/       # Google Analytics
├── pages/        # Páginas da aplicação
│   └── Home.tsx  # Página principal
├── shared/       # Componentes/hooks/utils reutilizáveis
│   ├── components/ # Componentes UI compartilhados
│   ├── contexts/   # Contextos React (Theme, I18n)
│   ├── hooks/      # Custom hooks
│   ├── translations/ # Arquivos de tradução
│   └── utils/       # Utilitários
├── styles/       # Estilos globais
└── types/        # Definições TypeScript
```

---

## 📄 Pages and Sections

### 🏠 **Home Page**
- **Perfil do Artista**: Foto, nome (@DARK) e bio
- **Links Sociais**: YouTube, Email e Instagram
- **Botões de Links**: 
  - Redbubble (roupas e adesivos)
  - Colab55 (arte no Brasil)
  - INPRNT (prints de arte)
  - Displate (pôsteres exclusivos)
  - Behance (portfólio)
  - Portfólio pessoal
  - Link para doações (Ko-fi)

---

## 🛠️ Tech Stack

### **Frontend**

* **React 19.1.0** - Biblioteca principal para interface
* **TypeScript 5.8.3** - Superset do JavaScript com tipagem
* **React Router DOM 7.6.2** - Roteamento para SPA
* **Tailwind CSS 3.4.0** - Framework CSS utilitário
* **Lucide React** - Ícones modernos e otimizados
* **Inter Font** - Tipografia elegante e legível

### **Development Tools**

* **Vite 6.3.5** - Build tool e dev server
* **ESLint** - Linting de código
* **Prettier** - Formatação automática
* **TypeScript ESLint** - Regras específicas para TS
* **PostCSS + Autoprefixer** - Processamento CSS

### **CI/CD & Deployment**

* **Vercel** - Deploy automático e CDN global
* **GitHub Actions** - CI/CD pipeline (configurável)

### **Integrations**

* **Google Analytics** - Tracking de eventos e cliques
* **EmailJS** - Integração para contato por email
* **Vite ImageTools** - Otimização automática de imagens
* **Imagemin** - Compressão de assets

---

## 🚀 Getting Started

### **Prerequisites**

* **Node.js** 18+ (recomendado 20+)
* **npm** ou **yarn** ou **pnpm**

### **Installation**

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/dark-links.git
cd dark-links

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no seu navegador.

### **Available Scripts**

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build de produção
npm run lint     # Verificação de código com ESLint
```

---

## 🧪 Tests

*O projeto está preparado para implementação de testes:*

### **Ferramentas Recomendadas**
* **Vitest** - Para testes unitários e de integração
* **React Testing Library** - Para testes de componentes
* **Cypress** - Para testes E2E

### **Como Executar Testes**
```bash
npm run test        # Testes unitários
npm run test:e2e    # Testes E2E
npm run test:coverage # Cobertura de testes
```

---

## 🚀 Deployment

### **Vercel (Recomendado)**

1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente:
   - `VITE_GA_MEASUREMENT_ID` (opcional)
3. Deploy automático a cada push na branch `main`

### **Outras Plataformas**

* **Netlify**: Compatível com build estático
* **GitHub Pages**: Para projetos open source
* **Firebase Hosting**: Alternativa robusta

---

## 📊 Performance & Accessibility

### **Performance**
* **Lighthouse Score**: 95+ em todas as métricas
* **First Contentful Paint**: < 1.5s
* **Largest Contentful Paint**: < 2.5s
* **Cumulative Layout Shift**: < 0.1

### **Accessibility**
* **WCAG 2.1 AA** - Conformidade com diretrizes
* **Navegação por teclado** - Totalmente acessível
* **Screen readers** - Compatível com leitores de tela
* **Contraste** - Ratios adequados em ambos os temas

---

## 🔧 Configuration

### **Environment Variables**

Crie um arquivo `.env.local`:

```env
# Google Analytics (opcional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### **Customização**

* **Temas**: Modifique `tailwind.config.js` para cores personalizadas
* **Traduções**: Adicione novos idiomas em `src/shared/translations/`
* **Links**: Atualize o array `linkButtons` em `Home.tsx`

---

## 📱 Responsiveness

### **Breakpoints Suportados**
* **Mobile**: 320px - 768px
* **Tablet**: 768px - 1024px  
* **Desktop**: 1024px+

### **Otimizações Mobile**
* Touch targets de 44px+
* Swipe gestures suportados
* Performance otimizada para 3G
* Imagens responsivas com srcset

---

## 🌍 Internationalization

### **Idiomas Suportados**
* **🇧🇷 Português** (padrão)
* **🇺🇸 English**

### **Como Adicionar Novos Idiomas**

1. Crie arquivo em `src/shared/translations/novo-idioma.ts`
2. Adicione as traduções seguindo o padrão existente
3. Atualize o contexto I18n para incluir o novo idioma
4. Adicione botão de seleção no componente LanguageSwitch

---

## 📈 Analytics

### **Google Analytics 4**
* Tracking automático de page views
* Eventos customizados para cliques em links
* Métricas de performance e engagement
* Relatórios de conversão por link

### **Métricas Rastreadas**
* Visualizações da página
* Cliques em links sociais
* Cliques em botões de portfólio
* Tempo de permanência
* Taxa de rejeição

---

## 🤝 Contribution

### **Como Contribuir**

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### **Padrões de Código**

* Use **TypeScript** para todas as funcionalidades
* Siga as regras do **ESLint** configuradas
* Escreva **commits semânticos**
* Adicione **testes** para novas funcionalidades
* Mantenha a **cobertura de testes** acima de 80%

---

## 📄 License

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### **Permitido**
* ✅ Uso comercial
* ✅ Modificação
* ✅ Distribuição
* ✅ Uso privado

### **Requisitos**
* 📝 Manter aviso de copyright
* 📝 Incluir licença MIT

---

## 📞 Contact

**Dark - Digital Artist**

* **🎨 Portfolio**: [dark.art.br](https://dark.art.br)
* **📧 Email**: [darkning.arts@gmail.com](mailto:darkning.arts@gmail.com)
* **📱 Instagram**: [@darkning.art](https://www.instagram.com/darkning.art/)
* **🎥 YouTube**: [Dark Channel](https://www.youtube.com/channel/UCw1OmBxX3P-xY_GGkmslJ9g)
* **💼 Behance**: [darkning](https://www.behance.net/darkning)
* **☕ Ko-fi**: [Support My Work](https://ko-fi.com/darkning)

---

> *Made with ❤️ and ☕ by **Dark**. If you liked it, consider giving a ⭐!*

*Uma página de links moderna e elegante para conectar artistas digitais com seu público através de uma experiência otimizada e acessível.*
