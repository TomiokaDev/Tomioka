@echo on
call npm install -g pnpm
call pnpm i
call pnpm i -g forever
call pip install -r requirements.txt 
echo "Copyright © TomiokaBot Development 2019 - 2024. All rights reserved."
echo "Press enter to exit"
set /p input=