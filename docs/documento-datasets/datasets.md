# Documentação dos Datasets

## Introdução

Este documento descreve os datasets utilizados no desenvolvimento da inteligência artificial para identificação de doenças em plantas. Os dados foram coletados de diversas fontes confiáveis e organizados em um novo dataset armazenado em um arquivo no Drive. Todas as imagens foram processadas para o tamanho de 256x256 pixels para treinamento da IA.

##Datasets Utilizados

### **PlantVillage (Milho)**

O dataset PlantVillage do Kaggle foi utilizado para o treinamento da IA na detecção de doenças no milho. As classes de doenças identificadas incluem:

Míldio

Mancha Marrom

Mancha Foliar Norte

Mancha Cercospora

Ferrugem

Milho Saudável

### **Dryad (Soja)**


Os dados de soja foram extraídos de um dataset do site Dryad, contendo as seguintes classes de doenças:

Cercospora

Crestamento

Deficiência de Potássio

Ferrugem

Forgeye

Mancha Alvo

Míldio

Soja Saudável

### **Lettuce Diseases (Alface)**

O dataset Lettuce Diseases do Kaggle foi utilizado para alface, contendo as seguintes classes:

Mancha Foliar

Míldio

Queima das Bordas

Saudável

Septoria

### **Roboflow (Alho)**

Para o alho, utilizamos vários datasets presentes no Roboflow, que é uma plataforma de treinamento de modelos para detecção de diversos tipos. Em nosso datase temos as seguintes classes:

Xanthomas

Míldio

Mancha Stephylium

Mancha Púrpura

Ferrugem

Botrytis

## Processamento de Dados

Para garantir um padrão uniforme e otimizar o treinamento da IA, todas as imagens foram redimensionadas para 256x256 pixels. Além disso, foram realizados processos de normalização e augmentação para melhorar a generalização do modelo.

## Armazenamento

O dataset final foi consolidado e armazenado em um arquivo no Drive, garantindo organização e facilidade de acesso durante o treinamento da IA.

## Referências

**PLANTVILLAGE. Kaggle** - Plant Disease Dataset. Disponível em: [https://www.kaggle.com/datasets/emmarex/plantdisease](https://www.kaggle.com/datasets/emmarex/plantdisease) Acesso em: 9 fev. 2025.

**DRYAD. Dataset de Doenças em Soja.** Disponível em: [https://datadryad.org/stash/dataset/doi:10.5061/dryad.41ns1rnj3](https://datadryad.org/stash/dataset/doi:10.5061/dryad.41ns1rnj3) Acesso em: 9 fev. 2025.

**KAGGLE. Lettuce Diseases Dataset.** Disponível em: [https://www.kaggle.com/datasets/ashishjstar/lettuce-diseases](https://www.kaggle.com/datasets/ashishjstar/lettuce-diseases) Acesso em: 9 fev. 2025.

**ROBOFLOW. Roboflow Universe** - Plant Diseases. Disponível em: [https://universe.roboflow.com/](https://universe.roboflow.com/) Acesso em: 9 fev. 2025.

