# Plano de Teste - Cuidar Verde

## **1. Introdução**

Este documento apresenta o Plano de Testes do Cuidar Verde, detalhando a abordagem, os tipos de testes, os critérios de aceitação e os recursos necessários para garantir a qualidade e a funcionalidade do aplicativo.

## 1.1 Definições preliminares

Nessa seção serão definidas terminologias utilizadas ao longo do treinamento

- Unidade de treinamento padrão: a unidade de treinamento padrão utilizada nos modelos da equipe virgo utilizam 100 épocas de 150 imagens de um dataset, com distribuição aproximadamente normalizada entre as labels de cobertura
- Dataset padrão: o dataset padrão utilizado é o le_dataset em sua versão mais atual disponível.

## **2. Objetivos**

O objetivo deste documento é definir uma estratégia eficaz de testes, garantindo que o aplicativo atenda aos requisitos funcionais e não funcionais, proporcionando uma experiência confiável e intuitiva aos usuários.

## **3. Requisitos do Sistema**

- [declaração de escopo do projeto](../documento-visao/declaração-escopo-projeto.md)

## **4. Tipos de Testes**

Para garantir a cobertura total do sistema, serão realizados os seguintes testes:

## 4.1 Testes Unitários

Os testes unitários visam validar o funcionamento correto de cada componente individualmente. Desenvolvidos por um dos integrantes do projeto, estes testes garantem que funções, classes e módulos operem conforme o esperado antes de serem integrados ao sistema.

## 4.2 Testes de Integração

Os testes de integração serão realizados para verificar a comunicação entre diferentes módulos do sistema. O objetivo é garantir que os componentes interajam corretamente, evitando falhas na troca de informações entre partes distintas da aplicação.

## 4.3 Testes de Sistema

Os testes de sistema cobrem o funcionamento do sistema tal como o usuário final utilizaria. Tais testes tem como objetivo garantir o funcionamento do produto final segundo as especificações e requisitos levantados ao longo do projeto e validados pelo cliente.

## **5. Cobertura dos Testes**

### **5.1 O que será Testado:**

#### **Testes Unitários:**

**Tela Login:**

- Validar renderização da tela.
- Validar CRUD login.

**Tela Cadastro:**

- Validar renderização da tela.
- Validar CRUD cadastro.

**Tela Esqueci Minha Senha:**

- Validar renderização da tela.
- Validar funcionalidades esqueci minha senha

**Tela Termos de Uso:**

- Validar renderização da tela.

**Tela Política de Privacidade:**

- Validar renderização da tela.
  **Tela Agricultor ou Agrônomo:**
- Validar renderização da tela.
- Validar funcionalidade da seleção de “cargo” do perfil (role)

**Tela selectPlant:**

- Validar renderização da tela.
- Validar funcionalidade seleção da planta

**Tela Perfil:**

- Validar renderização da tela.
- Validar funcionalidade Alterar senha
- Validar funcionalidade Sair

**Tela Welcome**

- Validar renderização da tela.

**Tela Histórico:**

- Validar renderização da tela.
- Validar funcionalidade seleção de histórico

**Tela Instruções:**

- Validar renderização da tela.
- Validar funcionalidade da tela de instruções.

**Tela Câmera:**

- Validar renderização da tela.
- Validar funcionalidades da câmera

**Tela Diagnóstico:**

- Validar renderização da tela.

**Tela Avaliação:**

- Validar renderização da tela.
- Validar funcionalidade de avaliação do diagnóstico
- Validar funcionalidade botão de voltar para o menu inicial

**Modelo LSX**

- Capacidade de treinamento efetivo
- Capacidade de boa performance de treinamento
- Acurácia resultante de treinamento sob especificação
- Cobertura resultante de treinamento sob especificação

#### **Testes de Integração:**

**Api Login**

Validar Token de Login.

**Api Cadastro**

Validar registro de usuário (nome,email,senha,role).

**Api Esqueci minha senha**

Validar atualização da senha.
Validar envio de nova senha ao email.

**Api Perfil**

- Validar requerimento de informações do usuário na tela perfil.

**Api Câmera**

- Validar o envio da foto (jpeg).

**Api Imagem**

- Validar o tratamento da imagem enviada.

**Api CREA**

Validar se CREA recebido está sendo enviado para a api e está correto/existe.

**Api Avaliação**

- Validar se a característica “role” do usuário é Agrônomo.
- Validar disponibilidade do botão de avaliação.
- Validar envio da avaliação.

**Api IA**

- Validar recebimento da imagem
- Validar envio da imagem para o backend

### **5.2 O que não será Testado:**

Em planejamento, está em andamento para o máximo de funcionalidades serem testadas. Até o momento boa parte foi finalizada, e algumas funcionalidades são testadas por testes específicos, ou seja, funcionalidades testadas mas não por todos os testes.

#### **Testes De Sistema:**

## Testes de Sistema

| Funcionalidade                         | Cenário                                    | Descrição                                                                                          | Resultado Esperado                                                                                                    |
| -------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Cadastro de Usuário**                | C01: Preenchimento correto do formulário   | O usuário preenche corretamente os campos obrigatórios                                             | Quando clicar no botão "Cadastrar". Então o sistema deve criar a conta e exibir mensagem de sucesso.                  |
|                                        | C02: Campos obrigatórios vazios            | O usuário não preenche todos os campos obrigatórios.                                               | Quando clicar em "Cadastrar". Então o sistema deve impedir o cadastro e exibir mensagem de erro.                      |
|                                        | C03: Senhas não coincidem                  | O usuário preenche campos de senha e confirmação com valores diferentes.                           | Quando clicar em "Cadastrar". Então o sistema deve impedir o cadastro e exibir mensagem de erro.                      |
| **Login de Usuário**                   | C01: Login com credenciais corretas        | Dado que o usuário insere e-mail e senha corretos                                                  | Quando clicar no botão "Entrar". Então o sistema deve permitir o login.                                               |
|                                        | C02: Login com credenciais incorretas      | Dado que o usuário insere e-mail ou senha incorretos                                               | Quando clicar em "Entrar". Então o sistema deve impedir o login e exibir mensagem de erro.                            |
| **Recuperação de Senha**               | C01: Solicitação de recuperação            | Dado que o usuário esqueceu a senha                                                                | Quando clicar em "Recuperar senha" e inserir o e-mail. Então o sistema deve enviar um token para o e-mail.            |
|                                        | C02: Inserção correta do token             | Dado que o usuário recebeu o token e o insere corretamente                                         | Quando criar uma nova senha. Então o sistema deve redefinir a senha e permitir login.                                 |
| **Sair da Conta**                      | C01: Usuário encerra sessão                | Dado que o usuário acessou o menu de perfil                                                        | Então o sistema deve encerrar a sessão e voltar para a tela de login.                                                 |
| **Seleção de Planta para Diagnóstico** | C01: Usuário seleciona planta corretamente | Dado que o usuário acessa a funcionalidade de diagnóstico                                          | Quando escolher uma planta existente. Então o sistema deve prosseguir para a etapa de captura de foto.                |
| **Identificação de Doença por Foto**   | C01: Captura de imagem                     | Dado que o usuário tira uma foto                                                                   | Quando a imagem for carregada. Então o sistema deve analisá-la corretamente.                                          |
|                                        | C02: Seleção de imagem                     | Dado que o usuário seleciona uma foto da galeria                                                   | Quando a imagem for carregada. Então o sistema deve analisá-la corretamente.                                          |
| **Histórico de Plantas**               | C01: Visualização do histórico             | Dado que o usuário acessa o histórico                                                              | Quando houver registros de diagnósticos anteriores. Então o sistema deve exibir as últimas 10 imagens analisadas.     |
| **Aviso de Foto com Problema**         | C01: Foto com baixa qualidade              | Dado que o usuário envia uma foto tremida ou desfocada                                             | Quando a análise for realizada. Então o sistema deve exibir um aviso solicitando uma nova foto.                       |
|                                        | C02: Foto sem planta                       | Dado que o usuário tira foto de um objeto irrelevante                                              | Quando enviar para análise. Então o sistema deve rejeitar a imagem e informar o motivo.                               |
| **Instruções para Captura**            | C01: Exibição de instruções antes da foto  | Dado que o usuário acessa a câmera para diagnóstico                                                | Quando a tela for exibida. Então o sistema deve apresentar dicas visuais e textuais para captura.                     |
| **Guia para Enquadramento**            | C01: Exibição de moldura                   | Dado que o usuário acessa a câmera                                                                 | Quando a tela for carregada. Então o sistema deve exibir um guia de enquadramento.                                    |
| **Tirar Foto Novamente**               | C01: Solicitação de nova foto              | Dado que a primeira imagem foi rejeitada                                                           | Quando o usuário for notificado. Então o sistema deve solicitar uma nova captura.                                     |
| **Feedback do Agrônomo**               | C01: Envio de feedback                     | Dado que um usuário agrônomo recebe o diagnóstico da doença da planta, ele pode enviar um feedback | Quando ele registrar um feedback positivo ou negativo. Então o sistema deve armazenar a resposta para melhoria da IA. |
| **Análise de Imagens**                 | C01: Identificação de doença               | Dado que o usuário envia uma foto para diagnóstico                                                 | Quando a imagem for enviada para a IA. Então o sistema deve retornar um diagnóstico com 85% de precisão.              |

## **6 Metodologia de Teste**

### **6.1 Planejamento dos Testes:**

Os testes foram estruturados com base na divisão dos integrantes em três áreas específicas: Inteligência Artificial (IA), Frontend e Backend. Cada equipe será responsável por testar e validar as funcionalidades dentro de sua respectiva área, assegurando que o aplicativo atenda aos requisitos de qualidade e desempenho esperados, com cada teste separado por nome e descrição, conforme as telas e funcionalidades a serem testadas, garantindo uma estrutura clara e acessível para futuras consultas e manutenções.

## Testes Unitário

| Código de caso de teste (CT-X) | User Stories (US-X) associadas (se existentes) | Funcionalidade                                                               | Objetivos do Teste                                                                                                                                                                   | Passos do teste                                                                                                                                                                                                                                                                                                                                                                                       | Critérios de aceitação                                                                                                                                                                                                                                                                                                                                                             | esse teste ja foi feito? |
| ------------------------------ | ---------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| CT-02                          | US-01                                          | Validar Funcionalidade botão "Criar conta"                                   | Garantir que o botão "Criar conta" da tela "Ja tenho conta ou criar conta" funcione corretamente                                                                                     | 1. Abrir o aplicativo 2. Clicar no botão "Criar conta"                                                                                                                                                                                                                                                                                                                                                | • O usuário deve ser redirecionado para a tela Cadastrar                                                                                                                                                                                                                                                                                                                           | não                      |
| CT-04                          | US-01                                          | Validar Funcionalidade botão "Eu sou agrônomo"                               | Garantir que o botão "Eu sou agrônomo" da tela "AgricultorOrAgronomo" funcione corretamente                                                                                          | 1. Acessar tela "Criar conta" 2. Clicar no botão "Eu sou Agrônomo"                                                                                                                                                                                                                                                                                                                                    | • O usuário deve ser redirecionado para tela de cadastro de agrônomos                                                                                                                                                                                                                                                                                                              | sim                      |
| CT-03                          | US-01                                          | Validar Funcionalidade botão "Eu sou agricultor"                             | Garantir que o botão "Eu sou agricultor" da tela "AgricultorOrAgronomo" funcione corretamente                                                                                        | 1. Acessar tela "Criar conta" 2. Clicar no botão "Eu sou Agricultor"                                                                                                                                                                                                                                                                                                                                  | • O usuário deve ser redirecionado para tela de cadastro de agricultores                                                                                                                                                                                                                                                                                                           |                          |
| CT-05                          | US-01                                          | Validar CREA Cadastro Agricultor                                             | Garantir que o formulário da tela "registerAgricultor" funcione corretamente                                                                                                         | 1. Acessar tela "Cadastro" com o cargo de agricultor 2. Preencher campos "Nome","Email","Senha","Confirmar senha" 3. Clicar no botão checkbox "Ao criar uma conta você concorda com os Termos de Serviço, incluindo nossa Política de Privacidade" 4. Clicar no botão "Cadastrar"                                                                                                                     | • Após os passos descritos, o usuário é cadastrado no sistema e redirecionado a tela de "welcome".                                                                                                                                                                                                                                                                                 | sim                      |
| CT-06                          | US-01                                          | Validar CREA Cadastro Agrônomo                                               | Garantir que o formulário da tela "registerAgronomo" funcione corretamente                                                                                                           | 1. Acessar tela "Cadastro" com o cargo de agrônomo 2. Preencher campos "Nome","Email","CREA","Senha","Confirmar senha" 3. Clicar no botão checkbox "Ao criar uma conta você concorda com os Termos de Serviço, incluindo nossa Política de Privacidade" 4. Clicar no botão "Cadastrar"                                                                                                                | • Após os passos descritos, o usuário é cadastrado no sistema, redirecionado para a tela de "welcome" e logo após redirecionado para a tela de "Login"                                                                                                                                                                                                                             | sim                      |
| CT-01                          | US-02                                          | Validar Funcionalidade botão "Já tenho conta"                                | Garantir que o botão "Já tenho conta" da tela "Ja tenho conta ou criar conta" funcione corretamente                                                                                  | 1. Abrir o aplicativo 2. Clicar no botão "Já tenho conta"                                                                                                                                                                                                                                                                                                                                             | • O usuário deve ser redirecionado para a tela Login                                                                                                                                                                                                                                                                                                                               | não                      |
| CT-07                          | US-02                                          | Validar CREA Login                                                           | Garantir que o formulário da tela "Login" funcione corretamente                                                                                                                      | 1. Acessar tela "Login" 2. Preencher campos “Email” 3. Preencher campo “Senha” 4. Clicar no botão “Entrar”                                                                                                                                                                                                                                                                                            | • Após os passos descritos, o usuário deve logar no sistema e ser redirecionado para a interface principal do aplicativo ("/tabs").                                                                                                                                                                                                                                                | sim                      |
| CT-08                          | US-03                                          | Validar funcionalidade de Esqueci minha senha                                | Garantir que o token de recuperação seja gerado                                                                                                                                      | 1. Acessar tela de “Login” 2. Pressionar o botão “Esqueci minha senha” 3. Inserir email da conta.                                                                                                                                                                                                                                                                                                     | • Após os passos descritos, deve aparecer a mensagem “foi enviado ao email um token de acesso”                                                                                                                                                                                                                                                                                     |                          |
| CT-17                          | US-03                                          | Processo de redefinição de senha                                             | Garantir que o usuário consiga alterar sua senha com segurança através do perfil, confirmando sua identidade com a senha atual e definindo uma nova senha válida.                    | 1 - Acessa a área de perfil. 2 - O usuário seleciona a opção “Alterar senha”. 3 - O sistema solicita que o usuário informe a senha atual. 4 - O usuário insere a senha atual e a nova senha. 5 - O usuário confirma a nova senha e envia a solicitação. 6 - O sistema valida a senha atual e verifica se a nova senha atende aos critérios de segurança. 7 - O sistema confirma a alteração da senha. | • O sistema deve permitir que o usuário altere sua senha através do perfil, exigindo a senha atual para confirmação de identidade. A nova senha deve ser validada de acordo com os critérios de segurança antes da alteração ser concluída. Após a atualização, o sistema deve exibir uma mensagem de confirmação e o usuário deve conseguir acessar normalmente com a nova senha. |                          |
| CT-19                          | US-04                                          | Validar funcionalidade de Sair da conta                                      | Garantir que o usuário consiga sair da conta                                                                                                                                         | 1 - Acessar tela de Perfil 2 - Clicar no botão "Sair"                                                                                                                                                                                                                                                                                                                                                 | • O usuário deve ter sua conta deslogada do aplicativo e deve ser redirecionado para a tela de Login                                                                                                                                                                                                                                                                               |                          |
| CT-10                          | US-06                                          | Validar Funcionalidade botão “Selecionar Planta”                             | Garantir que o botão “Selecionar Planta” da tela “Home” funciona corretamente                                                                                                        | 1. Acessar tela “Home” 2. Clicar no botão “Selecionar Plantar”                                                                                                                                                                                                                                                                                                                                        | • O usuário deve ser redirecionado para a tela selectPlant                                                                                                                                                                                                                                                                                                                         |                          |
| CT-11                          | US-06                                          | Validar Funcionalidades da tela selectPlant                                  | Garantir que os botões de plantas funcionam corretamente                                                                                                                             | 1. Acessar tela "selectPlant" 2. Clicar em um botão de planta                                                                                                                                                                                                                                                                                                                                         | • O usuário deve ser redirecionado para tela de seleção de instruções e o plant_type deve ser definido pelo nome da planta selecionada                                                                                                                                                                                                                                             |                          |
| CT-13                          | US-06 US-07                                    | Validar Funcionalidades da câmera                                            | Garantir que os botões da câmera funcionam corretamente                                                                                                                              | 1. Acessar tela "camera" 2. Clicar nos botões de virar a câmera, flash e de tirar a foto                                                                                                                                                                                                                                                                                                              | • O usuário deve poder visualizar uma tela de opção entre descartar ou enviar a foto tirada.                                                                                                                                                                                                                                                                                       |                          |
| CT-16                          | US-08                                          | Exibição do histórico de diagnósticos                                        | Garantir que o usuário consiga acessar e visualizar corretamente o histórico de diagnósticos, com todas as informações registradas, incluindo imagem enviada e resultado da análise. | 1 - O usuário acessa a funcionalidade de histórico de diagnósticos. 2 - O sistema exibe uma lista com os diagnósticos já realizados. 3 - O usuário seleciona um diagnóstico para visualizar os detalhes. 4 - O sistema exibe as informações do diagnóstico, incluindo a imagem enviada e o resultado da análise.                                                                                      | • O sistema deve permitir que o usuário acesse o histórico de diagnósticos e visualize todas as análises registradas.                                                                                                                                                                                                                                                              |                          |
| CT-12                          | US-11 US-12                                    | Validar Funcionalidades da tela Instruções                                   | Garantir que a tela de instruções funciona corretamente                                                                                                                              | 1. Acessar tela “Instruções” 2. Clicar no botão central                                                                                                                                                                                                                                                                                                                                               | • O usuário deve percorrer a tela de instrução completamente e depois ser redirecionado a tela de câmera                                                                                                                                                                                                                                                                           |                          |
| CT-18                          | US-14                                          | Exibição da opção de avaliação após o diagnóstico                            | Garantir que, após receber o diagnóstico, o usuário visualize a opção de avaliação e consiga registrar sua opinião selecionando entre as opções "Bom" ou "Ruim".                     | 1- O usuário envia uma imagem para análise. 2 - O sistema processa a imagem e exibe o diagnóstico. 3 - Após a exibição do diagnóstico, o sistema apresenta a pergunta: "Gostaria de fazer uma avaliação?" 4 - O usuário pode escolher entre as opções "Bom" ou "Ruim". 5 - O sistema registra a avaliação do usuário.                                                                                 | • Após a exibição do diagnóstico, o sistema deve apresentar ao usuário a pergunta "Gostaria de fazer uma avaliação?" com as opções "Bom" ou "Ruim". O usuário deve conseguir selecionar uma das opções, e o sistema deve registrar a escolha corretamente.                                                                                                                         |                          |
| CT-14                          |                                                | Validar a opção de descarte da imagem.                                       | Garantir que a tela de validação funciona corretamente.                                                                                                                              | 1 - Clicar no botão “Descartar foto” ou clicar no botão “Usar foto”                                                                                                                                                                                                                                                                                                                                   | • Caso o usuário escolher descartar, a imagem não deve ser armazenada e o usuário será redirecionado para a tela de câmera novamente. Se escolher usar a foto, a imagem deve ser salva no sistema e o usuário redirecionado a tela de diagnóstico                                                                                                                                  |                          |
| CT-09                          |                                                | Validar Funcionalidade dos botões de navegação (tabs)                        | Garantir que os botões de navegação funcionam corretamente                                                                                                                           | 1. Logar no aplicativo 2. Clicar em um botão de navegação (Histórico, Home, Perfil)                                                                                                                                                                                                                                                                                                                   | • Após os passos descritos, o usuário deve ser redirecionado a respectiva tela selecionada.                                                                                                                                                                                                                                                                                        |                          |
| CT-XX                          | US-19                                          | Avaliar cobertura e acurácia da arquitetura modelo resultante do treinamento | Testar se arquitetura do modelo possui cobertura sob especificação                                                                                                                   | 1. Utilizando o script de testes, carregar o modelo treinado. Utilizar scripts e modelos mais recentes. 2. Carregar conjunto de dados de teste diferente do le dataset, que foi utilizado para treinamento. 3. Para cada conjunto de dados de teste, avaliar a acurácia do modelo para o conjunto.                                                                                                    | • O modelo deve possuir 85% de acurácia para cada conjunto de dados de teste • O modelo deve possuir suporte a pelo menos 80 labels.                                                                                                                                                                                                                                               |                          |

## Testes de Integração

## Casos de Teste

| Código de Caso de Teste | Funcionalidade                         | Objetivos do Teste                                                                       | Passos do Teste                                                                                                                                                                                                    | Critérios de Aceitação                                                                                                                                                                                                                  |
| ----------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CT-01                   | Validação do Token de Login            | Garantir que, após o login, o sistema gere um token válido para autenticação do usuário. | 1 - Acessar a tela de login. <br> 2 - Inserir credenciais válidas. <br> 3 - O sistema autentica o usuário e gera um token. <br> 4 - O sistema retorna o token na resposta da API.                                  | O sistema deve retornar um token válido na resposta da API. <br> O token deve permitir o acesso a funcionalidades restritas.                                                                                                            |
| CT-02                   | Registro de Usuário na API de Cadastro | Garantir que um usuário possa se cadastrar corretamente no sistema.                      | 1 - Acessar a tela de cadastro. <br> 2 - Inserir nome, e-mail, senha e role. <br> 3 - O sistema processa os dados e cria o usuário. <br> 4 - O usuário recebe uma confirmação de cadastro.                         | O sistema deve criar o usuário corretamente no banco de dados. <br> O sistema deve retornar uma resposta de sucesso.                                                                                                                    |
| CT-03                   | Recuperação de Senha via API           | Garantir que um usuário possa redefinir sua senha corretamente.                          | 1 - Acessar a tela de recuperação de senha. <br> 2 - Inserir o e-mail cadastrado. <br> 3 - O sistema envia um link de redefinição de senha. <br> 4 - O usuário redefine a senha e faz login.                       | O sistema deve enviar um e-mail com o link de redefinição. <br> O usuário deve conseguir redefinir a senha e acessar o sistema.                                                                                                         |
| CT-04                   | Requisição de Dados do Perfil          | Garantir que a API retorne corretamente os dados do usuário.                             | 1 - O usuário acessa a tela de perfil. <br> 2 - O sistema solicita os dados à API. <br> 3 - A API retorna os dados do usuário. <br> 4 - O sistema exibe os dados na interface.                                     | A API deve retornar os dados corretos do usuário. <br> O sistema deve exibir as informações corretamente.                                                                                                                               |
| CT-05                   | Envio de Foto via API da Câmera        | Garantir que o usuário possa capturar e enviar uma imagem corretamente.                  | 1 - O usuário acessa a tela da câmera. <br> 2 - O usuário captura ou seleciona uma imagem. <br> 3 - O usuário envia a imagem para a API. <br> 4 - O sistema processa a imagem e retorna um status.                 | A imagem deve ser enviada corretamente para a API. <br> A API deve processar a imagem e retornar um status de sucesso.                                                                                                                  |
| CT-06                   | Tratamento da Imagem na API            | Garantir que a API processe a imagem corretamente antes da análise.                      | 1 - O usuário envia uma imagem para análise. <br> 2 - A API recebe e processa a imagem. <br> 3 - O sistema verifica se a imagem está no formato correto. <br> 4 - O sistema retorna a imagem processada.           | A API deve processar a imagem corretamente. <br> Se houver erro no formato, o sistema deve informar o usuário.                                                                                                                          |
| CT-07                   | Validação do CREA na API               | Garantir que o CREA enviado seja validado corretamente.                                  | 1 - O usuário insere seu CREA. <br> 2 - O sistema envia o CREA para validação. <br> 3 - A API verifica se o CREA é válido. <br> 4 - O sistema exibe o resultado da validação.                                      | Se o CREA for válido, o usuário pode prosseguir. <br> Se o CREA for inválido, o sistema deve exibir um erro.                                                                                                                            |
| CT-08                   | Envio e Validação da Avaliação         | Garantir que um agrônomo possa avaliar corretamente um diagnóstico.                      | 1 - O usuário acessa a tela de avaliação. <br> 2 - O sistema verifica se o usuário tem permissão para avaliar. <br> 3 - O usuário preenche e envia a avaliação. <br> 4 - O sistema armazena a avaliação.           | Apenas usuários com a role "Agrônomo" podem avaliar. <br> O sistema deve armazenar corretamente a avaliação.                                                                                                                            |
| CT-09                   | Envio de Imagem para a API de IA       | Garantir que a API de IA receba corretamente a imagem enviada pelo backend.              | 1 - O usuário captura ou seleciona uma imagem. <br> 2 - O backend envia a imagem para a API de IA. <br> 3 - A API recebe e armazena temporariamente a imagem. <br> 4 - A API retorna um status de sucesso ou erro. | A API deve receber a imagem corretamente. <br> Se houver erro no envio, o sistema deve retornar uma mensagem apropriada.                                                                                                                |
| CT-10                   | Retorno do Diagnóstico para o Backend  | Garantir que a API de IA envie corretamente o resultado da análise ao backend.           | 1 - A IA conclui o processamento da imagem. <br> 2 - A API envia o resultado da análise ao backend. <br> 3 - O backend recebe e armazena os dados. <br> 4 - O sistema exibe o diagnóstico para o usuário.          | O backend deve receber corretamente os dados processados pela IA. <br> O diagnóstico deve ser exibido corretamente na interface do usuário. <br> Se a IA não conseguir processar a imagem, uma mensagem de erro clara deve ser exibida. |

## Testes de Sistema

**Cadastro de Usuário**

| Funcionalidade      | Cenário                                         | Descrição                                                                | Resultado Esperado                                                                                   |
| ------------------- | ----------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Cadastro de Usuário | Cenário 01: Preenchimento correto do formulário | O usuário preenche corretamente os campos obrigatórios.                  | Quando clicar no botão "Cadastrar". Então o sistema deve criar a conta e exibir mensagem de sucesso. |
|                     | Cenário 02: Campos obrigatórios vazios          | O usuário não preenche todos os campos obrigatórios.                     | Quando clicar em "Cadastrar". Então o sistema deve impedir o cadastro e exibir mensagem de erro.     |
|                     | Cenário 03: Senhas não coincidem                | O usuário preenche campos de senha e confirmação com valores diferentes. | Quando clicar em "Cadastrar". Então o sistema deve impedir o cadastro e exibir mensagem de erro.     |

**Login de Usuário**

| Funcionalidade   | Cenário                                      | Descrição                                            | Resultado Esperado                                                                        |
| ---------------- | -------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Login de Usuário | Cenário 01: Login com credenciais corretas   | Dado que o usuário insere e-mail e senha corretos    | Quando clicar no botão "Entrar". Então o sistema deve permitir o login.                   |
|                  | Cenário 02: Login com credenciais incorretas | Dado que o usuário insere e-mail ou senha incorretos | Quando clicar em "Entrar". Então o sistema deve impedir o login e exibir mensagem de erro |

**Recuperação de Senha**

| Funcionalidade       | Cenário                                | Descrição                                                  | Resultado Esperado                                                                                         |
| -------------------- | -------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Recuperação de Senha | Cenário 01: Solicitação de recuperação | Dado que o usuário esqueceu a senha                        | Quando clicar em "Recuperar senha" e inserir o e-mail. Então o sistema deve enviar um token para o e-mail. |
|                      | Cenário 02: Inserção correta do Token  | Dado que o usuário recebeu o token e o insere corretamente | Quando criar uma nova senha. Então o sistema deve redefinir a senha e permitir login                       |

**Sair da Conta**

| Funcionalidade | Cenário                            | Descrição                                   | Resultado Esperado                                                   |
| -------------- | ---------------------------------- | ------------------------------------------- | -------------------------------------------------------------------- |
| Sair da Conta  | Cenário 01: Usuário encerra sessão | Dado que o usuário acessou o menu de perfil | Então o sistema deve encerrar a sessão e voltar para a tela de login |

**Seleção de Planta para Diagnóstico**

| Funcionalidade                     | Cenário                                           | Descrição                                                 | Resultado Esperado                                                                                    |
| ---------------------------------- | ------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Seleção de Planta para Diagnóstico | Cenário 01: Usuário seleciona planta corretamente | Dado que o usuário acessa a funcionalidade de diagnóstico | Quando escolher uma planta existente. Então o sistema deve prosseguir para a etapa de captura de foto |

**Identificação de Doença por Foto**

| Funcionalidade                   | Cenário                       | Descrição                                        | Resultado Esperado                                                           |
| -------------------------------- | ----------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------- |
| Identificação de Doença por Foto | Cenário 01: Captura de imagem | Dado que o usuário tira uma foto                 | Quando a imagem for carregada. Então o sistema deve analisá-la corretamente. |
|                                  | Cenário 02: Seleção de imagem | Dado que o usuário seleciona uma foto da galeria | Quando a imagem for carregada. Então o sistema deve analisá-la corretamente. |

**Histórico de Plantas**

| Funcionalidade       | Cenário                               | Descrição                             | Resultado Esperado                                                                                                |
| -------------------- | ------------------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Histórico de Plantas | Cenário 01: Visualização do histórico | Dado que o usuário acessa o histórico | Quando houver registros de diagnósticos anteriores. Então o sistema deve exibir as últimas 10 imagens analisadas. |

**Aviso de Foto com Problema**

| Funcionalidade             | Cenário                              | Descrição                                              | Resultado Esperado                                                                              |
| -------------------------- | ------------------------------------ | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| Aviso de Foto com Problema | Cenário 01: Foto com baixa qualidade | Dado que o usuário envia uma foto tremida ou desfocada | Quando a análise for realizada. Então o sistema deve exibir um aviso solicitando uma nova foto. |
|                            | Cenário 02: Foto sem planta          | Dado que o usuário tira foto de um objeto irrelevante  | Quando enviar para análise. Então o sistema deve rejeitar a imagem e informar o motivo.         |

**Instruções para Captura**

| Funcionalidade          | Cenário                                          | Descrição                                           | Resultado Esperado                                                                                |
| ----------------------- | ------------------------------------------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Instruções para Captura | Cenário 01: Exibição de instruções antes da foto | Dado que o usuário acessa a câmera para diagnóstico | Quando a tela for exibida. Então o sistema deve apresentar dicas visuais e textuais para captura. |

**Guia para Enquadramento**

| Funcionalidade          | Cenário                         | Descrição                          | Resultado Esperado                                                             |
| ----------------------- | ------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------ |
| Guia para Enquadramento | Cenário 01: Exibição de moldura | Dado que o usuário acessa a câmera | Quando a tela for carregada. Então o sistema deve exibir guia de enquadramento |

**Tirar Foto Novamente**

| Funcionalidade       | Cenário                              | Descrição                                | Resultado Esperado                                                               |
| -------------------- | ------------------------------------ | ---------------------------------------- | -------------------------------------------------------------------------------- |
| Tirar Foto Novamente | Cenário 01: Solicitação de nova foto | Dado que a primeira imagem foi rejeitada | Quando o usuário for notificado. Então o sistema deve solicitar uma nova captura |

**Feedback do Agrônomo**

| Funcionalidade       | Cenário                       | Descrição                                                                                          | Resultado Esperado                                                                                                   |
| -------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Feedback do Agrônomo | Cenário 01: Envio de feedback | Dado que um usuário agrônomo recebe o diagnóstico da doença da planta, ele pode enviar um feedback | Quando ele registrar um feedback positivo ou negativo. Então o sistema deve armazenar a resposta para melhoria da IA |

**Análise de Imagens**

| Funcionalidade     | Cenário                             | Descrição                                          | Resultado Esperado                                                                                      |
| ------------------ | ----------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Análise de Imagens | Cenário 01: Identificação de doença | Dado que o usuário envia uma foto para diagnóstico | Quando a imagem for enviada para a IA. Então o sistema deve retornar um diagnóstico com 85% de precisão |

## **7 Ambiente de Teste**

### **7.1 Introdução**

O plano de testes do projeto Cuidar Verde tem como objetivo garantir a funcionalidade, usabilidade e confiabilidade do sistema, que é desenvolvido com foco em identificar doenças em plantas por meio de fotografias capturadas por agricultores. A plataforma utiliza inteligência artificial para análise das imagens e fornece diagnósticos precisos, que podem ser validados por agrônomos através de feedbacks. Este documento detalha o ambiente de teste, critérios de aceitação, riscos e mitigações, e a estratégia adotada para validar o sistema.

A abordagem de testes foi projetada para abranger todos os aspectos do sistema, incluindo o frontend (React Native), o backend (Nest.js), a inteligência artificial (TensorFlow), e o banco de dados (PostgreSQL). O Jest será o framework unificado para execução de testes em todas as camadas do sistema, promovendo consistência e eficiência.

### **7.2 Ferramentas Utilizadas**

O projeto foi desenvolvido utilizando as seguintes ferramentas tecnológicas:

- Expo: Para desenvolvimento e testes do frontend.
- Node.js: Base para o ambiente de desenvolvimento.
- React Native: Framework principal para a criação do aplicativo móvel.
- Nest.js: Estrutura backend para gestão de lógica de negócios.
- TensorFlow: Biblioteca de IA para criação e treinamento do modelo.
- PostgreSQL: Banco de dados para persistência de informações.
- Jest: Framework de testes para backend e frontend.

### **7.4 Critérios de Aceitação**

#### **7.4.1 Critérios Funcionais**

**Testes Unitários:**

- Todos os métodos das classes (Model, Controller e View) devem passar sem erros.

- A IA deve retornar diagnósticos com pelo menos 85% de precisão.

- As validações de entrada de dados devem rejeitar imagens não relacionadas a plantas.

**Testes de Integração:**

- As interações entre os módulos devem funcionar corretamente, com dados sendo gravados e lidos do banco de dados.
- O fluxo de imagens capturadas e processadas pela IA deve ser validado.

**Testes de Sistema:**

- A interface deve permitir a execução do fluxo completo pelo usuário, desde o cadastro até o diagnóstico.
- A navegação e usabilidade devem ser intuitivas.

#### **7.4.2 Critérios Não Funcionais**

- O sistema deve responder a diagnósticos em até 3 segundos.
- A interface deve ser responsiva, funcionando em dispositivos Android com especificações mínimas.
- A segurança das credenciais dos usuários deve ser garantida.
  A configuração do ambiente de teste para o projeto Cuidar Verde segue um conjunto de etapas estruturadas para garantir que os testes sejam executados de forma isolada, consistente e confiável. Abaixo, detalhamos o ambiente e as ferramentas utilizadas:

**Configuração do Ambiente Virtual**

A primeira etapa na preparação do ambiente de teste é a criação de um ambiente virtual isolado, utilizando o Node.js e o gerenciador de pacotes npm. Este isolamento assegura que as dependências do projeto não entrem em conflito com outros pacotes instalados no sistema.

- **Criação do ambiente virtual:**
  Um ambiente virtual é configurado com o comando npm init no diretório do projeto, permitindo o gerenciamento independente de dependências.

- **Instalação de Dependências:**
  As dependências principais do projeto, incluindo Nest.js, React Native, Expo, e Jest, são instaladas via npm e documentadas no arquivo package.json para rastreamento. Outras bibliotecas relevantes para IA, como TensorFlow, também são adicionadas.

**Estrutura dos Testes**
A estrutura dos testes é organizada de forma a permitir a manutenção e escalabilidade do projeto:

- Arquivos -specs:

O projeto utiliza arquivos -specs, armazenados junto aos arquivos correspondentes. Essa abordagem facilita a organização dos testes, garantindo que cada funcionalidade tenha sua própria cobertura específica.

**Banco de Dados de Teste**

- **Banco de Dados Isolado:**
  O PostgreSQL é configurado para criar um banco de dados de teste separado, garantindo que os dados de desenvolvimento ou produção não sejam afetados.

- **Configuração Automatizada:**
  Durante a execução dos testes, o banco de dados de teste é criado automaticamente, e ao final de cada ciclo de testes, ele é destruído para evitar inconsistências.

- **Arquivo de Configuração:**
  As configurações para o banco de dados de teste são definidas em um arquivo específico (ormconfig.test.json) para separação clara do ambiente de desenvolvimento.

**Estrutura Básica de Teste Unitário**

- **Definição das Classes de Teste:**
  As classes de teste utilizam o framework Jest, configurado para identificar e executar testes com métodos nomeados test\_.

- **Métodos de Teste:**
  Cada método dentro de uma classe realiza uma verificação específica, como validação de entradas e saídas de métodos individuais.

- **Asserções:**
  São utilizadas as funções expect().toBe(), expect().toEqual() e expect().toThrow() do Jest para garantir que os resultados obtidos sejam consistentes com os esperados.

**Testes de Integração**

- **Fluxo de Integração:**
  Verifica a interação entre o backend (Nest.js), banco de dados (PostgreSQL) e a camada de interface (React Native).

- **Execução das Requisições:**
  Utiliza bibliotecas como axios para simular requisições HTTP ao backend e verificar respostas.

- **Persistência de Dados:**
  Testa se os dados são armazenados corretamente no banco de dados e recuperados conforme esperado.

**Planejamento Inicial**

Para mitigar riscos no ambiente de teste e evitar comprometimento do banco de dados de produção, todo o planejamento inicial dos testes será executado em uma branch específica denominada test. Essa abordagem assegura que alterações ou falhas durante a execução dos testes não afetem o código principal do projeto.

### **7.5 Riscos e Mitigações**

#### **7.5.1 Riscos Operacionais**

**Risco 1:** A IA não atingir a precisão mínima de 85%.

- **Mitigação:** Re-treinamento contínuo utilizando datasets adicionais e feedbacks coletados.
  **Risco 2:** Incompatibilidade com dispositivos antigos.
- **Mitigação:** Testes extensivos em emuladores e dispositivos reais com especificações mínimas.
  **Risco 3:** Tamanho da IA compromete a performance dos testes, causando lentidão e dificuldades na análise.
- **Mitigação:** Dividir os testes em batches menores e monitorar gráficos de performance, ajustando o modelo para otimizar tempo de resposta.

#### 7.5.2 Riscos de Uso

**Risco 1:** A IA processa fotos que não são de plantas e fornece diagnósticos incorretos.

- **Mitigação:** Implementar validações robustas para detectar se a imagem é de uma planta antes de enviá-la para análise.

**Risco 2:** Agricultores capturarem imagens inadequadas.

- **Mitigação:** Incluir tutoriais interativos na interface e mensagens claras sobre como capturar boas imagens.

**Risco 3:** Feedbacks não utilizados corretamente para re-treinamento da IA.

- **Mitigação:** Automatizar rotinas de integração e validação de feedbacks no modelo de IA.

### 7.6 Estratégia de Teste

Os testes serão organizados nas seguintes categorias e etapas:

- **Testes Unitários:** Foco na validação isolada de métodos e funções em cada camada do sistema. Para validação dos métodos das classes Model, View e Controller.
- **Testes de Integração:** Garantia de que os módulos do sistema interagem corretamente. Para validar a interação entre módulos e persistência de dados.
- **Testes de Sistema:** Simulação de fluxos completos do usuário. Para simulação do fluxo completo do usuário.

**Execução dos Testes**

- Testes unitários serão executados primeiro, seguidos pelos testes de integração.
- Testes exploratórios serão aplicados para identificar falhas que os scripts não detectam.

**Framework Utilizado**

O **Jest** será o framework principal para todos os testes, tanto no backend quanto no frontend, proporcionando consistência e simplicidade na execução e análise dos resultados.

# **10. Tabela de Versionamento**

| Versão | Data       | Descrição da Alteração                          | Nome(s) Integrante(s)             |
| ------ | ---------- | ----------------------------------------------- | --------------------------------- |
| 1.0    | 11/02/2025 | Desenvolvimento do documento de Plano de Testes | Leonardo Barcellos & Arthur Leite & Ryan Augusto |
| 1.1    | 13/02/2025 | Desenvolvimento do Plano de Testes de Sistema   | Pedro Túlio Curvelo Camilo        |
