@echo off
setlocal enabledelayedexpansion

echo ==========================================
echo  Iniciando a IA pfv nao feche o terminal...
echo ==========================================

echo Verificando ./AI...
if not exist "AI" (
    echo Erro: O diretorio "./AI" não foi encontrado.
    exit /b 1
)
cd AI

echo Verificando instalacao do Python...
where python >nul 2>nul
if %errorlevel% neq 0 (
    echo Erro: Python nao encontrado! Instale o Python e tente novamente.
    exit /b 1
)

echo Criando ambiente virtual...
python -m venv .venv
if %errorlevel% neq 0 (
    echo Erro ao criar o ambiente virtual.
    exit /b 1
)

echo Ativando ambiente virtual...
call .\.venv\Scripts\activate
if %errorlevel% neq 0 (
    echo Erro ao ativar o ambiente virtual.
    exit /b 1
)

echo Instalando dependencias...
pip install -r requirements.txt
if %errorlevel% neq 0 (
    echo Erro ao instalar dependencias.
    exit /b 1
)

echo Instalando python-multipart...
pip install python-multipart
if %errorlevel% neq 0 (
    echo Erro ao instalar python-multipart.
    exit /b 1
)

echo Verificando diretorio ./api...
if not exist "api" (
    echo Erro: O diretório "./api" não foi encontrado.
    exit /b 1
)
cd api

echo Iniciando a IA...
python main.py
if %errorlevel% neq 0 (
    echo Erro ao iniciar a IA.
    exit /b 1
)

