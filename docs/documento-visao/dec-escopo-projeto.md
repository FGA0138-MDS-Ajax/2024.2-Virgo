# Declaração de Escopo do Projeto

### MVP: Escopo e Funcionalidades Essenciais

| ID   | Eu como...       | Gostaria de...                                         | Para...                                                     | Válida | Prioridade de |
| ---- | ---------------- | ------------------------------------------------------ | ----------------------------------------------------------- | ------ | ------------- |
| US01 | Usuário          | Me cadastrar no aplicativo                             | Necessidade / Benefício                                     | Sim    | Must          |
| US02 | Usuário          | Logar no aplicativo                                    | Necessidade / Benefício                                     | Sim    | Must          |
| US03 | Usuário          | Recuperar a senha, caso eu esqueça                     | Recuperar os dados do usuário                               | Sim    | Must          |
| US04 | Usuário          | Sair da minha conta                                    | Poder sair da conta no dispositivo                          | Sim    | Must          |
| US06 | Usuário          | Tirar uma foto da planta                               | Identificar sua doença                                      | Sim    | Must          |
| US07 | Usuário          | Utilizar uma foto do meu celular                       | Facilitar e agilizar o processo de análise                  | Sim    | Must          |
| US08 | Usuário          | Ver um histórico das últimas 10 plantas                | Evitar fotos repetidas                                      | Sim    | Should        |
| US09 | Usuário          | Ter um feedback caso a foto tenha problemas            | Saiba que preciso enviar uma nova foto                      | Sim    | Must          |
| US10 | Usuário          | Ser informado se a foto contém objetos irrelevantes    | Melhorar a qualidade da imagem e evitar erro de diagnóstico | Sim    | Must          |
| US11 | Usuário          | Ter uma instrução de como tirar foto                   | Garantir que a imagem seja processada corretamente pela IA  | Sim    | Must          |
| US12 | Usuário          | Um guia de enquadramento da foto                       | Saber como posicionar a planta na câmera                    | Sim    | Must          |
| US13 | Usuário          | Tirar a foto novamente, caso a primeira tenha problema | Capturar uma segunda imagem mais adequada                   | Sim    | Must          |
| US14 | Usuário Agrônomo | Informar se o diagnóstico foi correto                  | Melhorar a precisão da IA                                   | Sim    | Must          |
| US18 | Usuário          | Saber como a planta pode adquirir uma doença           | Prevenir isso de alguma forma                               | Sim    | Should        |
| US19 | Usuário          | Ter uma IA capaz de analisar fotos de planta           | Identificar doenças automaticamente                         | Sim    | Must          |
| US20 | Usuário          | Ter acesso aos relatórios da IA                        | Compreender quão performática é a IA                        | Sim    | Must          |

### Diagrama por Blocos do MVP

### Perfis

| #   | Nome do perfil | Característica(s) do perfil                                                                                       | Permissões de acesso |
| --- | -------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------- |
| 1   | Usuário        | Capacidade de envio de fotos e requisição de identificação de doenças; login simples com e-mail e senha.          |                      |
| 2   | Agrônomo       | Capacidade de envio de fotos, requisição de identificação, envio de feedback e cadastro após verificação do CREA. |                      |

### Cenários

**Tabela: Cenários funcionais**

| Numeração do cenário | Nome do cenário                                                           | Sprints   |
| -------------------- | ------------------------------------------------------------------------- | --------- |
| 01                   | Cadastro e Login de Usuário                                               | Sprint 03 |
| 02                   | Validação de Cadastro de Agrônomos                                        | Sprint 03 |
| 03                   | Recuperação de senha                                                      | Sprint 03 |
| 04                   | Validação de Imagem Não-Apta para Análise                                 | Sprint 03 |
| 07                   | Seleção de planta                                                         | Sprint 05 |
| 08                   | Instrução de como tirar foto                                              | Sprint 05 |
| 09                   | Tirar foto da planta                                                      | Sprint 05 |
| 10                   | Identificar a doença                                                      | Sprint 05 |
| 11                   | Utilizar imagem da galeria de fotos                                       | Sprint 05 |
| 12                   | Sistema de Feedback para Melhorar a IA                                    | Sprint 06 |
| 13                   | Validação de Imagem Não-Apta para Análise                                 | Sprint 06 |
| 14                   | Feedback positivo ou negativo do agrônomo em relação ao diagnóstico da IA | Sprint 06 |
| 15                   | Guia de enquadramento da foto                                             | Sprint 06 |
| 16                   | Histórico de plantas                                                      | Sprint 06 |
| 17                   | Rejeição de imagens que não sejam plantas                                 | Sprint 07 |
| 18                   | Histórico de plantas                                                      | Sprint 07 |
| 19                   | Logout                                                                    | Sprint 08 |
| 20                   | Diagnóstico de origem da contaminação da planta                           | Sprint 08 |

### Tabela de Backlog do produto

**Tabela : Backlog do produto**
