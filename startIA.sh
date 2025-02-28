#!/bin/bash

set -e  # Para parar o script se qualquer comando falhar
echo ==========================================
echo         Iniciando a IA...      
echo ==========================================

echo "Entrando no ./AI..."
if [ ! -d "AI" ]; then
    echo "Erro: diretorio AI não encontrado."
    exit 1
fi
cd AI

echo "Verificando Python..."
if command -v python3 &> /dev/null; then
    PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
    PYTHON_CMD="python"
else
    echo "Erro: Python nao encontrado. Instale o Python e tente novamente."
    exit 1
fi

echo "Criando ambiente virtual..."
$PYTHON_CMD -m venv .venv || { echo "Erro ao criar o ambiente virtual."; exit 1; }

echo "Ativando ambiente virtual..."
source .venv/bin/activate || { echo "Erro ao ativar o ambiente virtual."; exit 1; }

echo "Instalando dependencias..."
pip3 install -r requirements.txt || { echo "Erro ao instalar dependencias."; exit 1; }

echo "Instalando python-multipart..."
pip3 install python-multipart || { echo "Erro ao instalar python-multipart."; exit 1; }

echo "Entrando no diretorio ./API..."
if [ ! -d "api" ]; then
    echo "Erro: Diretorio api nao encontrado."
    exit 1
fi
cd api

echo "Iniciando a IA..."
$PYTHON_CMD main.py || { echo "Erro ao iniciar a IA."; exit 1; }
