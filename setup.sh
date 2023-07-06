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
clear
echo "Copyright © TomiokaBot Development 2019 - 2022. All rights reserved."