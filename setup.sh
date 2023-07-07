#!/bin/bash

# TomiokaBot Setup Script
# Coded by: @SupahFox
clear
sudo apt update
echo "Repositorios actualizados"
sudo apt -y upgrade
echo "Sistema actualizado"
sudo apt-get -y install nodejs
echo "Node instalado"
npm i
echo "Dependencias actualizadas"
npm i forever -g
echo "forever instalado"
echo "Instalando dependencias de python"
pip install OpenAIAuth
pip install python-dotenv
clear
echo "Copyright © TomiokaBot Development 2019 - 2023. All rights reserved."
