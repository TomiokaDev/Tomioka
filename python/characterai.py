# TomiokaBot
# By: @SupahFox
# Description: character.ai integration

# TODO: ESTA COSA
from characterai import PyCAI
from dotenv import load_dotenv
load_dotenv()
import os

token = os.getenv("CHARACTERAI_TOKEN")
client = PyCAI(token)
while True:
    message = input('You: ')
    
    data = client.chat.send_message('CHAR', message)
    
    message = data['replies'][0]['text']
    name = data['src_char']['participant']['name']
    
    print(f"{name}: {message}")
