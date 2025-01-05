O escopo do sistema Virgo está centrado em fornecer uma solução prática e acessível para pequenos e médios agricultores identificarem doenças em plantas, representado pela figura 6. A proposta utiliza inteligência artificial para análise de imagens, promovendo um diagnóstico mais preciso e ações preventivas. Este sistema se destaca pela integração de funcionalidades como captura de imagens via câmera ou galeria e o uso de dados históricos para consultas rápidas.

O diagrama de casos de uso, descrito nesta seção, detalha as interações principais do usuário com o sistema, abrangendo tarefas essenciais como cadastro, envio de imagens, diagnósticos, e feedbacks de agrônomos para o aprendizado contínuo da IA (diagrama). Essas interações seguem um fluxo simples e direto, projetado para facilitar o uso por agricultores com diferentes níveis de familiaridade tecnológica.

De maneira geral, o funcionamento do sistema envolve:

1. O usuário acessa a aplicação (mediante login ou cadastro).
2. Tira uma foto ou seleciona uma da galeria.
3. A IA processa a imagem, identifica possíveis doenças e retorna um diagnóstico.
4. O feedback dos agrônomos é integrado para refinar o modelo da IA.
5. O histórico de diagnósticos é armazenado e acessível para consultas futuras.

O sistema é compatível com dispositivos móveis modernos e foi projetado para funcionar mesmo em ambientes com recursos limitados, priorizando eficiência e acessibilidade. Referências adicionais ao diagrama de casos de uso podem ser encontradas na página específica do documento de Declaração de Escopo.

A escolha da **arquitetura de três camadas (Three-Tier Architecture)** foi feita devida sua simplicidade e atendimento às necessidades. A necessidade de uma interface simples para facilitar o entendimento do público, e a demanda de integrar uma base de dados relacional, gerenciada via PostgreSQL, e por frameworks de machine learning como TensorFlow, que oferecem suporte avançado para processamento de imagens. Essas decisões foram tomadas considerando os requisitos de desempenho da IA, como alta precisão no diagnóstico e tempos de resposta adequados para os agricultores. A equipe teve contato anteriormente com algumas das ferramentas de projeto escolhidas, como NestJs, React, Expo, PostGreSQL. Por outro lado existem tecnologias sendo exploradas pela primeira vez neste projeto, parte da equipe está aprofundando estudos em Axios para realizar a integração, TensorFlow para aprendizado de máquina e também realizando estudos sobre as doenças exploradas pela PlantVillage Dataset.

O diagrama representado na figura 6 mostra o caso de uso para um usuário classificado como Agricultor:

![DiagramaDeCaso de uso 1](../assets/Diagramas/Diagrama%20Caso%20de%20uso%201.png)

**<p class="ref">Figura 6** - Sistema I: Aplicativo Mobile - Agricultor - Fonte: Elaboração Própria (2024)</p>

O diagrama a seguir mostra o caso de uso para um usuário classificado como Agrônomo:

![DiagramaDeCaso de uso 2](../assets/Diagramas/Diagrama%20caso%20de%20uso%202.png)

**<p class="ref">Figura 7** - Sistema II: Aplicativo Mobile - Caso Agrônomo - Fonte: Elaboração Própria (2024)</p>
