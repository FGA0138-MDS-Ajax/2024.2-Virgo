## Como Rodar a IA?
```bash
# Se estiver no linux:
# Dar permissão p/ execução:
$ chmod +x startIA.sh

$ ./startIA.sh

#Se estiver no windows:
$ ./startIA.bat
```

## Como Rodar o Back-end?
> **Atenção:**
> Para rodar o projeto completo, é necessário rodar cada parte em terminais separados, então a IA fica em um terminal, o Back-end em outro e o aplicativo em si (Front) em outro, totalizando 3 terminais.
```bash
# Entre na pasta
$ cd .\Back-end\

# Instale dependências
$ npm install

# Subir container no docker.
# Instalar o Docker no desktop, logar no Docker utilizando a conta do GitHub e com o Docker do desktop aberto:
$ docker compose up

$ npx prisma generate

# Configurar .env (obs: exemplo do arquivo .env dentro da pasta Back-end do projeto)
$ npx prisma migrate dev

# Iniciar servidor:
$ npm run start:dev

# Se não funcionar tentar:
$ npm start
```

## Como Rodar o Aplicativo (Front-end)?
```bash
# Entre na pasta
$ cd .\Front-end\

# Instale dependências
$ npm install

# Configurar .env (obs: exemplo do arquivo .env dentro da pasta Front-end do projeto)

# Iniciar:
$ npx expo start
```
