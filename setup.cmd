@echo on
call npm i
call npm i -g forever
call pip install -r requirements.txt 
echo "Copyright © TomiokaBot Development 2019 - 2023. All rights reserved."
echo "Press enter to exit"
set /p input=