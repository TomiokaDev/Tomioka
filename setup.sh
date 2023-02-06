#!/bin/bash
clear
sudo apt update
echo "Repositorios actualizados"
sudo apt -y upgrade
echo "Sistema actualizado"
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_19.x | sudo -E bash -
sudo apt-get -y install nodejs
echo "Node instalado"
npm i
echo "Dependencias actualizadas"
npm i forever -g
echo "forever instalado"
clear
echo "Copyright © TomiokaBot Development 2019 - 2022. All rights reserved."