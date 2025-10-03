<div align="center">

# 🔗 Dark Links

**Linktree profissional para artista digital com tema escuro e design minimalista**

[![CI/CD](https://img.shields.io/badge/CI/CD-GitHub%20Actions-2088FF?style=flat-square&logo=githubactions)](https://github.com/DionathaGoulart/Dark-Links/actions)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## ✨ Funcionalidades

### 🎯 Principais Características

- **🎨 Design Minimalista** - Interface limpa e profissional focada no conteúdo
- **🌙 Tema Escuro** - Modo escuro nativo com transições suaves
- **📱 Totalmente Responsivo** - Otimizado para todos os dispositivos
- **⚡ Performance Otimizada** - Carregamento rápido com Vite e otimizações avançadas
- **🔗 Links Organizados** - Estrutura clara para portfólio, lojas e redes sociais
- **📊 Analytics Integrado** - Rastreamento de cliques com Google Analytics
- **🌍 Internacionalização** - Suporte a múltiplos idiomas (PT/EN)
- **♿ Acessibilidade** - Seguindo padrões WCAG para inclusão

### 🛠️ Funcionalidades Técnicas

- **🏗️ Arquitetura Modular** - Estrutura organizada com separação de responsabilidades
- **🎯 TypeScript Completo** - Tipagem forte em toda a aplicação
- **🔄 Roteamento Dinâmico** - Sistema de rotas configurável e extensível
- **🎨 Sistema de Temas** - Context API para gerenciamento de tema
- **📦 Otimização de Imagens** - Compressão automática e formatos modernos
- **🧪 CI/CD Automatizado** - Deploy automático com GitHub Actions

---

## 🏗️ Arquitetura do Projeto

```
src/
├── 📁 assets/              # Recursos estáticos (imagens, ícones)
│   ├── logo.jpg
│   └── index.ts
├── 📁 core/                # Núcleo da aplicação
│   ├── App.tsx
│   ├── main.tsx
│   ├── providers/          # Contextos globais (tema, i18n)
│   └── routing/            # Configuração de rotas
├── 📁 features/            # Funcionalidades específicas
│   └── ga/                 # Google Analytics
├── 📁 pages/               # Componentes de páginas
│   └── Home.tsx
├── 📁 shared/              # Componentes e utilitários compartilhados
│   ├── components/         # Componentes reutilizáveis
│   ├── hooks/              # Hooks customizados
│   ├── translations/       # Arquivos de tradução
│   └── utils/              # Funções utilitárias
├── 📁 styles/              # Estilos globais
└── 📁 types/               # Definições de tipos TypeScript
```

---

## 📄 Páginas e Seções

### 🏠 Página Inicial

- **Perfil do Artista** - Foto, nome e bio personalizáveis
- **Links Sociais** - YouTube, Instagram e Email com ícones SVG
- **Botões de Ação** - Links para portfólio, lojas e doações
- **Tema Adaptativo** - Alternância automática entre claro/escuro
- **Analytics** - Rastreamento de todos os cliques em links

---

## 🛠️ Tecnologias Utilizadas

### Frontend Principal

- **React 19.1.0** - Biblioteca para interfaces de usuário
- **TypeScript 5.8.3** - Superset JavaScript com tipagem estática
- **Vite 6.3.5** - Build tool moderna e rápida
- **React Router DOM 7.6.2** - Roteamento para aplicações React

### Estilização e UI

- **Tailwind CSS 3.4.0** - Framework CSS utility-first
- **PostCSS 8.4.35** - Processador CSS com plugins
- **Autoprefixer 10.4.17** - Adiciona prefixos CSS automaticamente
- **Inter Font 5.2.6** - Tipografia moderna e legível

### Ferramentas de Desenvolvimento

- **ESLint 9.29.0** - Linter para qualidade de código
- **Prettier 3.5.3** - Formatador de código automático
- **TypeScript ESLint 8.34.1** - Regras ESLint para TypeScript
- **Vite Imagetools 7.1.0** - Otimização e transformação de imagens

### Deploy e CI/CD

- **Vercel** - Plataforma de deploy automático
- **GitHub Actions** - Automação de CI/CD
- **Lighthouse CI** - Auditoria de performance automatizada

### Integrações

- **Google Analytics 4** - Rastreamento de analytics
- **EmailJS 4.4.1** - Envio de emails via JavaScript
- **Lucide React 0.525.0** - Biblioteca de ícones SVG

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn como gerenciador de pacotes
- Git para clonagem do repositório

### Instalação

```bash
# Clone o repositório
git clone https://github.com/DionathaGoulart/Dark-Links.git

# Entre no diretório
cd Dark-Links

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run preview      # Visualiza build de produção localmente

# Build e Deploy
npm run build        # Gera build otimizado para produção

# Qualidade de Código
npm run lint         # Executa ESLint para verificar código
```

---

## 🧪 CI/CD e Qualidade

### GitHub Actions

O projeto possui workflow automatizado de CI/CD:

- **Build & Test** - Verifica se o projeto compila corretamente
- **Lint Check** - Valida qualidade do código com ESLint
- **Lighthouse Audit** - Testa performance, acessibilidade e SEO
- **Deploy Automático** - Deploy na Vercel em caso de sucesso

### Ferramentas de Qualidade

- **ESLint** - Análise estática de código com regras customizadas
- **Prettier** - Formatação automática e consistente
- **TypeScript** - Verificação de tipos em tempo de compilação
- **Lighthouse CI** - Auditoria contínua de performance

---

## 🚀 Deploy

### Deploy Automático (Vercel)

O projeto está configurado para deploy automático na Vercel:

- **Produção**: Deploy automático na branch `main`
- **Preview**: Deploy automático em Pull Requests
- **URL**: `https://dark-links.vercel.app`

### Configuração Vercel

- **Framework**: Vite
- **Runtime**: Node.js 18.x
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Configuração Automática

1. Conecte seu repositório no Vercel Dashboard
2. Configure as variáveis de ambiente necessárias
3. O deploy acontece automaticamente via GitHub Actions

### Workflows GitHub Actions

O projeto possui workflow automatizado:

- **CI/CD** (`ci.yml`) - Build, testes, lint e deploy automático

### Deploy Manual

```bash
# Build para produção
npm run build

# Deploy via Vercel CLI
vercel --prod
```

---

## 📊 Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 300ms
- **Speed Index**: < 3.0s
- **Performance Score**: > 90
- **Accessibility Score**: > 95
- **Best Practices Score**: > 90
- **SEO Score**: > 90

---

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Personalização

- **Perfil**: Edite `src/pages/Home.tsx` para alterar foto, nome e bio
- **Links**: Configure os links em `src/pages/Home.tsx` no array `linkButtons`
- **Cores**: Modifique o tema em `tailwind.config.js`
- **Traduções**: Adicione novos idiomas em `src/shared/translations/`
- **Analytics**: Configure o ID de medição no arquivo `.env.local`

---

## 📱 Responsividade

O linktree é totalmente responsivo e otimizado para:

- **📱 Mobile** (320px - 768px)
- **📱 Tablet** (768px - 1024px)
- **💻 Desktop** (1024px - 1440px)
- **🖥️ Large Desktop** (1440px+)

---

## ♿ Acessibilidade

- **Navegação por Teclado** - Suporte completo para navegação sem mouse
- **Screen Readers** - Labels e descrições adequadas para leitores de tela
- **Contraste de Cores** - Paleta de cores com contraste adequado (WCAG AA)
- **Foco Visual** - Indicadores claros de foco em elementos interativos
- **Semântica HTML** - Estrutura semântica correta para melhor compreensão

---

## 🌍 Internacionalização

Suporte completo a múltiplos idiomas:

- **🇧🇷 Português** - Idioma padrão com traduções completas
- **🇺🇸 Inglês** - Traduções em inglês para alcance global
- **Sistema Automático** - Detecção automática do idioma do navegador
- **Alternância Manual** - Seletor de idioma no header da aplicação

---

## 📈 Analytics

Integração completa com Google Analytics 4:

- **Rastreamento de Cliques** - Monitora todos os cliques em links externos
- **Páginas Visitadas** - Acompanha navegação e tempo na página
- **Dispositivos** - Análise de dispositivos e resoluções utilizadas
- **Performance** - Métricas de carregamento e interação

---

## 📄 Licença

**⚠️ ATENÇÃO: Este projeto é de uso exclusivo e pessoal.**

### Direitos Reservados

Este software e sua documentação são propriedade exclusiva do autor e estão protegidos por direitos autorais. É **expressamente proibido**:

- ❌ **Copiar** o código fonte
- ❌ **Modificar** sem autorização
- ❌ **Distribuir** o software
- ❌ **Usar** para fins comerciais
- ❌ **Criar trabalhos derivados**
- ❌ **Fazer engenharia reversa**

### Uso Permitido

- ✅ **Visualizar** o código para fins educacionais
- ✅ **Estudar** a implementação para aprendizado
- ✅ **Inspirar-se** nas ideias e conceitos
- ✅ **Fazer fork** apenas para estudo pessoal

### Consequências

A violação desta licença resultará em:

- Ação legal imediata
- Remoção do conteúdo infrator
- Danos e prejuízos conforme a lei

**© 2025 Dionatha Goulart. Todos os direitos reservados.**

---

## 📞 Contato

**Desenvolvedor**: Dionatha Goulart  
**Email**: dionatha.work@gmail.com  
**Portfolio**: https://dionatha.com.br/  
**GitHub**: https://github.com/DionathaGoulart  
**Linkedin**: https://www.linkedin.com/in/dionathagoulart/

---

<div align="center">

**Feito by Dionatha Goulart**

</div>
