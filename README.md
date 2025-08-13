# GitConnected Portfolio

Este projeto é um portfólio profissional desenvolvido em React, TypeScript e Vite, que consome dados do GitConnected API e exibe informações de perfil, habilidades, projetos, experiências profissionais, certificados e mais. O sistema suporta internacionalização (i18n) e tradução automática dos textos usando a API do Google Translate.

## Funcionalidades
- Exibição de perfil profissional completo
- Listagem de habilidades, projetos, experiências, certificados, etc.
- Tradução automática dos textos para múltiplos idiomas
- Cache local das traduções para melhor performance
- Interface responsiva e moderna

## Tecnologias Utilizadas
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [react-i18next](https://react.i18next.com/)
- [Google Translate API](https://cloud.google.com/translate)
- [GitConnected API](https://gitconnected.com/)

## Como executar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Crie um arquivo `.env` na raiz do projeto com as variáveis:
   ```env
   VITE_GOOGLE_API_KEY=SEU_API_KEY
   VITE_PORTFOLIO_URL=https://gitconnected.com/v1/portfolio/SEU_USERNAME
   VITE_TRANSLATION_CACHE_DURATION=21600000 # (opcional, duração do cache em ms)
   ```
3. Inicie o projeto:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:5173` no navegador.

## Estrutura de Pastas
- `src/components/` - Componentes reutilizáveis da interface
- `src/pages/` - Páginas principais do portfólio
- `src/models/` - Modelos TypeScript para tipagem dos dados
- `src/locales/` - Arquivos de tradução

## Personalização
- Edite o arquivo de modelo em `src/models/gc-profile.tsx` para ajustar os tipos conforme sua necessidade.
- Modifique os componentes em `src/components/` para alterar o layout ou adicionar novas funcionalidades.

## Licença
Este projeto é open-source e pode ser utilizado livremente para fins pessoais e profissionais.

