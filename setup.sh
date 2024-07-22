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
sudo npm i -g pnpm
pnpm i
echo "Dependencias actualizadas"
sudo pnpm i forever
echo "forever instalado"
echo "Instalando dependencias de python"
pip install -r requirements.txt
clear
echo "Copyright © TomiokaBot Development 2019 - 2023. All rights reserved."
