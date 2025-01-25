## Como Rodar a IA?

```bash
# Entre na pasta
$ cd .\AI\

# Criar o ambiente virtual
$ python -m venv .venv
# ou
$ python3 -m venv .venv

# Ativar o ambiente virtual

# Windows
$ .venv\Scripts\activate
# macOS e Linux
$ source .venv/bin/activate

# Instalar dependencias
$ pip install -r requirements.txt

# Rodar a IA
$ python main.py
# ou
$ python3 main.py
```
> **Notas**
> Se você está usando Linux Bash para o  Windows, [veja este guia](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) ou use o `node` do prompt de comando.

## Como Rodar o Back-end?
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

## Como Rodar o Aplicativo (Front-end)?
```bash
# Entre na pasta
$ cd .\Front-end\

# Iniciar:
$ npx expo start
```
> **Atenção:**
> Para conectar o servidor no app (usar os endpoints), é necessário mudar os end-points das páginas .js na pasta Front-end/app, trocando as URLS para seu endereço ip local (endereço que aparece embaixo do QR-CODE), Exemplo: const url = "http://(endereço):3000/api/files/upload";


