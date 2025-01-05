## Introdução

## Propósito

O presente documento visa descrever a arquitetura do sistema em desenvolvimento pelo grupo Virgo na Disciplina de Métodos de Desenvolvimento de Software (MDS), lecionada no segundo semestre de 2024.

O sistema em desenvolvimento, Cuidar Verde, possui o propósito de providenciar uma solução simples e objetiva para identificar doenças e enfermidades em plantas através de fotos analisadas por inteligência artificial.

## Escopo

O detalhamento do escopo se encontra na [declaração de escopo do projeto](../documento-visao/declaração-escopo-projeto.md) junto ao documento de visão do produto e do projeto.

Porém, em resumo o produto compreende em um aplicativo para dispositivos móveis Android que utiliza de fotos da câmera do dispositivo para identificar doenças em plantas e validá-las por meio da confirmação de um agrônomo.

## Definições

O sistema seguirá uma **arquitetura de três camadas (Three-Tier Architecture)**, que organiza o desenvolvimento em três partes principais: **Camada de Apresentação(React Native), Camada lógica(Nest JS) e Camada de dados(PostgreSQL).**

O diagrama a seguir ilustra a arquitetura de três camadas adotada pelo grupo e suas respectivas ferramentas:

![DiagramaDeTrêsCamadas](../assets/Diagramas/diagrama%20de%20três%20camadas.jpg){: .imagem }

**<p class="ref">Figura 1**- Diagrama da Arquitetura de Três Camadas: Elaboração própria (2024)</p>

O diagrama apresentado na figura 2 ilustra o banco de dados do sistema e suas tabelas:

![Diagrama de Banco de dados](../assets/Diagramas/Diagrama%20de%20Banco%20de%20dados.png){: .imagem }

**<p class="ref">Figura 2** - Diagrama de Banco de dados: Elaboração própria (2024)</p>

### **Camada de apresentação (React Native, Expo)**

A interface do usuário foi projetada para ser intuitiva, responsiva e otimizada, com foco em dispositivos móveis, garantindo acessibilidade e facilidade de uso para agricultores e agrônomos. Ela oferece funcionalidades essenciais que incluem cadastro e login, possibilitando a personalização da experiência de acordo com o perfil do usuário.

Entre as principais funcionalidades está a seleção de plantas e o envio de imagens para diagnóstico, com instruções claras e exemplos que ajudam os usuários a capturar imagens de forma adequada. Após o envio, os usuários podem visualizar os resultados dos diagnósticos, bem como acessar um histórico detalhado das plantas já diagnosticadas, promovendo organização e rastreamento das informações.

Os agrônomos têm a opção de fornecer feedback sobre os diagnósticos realizados pela IA, contribuindo diretamente para o retreinamento e aprimoramento contínuo do sistema. A interface foi desenvolvida utilizando as tecnologias **React Native e Expo**, que garantem uma experiência fluida, moderna e eficiente para diferentes dispositivos.

### **Camada lógica (Nest JS)**

A camada lógica, implementada com NestJS, é responsável por conectar o front-end, o banco de dados e a inteligência artificial (IA), garantindo a comunicação eficiente e o processamento de tarefas complexas. Sua função é essencial para orquestrar o fluxo de informações e assegurar que as operações sejam realizadas de forma confiável.

Entre suas principais funcionalidades está a autenticação e autorização de usuários, diferenciando os acessos de agricultores e agrônomos. Além disso, a camada processa as imagens enviadas pelos usuários, repassando-as para a IA realizar os diagnósticos de doenças em plantas, e gerencia o envio e recebimento dessas análises.

Essa camada também desempenha um papel importante na gestão de históricos, armazenando diagnósticos, imagens enviadas e feedbacks no banco de dados para futuras consultas. A integração com os feedbacks fornecidos por agrônomos permite o retreinamento contínuo do modelo de IA, melhorando sua precisão e relevância.

### **Camada de dados (PostgreSQL)**

O banco de dados desempenha um papel essencial no sistema, sendo responsável pela persistência e armazenamento das informações críticas que garantem o funcionamento da aplicação. Ele armazena os dados dos usuários, como agricultores e agrônomos, permitindo o gerenciamento eficiente de suas informações e interações.

Além disso, o banco de dados mantém um histórico dos diagnósticos realizados e das imagens enviadas, fornecendo uma base organizada para consultas futuras e análise de padrões. Os feedbacks fornecidos pelos agrônomos sobre os diagnósticos também são armazenados, auxiliando na melhoria contínua da precisão e eficácia da inteligência artificial.

Outro aspecto importante é o armazenamento das configurações da IA, permitindo ajustes e otimizações contínuas para adaptar o sistema às necessidades dos usuários. Essa estrutura de dados centralizada garante acessibilidade, segurança e escalabilidade para o sistema.

O diagrama a seguir (figura 3) ilustra a camada lógica adotada pelo grupo:

![Diagrama de Camada lógica](../assets/Diagramas/Diagrama%20de%20Camada%20lógica.jpg){: .imagem }

**<p class="ref">Figura 3** - Diagrama de Camada lógica (Nest JS): Elaboração própria (2024)</p>

Os tópicos abaixo detalham a estrutura do diagrama, explicando como os diferentes **componentes da camada lógica** do sistema estão organizados, o processamento das informações e a integração com o banco de dados e a inteligência artificial.

O **UserController** é o responsável por receber as requisições do front-end relacionadas aos usuários. Ele atua como um ponto de entrada para essas solicitações, garantindo que as entradas do usuário sejam validadas antes de qualquer processamento adicional. Além disso, sua principal função é encaminhar a lógica para a camada de serviço correspondente, mantendo o controlador simples e focado.

De forma semelhante, o **AuthController** desempenha o papel de gerenciar aspectos de autenticação e autorização do sistema. Ele lida diretamente com processos como login, geração de tokens e verificação de permissões, garantindo que apenas usuários autorizados tenham acesso aos recursos protegidos.

Para lidar com a lógica de negócios de forma eficiente, temos o **UserService** e o **AuthService**. O **UserService** funciona como uma camada intermediária entre o controlador e a camada de modelo (Model), centralizando todas as regras relacionadas a usuários. Ele evita que os controladores se tornem sobrecarregados com lógica complexa, garantindo que cada componente mantenha sua responsabilidade clara. Por outro lado, o **AuthService** se encarrega de todas as regras específicas de autenticação, como validação de credenciais, gerenciamento de tokens e lógica relacionada à segurança.

Já o **UserModel** e o **AuthModel** representam os dados no sistema e atuam diretamente com o banco de dados. Eles são responsáveis por realizar as operações de CRUD (Create, Read, Update, Delete), permitindo que a aplicação armazene e recupere informações de forma eficiente. Esses modelos servem como a ponte entre a aplicação e o banco de dados, garantindo que as interações sejam consistentes e seguras.

Dentro da arquitetura de três camadas, mostrada na figura 1, será utilizado o padrão arquitetural **MVC (Model-View-Controller)**, que complementa a arquitetura de três camadas ao dividir as responsabilidades de maneira:

![Diagrama de Padrão MVC](../assets/Diagramas/Diagrama%20padrão%20MVC.jpg){: .imagem }

**<p class="ref">Figura 4** - Diagrama de Padrão MVC: Elaboração própria (2024)</p>

- **Model:** Responsável pela manipulação de dados, realizando operações de leitura e escrita no banco de dados. Além disso, o Model interage com a Inteligência Artificial (IA) para realizar o processamento avançado das imagens. Esse processamento inclui a análise das imagens enviadas, extração de informações relevantes e execução de cálculos necessários para a identificação, classificação ou tratamento específico das imagens dentro do sistema.

- **View:** Representa a interface com o usuário, implementada na camada Front-End. É responsável por capturar as ações do usuário e exibir os resultados finais processados pelo sistema de forma clara, intuitiva e simples, visto o usuário que iremos trabalhar.

- **Controller:** O Controller é o que gerencia a lógica do sistema e é conectado à View, à IA e ao Model. Quando o usuário fotografa uma planta, o Controller envia a imagem à IA para diagnóstico. A IA analisa a imagem, identifica possíveis doenças e devolve o resultado ao Controller que exibe o diagnóstico na View. O usuário agrônomo pode fornecer feedback sobre a precisão que o Controller registra no Model, o que melhora o treinamento da IA. Assim, o Controller coordena o fluxo de dados entre a IA, o banco de dados e a interface, o que garante a eficiência no processo.

## Justificando nossa escolha

A escolha de adotar uma arquitetura de três camadas foi fundamentada na análise dos documentos "Visão do Produto e do Projeto" e "Declaração de Escopo do Produto", já entregues. Essa decisão foi tomada com o objetivo de criar uma estrutura mais simples, que facilite a integração com a Inteligência Artificial, a ferramenta principal do sistema, e atenda de maneira eficaz aos requisitos e funcionalidades descritos no escopo do produto.

A arquitetura em três camadas permite uma separação clara de responsabilidades, facilitando a comunicação entre a interface do usuário, o processamento das regras de negócio e o armazenamento de dados. Esse modelo é eficiente para o tipo de funcionalidade proposta, como o envio de imagens para diagnóstico via IA e o armazenamento do histórico de diagnósticos e feedbacks. Enquanto permite que a IA seja integrada de maneira contínua, garantindo que o sistema atenda às necessidades dos usuários finais (agrônomos e pequenos agricultores), conforme os requisitos levantados nas sprints.

## Detalhamento

O sistema **Cuidar Verde** segue o padrão arquitetural MVC (Model-View-Controller), garantindo modularidade, organização e escalabilidade. O padrão MVC organiza a implementação em três camadas interdependentes. A camada **Model**, conectada ao banco de dados **PostgreSQL**, gerencia informações como usuários, diagnósticos, feedbacks e históricos, permitindo a manipulação eficiente dos dados necessários. A View, desenvolvida com **React Native e Expo**, fornece a interface visual que exibe telas de login, diagnósticos e instruções para captura de imagens, oferecendo interatividade direta com o usuário. Por fim, a camada **Controller**, implementada em **NestJS**, intermedia a lógica de negócios entre Model e View, processando solicitações, integrando com a IA via **TensorFlow**, e retornando diagnósticos e feedbacks em tempo real. O fluxo harmonioso entre essas camadas garante eficiência, organização e escalabilidade ao software.

O diagrama na figura 5 mostra os detalhamentos do MVC, os principais componentes do sistema e suas responsabilidades:

![Diagrama de detalhamento do MVC](../assets/Diagramas/Diagrama%20de%20detalhamento%20do%20MVC.jpg){: .imagem }

**<p class="ref">Figura 5** - Diagrama de detalhamento do MVC: Elaboração Própria (2024)</p>

### Model (Modelo)

A camada **Model** é responsável pelo gerenciamento de dados, conexão com o banco de dados **PostgreSQL** e armazenamento de informações essenciais, onde o MVC está aplicado e onde vai ser implementado

#### Atributos

- **agrônomos:** Informações dos agrônomos cadastrados, incluindo validação **CREA.**
- **usuários:** Dados dos agricultores cadastrados.
- **diagnósticos:** Resultados das análises fornecidas pela IA.
- **feedbacks:** Avaliações feitas pelos agrônomos para otimizar a IA.
- **histórico_diagnósticos:** Registro das análises realizadas.
- **datasets_plants:** Base de dados para treinamento da IA, como **PlantVillage.**

#### Métodos

- criarUsuário(): Cadastra um novo usuário no sistema, salvando seus dados no banco.
- obterUsuário(): Busca as informações do usuário pelo ID ou e-mail.
- criarDiagnóstico(): Cria um novo registro de diagnóstico após análise da IA.
- obterDiagnósticos(): Recupera os diagnósticos existentes para o histórico do usuário.
- atualizarFeedback(): Atualiza o feedback fornecido pelo agrônomo.
- deletarRegistros(): Remove registros obsoletos ou inválidos.
- validarCREA():Valida o número do CREA para registro de um agrônomo.

### View (Visão/Interface)

A camada **View** é responsável pela interface com o usuário, desenvolvida em **React Native** e **Expo**, exibindo as funcionalidades principais do sistema.

#### Atributos

- **tela_login:** Interface de autenticação.
- **tela_cadastro:** Interface para cadastro de usuários.
- **tela_seleção_planta:** Permite ao usuário escolher a planta para diagnóstico.
- **tela_diagnóstico:** Exibe o resultado da análise da IA.
- **tela_histórico:** Histórico de diagnósticos recentes.
- **tela_feedback:** Interface para envio de feedbacks.
- **tela_instrução_foto:** Oferece instruções para captura correta de imagens.

#### Métodos

- exibirLogin(): Renderiza a tela de login.
- exibirCadastro(): Renderiza a tela de cadastro para novos usuários.
- exibirSeleçãoPlanta(): Apresenta as opções de plantas para análise.
- exibirDiagnóstico(): Mostra o diagnóstico retornado pela IA.
- mostrarHistórico(): Exibe o histórico de diagnósticos do usuário.
- capturarFeedback(): Interface para agrônomos fornecerem feedbacks.
- exibirInstruções(): Mostra instruções visuais e textuais para captura de fotos.

### Controller (Controlador)

A camada **Controller** centraliza a lógica de negócios, comunicando **Model** e **View**, além de integrar a IA com o backend (NestJS).

#### Atributos

- api_diagnóstico: Processa imagens e interage com a IA (TensorFlow).
- api_usuário: Gerencia informações dos usuários.
- api_feedback: Processa feedbacks fornecidos pelos agrônomos.
- api_IA: Integra a biblioteca TensorFlow para execução do modelo.

#### Métodos

- processarLogin(): Valida credenciais de usuário e autentica no sistema.
- cadastrarUsuário(): Processa o cadastro de novos usuários (agrônomos ou agricultores).
- processarDiagnóstico(): Envia a imagem para a IA e retorna o diagnóstico ao usuário.
- salvarDiagnóstico(): Salva o resultado retornado pela IA no banco de dados.
- atualizarFeedback(): Registra feedbacks dos agrônomos.
- listarHistórico(): Busca o histórico de diagnósticos do usuário.
- enviarParaIA(): Encaminha imagens processadas para análise pela IA.
- retornarResultadoIA(): Recebe o diagnóstico processado e o retorna à interface.

### MAP_VIEW (Tela de Seleção e Histórico)

**Função:** Interface onde o usuário seleciona a planta para diagnóstico ou visualiza os diagnósticos anteriores.

#### Atributos:

- size, scale, origin, map

#### Métodos:

- set_size() → Ajusta o tamanho da interface de acordo com o dispositivo.
- set_scale() → Modifica o zoom da interface para melhor visualização.
- set_origin() → Define o ponto de origem onde os elementos da tela serão exibidos.
- set_default() → Restaura as configurações padrão da tela.
- update_location() → Atualiza a lista de diagnósticos ou a planta selecionada.

### BRIDGE_VIEW (Tela de Diagnóstico e Feedback)

**Função:** Tela principal onde o envio de imagens é realizado e os diagnósticos são exibidos. Permite também o feedback de agrônomos.

#### Atributos:

- owner_name, map

#### Métodos:

- draw() → Exibe o resultado do diagnóstico, como nome da doença e explicação.
- update_remove() → Remove resultados antigos ou temporários.
- clear() → Limpa a interface para novo envio ou nova análise.
- update_location() → Atualiza a posição do diagnóstico exibido.
- update_course() → Ajusta os resultados conforme feedback de agrônomos.

### SAILING_VIEW (Tela de Instruções de Uso)

**Função:** Exibe guias e instruções detalhadas para ajudar o usuário a capturar imagens de qualidade para a análise da IA.

#### Atributos:

- map

#### Métodos:

- draw() → Mostra o guia visual com dicas para tirar a foto corretamente.
- update_remove() → Remove mensagens de erro ou dicas antigas da interface.
- clear() → Reseta a tela para exibir as instruções novamente.
- update_fuel() → Atualiza as mensagens com dicas específicas, como foco ou iluminação.
- update_course() → Fornece ajustes de ângulo ou posição da planta.
- update_speed() → Fornece instruções rápidas e otimizadas para captura.
