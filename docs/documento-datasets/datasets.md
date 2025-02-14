# Documentação dos Datasets

## Introdução

Este documento descreve os datasets utilizados no desenvolvimento da inteligência artificial para identificação de doenças em plantas. Os dados foram coletados de diversas fontes confiáveis e organizados em um novo dataset armazenado em um arquivo no Drive. Todas as imagens foram processadas para o tamanho de 256x256 pixels para treinamento da IA.

## Datasets Utilizados

## **EMBRAPA (Mandioca)**

O dataset da Embrapa foi utilizado para mandioca, contendo as seguintes classes de doenças:

Ácaro

Antracnose

Bacteriose

Mancha Branca

Mancha Parda

Mosaico Comum

Mosaico Nervuras

Oídio

Podridão das Raízes

Queima Folhas

Mandioca Saudável

## **Banana LSD Dataset e Plant Village (Banana)**

Os datasets Banana LSD e Plant Village foram utilizados para banana, contendo as seguintes classes:

Doença do Mal do Panamá

Doença Moko

Fungo Cordana

Fungo Pestalotiopsis

Peste ou Praga dos Insetos

Sigatoka Amarela

Sigatoka Fungo

Banana Saudável

## **PlantVillage e Strawberry Disease Detectio Dataset (Morango)**

Os datasets PlantVillage e Strawberry Disease Detection foram utilizados para morango, contendo as seguintes classes:

Folha Queimada

Mancha Angular da Folha

Mancha Foliar

Mofo Cinza

Oídio

Podridão de Frutas Antracnose

Praga das Flores

Morango Saudável

## **Embrapa e Guava Dataset (Goiaba)**

Os datasets da Embrapa e do Guava Dataset foram utilizados para goiaba, contendo as seguintes classes de doenças:

Antracnose

Cancro de Goiaba pelo Fungo Pestalotiopsis

Crosta

Ferrugem

Ferrugem Vermelha

Fungo Phytopthora

Fungo Stylar end Rot

Mumificação

Goiaba Saudável

## **PlantVillage (Tomate)**

O dataset PlantVillage do Kaggle foi utilizado para tomate, contendo as seguintes classes de doenças:

Vírus do Enrolamento Amarelo das Folhas

Vírus do Mosaico

Mancha Bacteriana

Mancha Foliar Septoria

Molho da Folha

Requeima Precoce-Pinta Preta

Requeima Tardia

Tomate Saudável

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

O dataset final foi consolidado e armazenado em um arquivo no Drive, garantindo organização e facilidade de acesso durante o treinamento da IA. Segue o Link do Drive com todos datasets reformulados e filtrados sendo escolhidos em nível de formato, qualidade de imagem e conteúdo da foto. 🔗 [Dataset da IA](https://drive.google.com/drive/folders/1xheFInUv5SsiZZHpMW11Cw4LXRu9RMDp?usp=sharing)

## Referências

**EMBRAPA
**PLANTVILLAGE. Kaggle\*\* - Plant Disease Dataset. Disponível em: [https://www.kaggle.com/datasets/emmarex/plantdisease](https://www.kaggle.com/datasets/emmarex/plantdisease) Acesso em: 9 fev. 2025.

**DRYAD. Dataset de Doenças em Soja.** Disponível em: [https://datadryad.org/stash/dataset/doi:10.5061/dryad.41ns1rnj3](https://datadryad.org/stash/dataset/doi:10.5061/dryad.41ns1rnj3) Acesso em: 9 fev. 2025.

**KAGGLE. Lettuce Diseases Dataset.** Disponível em: [https://www.kaggle.com/datasets/ashishjstar/lettuce-diseases](https://www.kaggle.com/datasets/ashishjstar/lettuce-diseases) Acesso em: 9 fev. 2025.
EMBRAPA. Base de Dados de Doenças Agrícolas. Disponível em: https://www.embrapa.br Acesso em: 9 fev. 2025.

**KAGGLE. PlantVillage Dataset.** - Tomate. Disponível em: https://www.kaggle.com/datasets/abdallahalidev/plantvillage-dataset Acesso em: 9 fev. 2025.

**KAGGLE. Guava Disease Dataset** - Goiaba. Disponível em: https://www.kaggle.com/datasets/omkarmanohardalvi/guava-disease-dataset-4-types Acesso em: 9 fev. 2025.

**KAGGLE. Guava Dataset - Goiaba.** Disponível em: https://www.kaggle.com/datasets/noamaanabdulazeem/guava-dataset Acesso em: 9 fev. 2025.

**KAGGLE. Strawberry Disease Detection Dataset - Morango.** Disponível em: https://www.kaggle.com/datasets/usmanafzaal/strawberry-disease-detection-dataset Acesso em: 9 fev. 2025.

**KAGGLE. Banana LSD Dataset - Banana.** Disponível em: https://www.kaggle.com/datasets/shifatearman/bananalsd Acesso em: 9 fev. 2025.

**EMBRAPA. Base de Dados de Doenças da Mandioca.** Disponível em: https://www.redape.dados.embrapa.br/dataset.xhtml?persistentId=doi:10.48432/XA1OVL Acesso em: 9 fev. 2025.

**ROBOFLOW. Roboflow Universe** - Plant Diseases. Disponível em: [https://universe.roboflow.com/](https://universe.roboflow.com/) Acesso em: 9 fev. 2025.
