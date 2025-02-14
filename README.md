<h1 align="center">
    <img src="./docs/assets/cuidar-logo-white.svg" height="250"alt="Docusaurus">
</h1>
<h1 align="center">

![Static Badge](https://img.shields.io/badge/version-1.0-blue?style=flat-square) ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/FGA0138-MDS-Ajax/2024.2-Virgo/ci.yml?style=flat-square&logo=github)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/FGA0138-MDS-Ajax/2024.2-Virgo?style=flat-square) ![NPM Version](https://img.shields.io/npm/v/npm?style=flat-square&color=red) ![GitHub repo size](https://img.shields.io/github/repo-size/FGA0138-MDS-Ajax/2024.2-Virgo?style=flat-square&color=purple)

</h1>

## Sobre

Cuidar Verde tem como objetivo auxiliar pequenos e médios agricultores no diagnóstico e manejo de doenças nas plantas, utilizando tecnologias de inteligência artificial para análise de imagens e reconhecimento de doenças através de um aplicativo mobile.

## Instalação

### Clonar o repositório

```
git clone https://github.com/FGA0138-MDS-Ajax/2024.2-Virgo.git
```

## Rodar a aplicação Localmente
  
### Como Rodar a IA?
```bash
# Se estiver no linux:
# Dar permissão p/ execução:
$ chmod +x startIA.sh

$ ./startIA.sh

#Se estiver no windows:
$ ./startIA.bat
```

### Como Rodar o Back-end?
> **Atenção:**
> Para rodar o projeto completo, é necessário rodar cada parte em terminais separados, então a IA fica em um terminal, o Back-end em outro e o aplicativo em si (Front) em outro, totalizando 3 terminais.
```bash
# Entre na pasta
$ cd .\Back-end\

# Instale dependências
$ npm install
# Após configurações de .env, migrate dev e docker compose up:

# Subir container no docker.

# Iniciar servidor:
$ npm run start:dev
```

### Como Rodar o Aplicativo (Front-end)?
```bash
# Entre na pasta
$ cd .\Front-end\

# Iniciar:
$ npx expo start
```
> **Atenção:**
> Para conectar o servidor no app (usar os endpoints), é necessário mudar os end-points das páginas .js na pasta Front-end/app, trocando as URLS para seu endereço ip local (endereço que aparece embaixo do QR-CODE), Exemplo: const url = "http://(endereço):3000/api/files/upload";

## Features

- [x] Cadastro de usuário agricultor
- [x] Cadastro de usuário agrônomo
- [x] Login de usuário
- [x] Histórico de plantas diagnosticas
- [x] Perfil de usuário
- [x] Escolhr qual planta tirar a foto
- [x] Instruções de como tirar a foto
- [x] Enquadramento de foto na câmera
- [x] Tela de diagnóstico da IA para Agricultor e Agrônomo
- [x] Agrônomo ter a possibilidade de avaliar o diagnóstico da IA

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
- [Nest.js](https://nestjs.com/)
- [Tensor Flow](https://www.tensorflow.org/)

## Colaboradores

<table>
    <tr>
    <td align="center"><a href="https://github.com/oyLeonardo"><img src="https://avatars.githubusercontent.com/u/143723442?v=4" width="200px;" alt=""/><br/><sub><b>Leonardo Barcellos</b></sub></a><br/>
    <td align="center"><a href="https://github.com/PedrooCamilo"><img src="https://avatars.githubusercontent.com/u/143290243?v=4" width="200px;" alt=""/><br /><sub><b>Pedro Camilo</b></sub></a><br />
    <td align="center"><a href="https://github.com/LucasCarminati"><img src="https://avatars.githubusercontent.com/u/49758418?v=4" width="200px;" alt=""/><br /><sub><b>Lucas Carminati</b></sub></a><br />
    <td align="center"><a href="https://github.com/Renurin"><img src="https://avatars.githubusercontent.com/u/151562116?v=4" width="200px;" alt=""/><br /><sub><b>Renan</b></sub></a><br />
    <td align="center"><a href="https://github.com/maaduh"><img src="https://avatars.githubusercontent.com/u/144070906?v=4" width="200px;" alt=""/><br /><sub><b>Maria Eduarda</b></sub></a><br />
    </tr>
    <tr>
    <td align="center"><a href="https://github.com/arthurlleite"><img src="https://avatars.githubusercontent.com/u/170873899?v=4" width="200px;" alt=""/><br /><sub><b>Arthur Leite</b></sub></a><br />
    <td align="center"><a href="https://github.com/kauan2872"><img src="https://avatars.githubusercontent.com/u/103394028?v=4" width="200px;" alt=""/><br /><sub><b>Kauan Jose</b></sub></a><br />
    <td align="center"><a href="https://github.com/joaolobo10"><img src="https://avatars.githubusercontent.com/u/133723566?v=4" width="202px";" alt=""/><br /><sub><b>Joao Lobo</b></sub></a><br/>
    <td align="center"><a href="https://github.com/gbevi"><img src="https://avatars.githubusercontent.com/u/143966903?v=4" width="200px" alt=""/><br /><sub><b>Gabriel Mendes</b></sub></a><br />
    <td align="center"><a href="https://github.com/RA-Salles"><img src="https://avatars.githubusercontent.com/u/107194597?v=4" width="200px;" alt=""/><br /><sub><b>Ryan Augusto</b></sub></a><br />
    </tr>
</table>
