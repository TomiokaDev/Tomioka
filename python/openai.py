# TomiokaBot
# Autor: @SupahFox
# Description: ChatGPT accessToken grabber

from OpenAIAuth import Auth0
# Declarar para leer envs
from dotenv import load_dotenv
load_dotenv()
import os
auth = Auth0(email=os.getenv("OPENAI_EMAIL"), password=os.getenv("OPENAI_PASSWORD"))
access_token = auth.get_access_token()
print(access_token)
