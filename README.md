# Holodeck Site

Este é o repositório do site da comunidade Holodeck Tecnologia, desenvolvido usando **React** e **JavaScript** com **Vite**. O site possui várias páginas que mostram informações sobre a comunidade, eventos, projetos, e uma loja online.

## Estrutura do Projeto
A estrutura do projeto é organizada de forma modular, com componentes reutilizáveis e páginas dedicadas para diferentes seções do site.

```bash
holodeck-site/
├── backend/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── config/
│   └── constants/
│       └── constants
│           └── texts
│               ├── en/
│               └── pt-br/
├── public/
├── src/
│
├── assets/
│   ├── images/           # Imagens usadas em todo o projeto
│   ├── icons/            # Ícones vetoriais ou gráficos menores
│   ├── fonts/            # Fontes personalizadas ou específicas do projeto
│   └── videos/           # Vídeos utilizados no projeto
│
├── components/           # Componentes reutilizáveis
│   ├── Auth/             # Componentes relacionados à autenticação
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── Layout/           # Componentes de layout compartilhados
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── BackgroundParticles.jsx
│   ├── Common/           # Componentes genéricos reutilizáveis
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Modal.jsx
│   ├── Blog/             # Componentes específicos da página de Blog
│   │   ├── BlogList.jsx
│   │   └── BlogPost.jsx
│   ├── Collaborator/     # Componentes para funcionalidades de colaborador
│   │   ├── CollaboratorList.jsx
│   │   └── CollaboratorProfile.jsx
│   ├── Contact/          # Componentes para a página de contato
│   │   ├── ContactForm.jsx
│   │   └── ContactInfo.jsx
│   ├── Projects/         # Componentes específicos da página de projetos
│   │   ├── ProjectList.jsx
│   │   └── ProjectDetails.jsx
│   └── Outras pastas específicas/
│
├── pages/                # Páginas da aplicação
│   ├── Auth/             # Páginas de autenticação
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   ├── Blog/             # Páginas relacionadas ao blog
│   │   └── Blog.jsx
│   ├── Collaborator/     # Páginas relacionadas aos colaboradores
│   │   └── Collaborator.jsx
│   ├── Community/        # Páginas relacionadas à comunidade
│   │   └── CommunityJoin.jsx
│   ├── Contact/          # Página de contato
│   │   └── Contact.jsx
│   ├── Events/           # Página de eventos
│   │   └── Events.jsx
│   ├── Home/             # Página inicial
│   │   └── Home.jsx
│   ├── Projects/         # Página de projetos
│   │   └── Projects.jsx
│   └── Store/            # Página de loja
│       └── Store.jsx
│
├── contexts/             # Contextos React para gerenciamento de estado global
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
│
├── hooks/                # Hooks customizados reutilizáveis
│   ├── useAuth.js
│   └── useFetch.js
│
├── services/             # Serviços externos ou API
│   ├── api.js
│   └── authService.js
│
├── styles/               # Arquivos de estilo
│   ├── global/           # Estilos globais
│   │   └── index.css
│   ├── components/       # Estilos específicos para componentes
│   └── pages/            # Estilos específicos para páginas
│
├── utils/                # Funções utilitárias e constantes
│   ├── helpers/          # Funções utilitárias gerais
│   │   ├── formatDate.js
│   │   └── validateEmail.js
│   ├── constants/        # Constantes usadas no projeto
│   │   ├── apiEndpoints.js
│   │   └── roles.js
│   └── validators/       # Funções de validação específicas
│       └── formValidators.js
│
├── PrivacyPolicy.jsx     # Componente para a política de privacidade
├── App.jsx               # Componente raiz da aplicação
├── main.jsx              # Ponto de entrada principal
├── router.jsx            # Configurações de rotas             # Configuração de rotas
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```
## Tecnologias Utilizadas

- <a href="https://reactjs.org/" target="_blank">React: Biblioteca para construção da interface do usuário.</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript: Linguagem de programação utilizada para o desenvolvimento do projeto.</a>
- <a href="https://vitejs.dev/" target="_blank">Vite: Ferramenta de build para desenvolvimento rápido e leve.</a>
- <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a>

## Configuração e Execução do Projeto
Para configurar e executar o projeto localmente, siga os passos abaixo:

## Pré-requisitos
Certifique-se de ter o Node.js e o npm instalados em sua máquina.

[node.js](https://nodejs.org/pt)

[npm](https://www.npmjs.com/)

## Instalação
1. Clone o repositório:
```bash
 git clone https://github.com/usuario/holodeck-site.git
```
2. Navegue até o diretório do projeto:
```bash
 cd site-holodeck
```
3. Instale as dependências do projeto:
```bash
 npm install
```
### Executando o Projeto
Para executar o projeto localmente, use o seguinte comando:

> npm run dev
O aplicativo estará disponível em http://localhost:5173.

### Build para Produção
Para gerar uma build para produção, utilize o comando:

> npm run build
Os arquivos de build serão gerados na pasta dist.

## Estrutura das Páginas
O site possui as seguintes páginas:

- Home: Página inicial com informações gerais sobre a comunidade.
- Contact: Página de contato para comunicação com a equipe.
- Community Join: Página para se tornar membro da comunidade.
- Collaborator: Página para interessados em colaborar com a comunidade.
- Projects: Página exibindo os projetos desenvolvidos pela comunidade.
- Events: Página com informações sobre eventos futuros e passados.
- Store: Loja online para produtos relacionados à comunidade.
- Blog (Opcional): Página para postagens de blog e atualizações.

## Contribuição
Se você deseja contribuir para o desenvolvimento deste projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie um branch com a sua feature (git checkout -b minha-feature).
3. Commit suas mudanças (git commit -m 'Minha nova feature').
4. Push para o branch (git push origin minha-feature).
5. Abra um Pull Request.
6. Licença
Este projeto está licenciado sob a [MIT License](LICENSE).


color:

Principal {#3c297a} roxo
Secundaria {#606060} cinza
Tercearia {#a9e916} verde# HOLODECK-TECHNOLOGIES
