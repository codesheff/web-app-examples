#!/usr/bin/env python3

""" This provides the api to get data from unsplash"""

import os
import requests
from flask import Flask, request
## nb , request from flask module allows us to handle requests from clients
##      requests module allows us to create requests to another server
from dotenv import load_dotenv
from flask_cors import CORS


this_dir=os.path.dirname(os.path.abspath(__file__))
dotenv_path=os.path.join(this_dir,".env.local")

load_dotenv(dotenv_path=dotenv_path)

UNSPLASH_URL='https://api.unsplash.com/photos/random'
UNSPLASH_KEY=os.environ.get("UNSPLASH_KEY", "")
DEBUG=os.environ.get("DEBUG",False)
if not UNSPLASH_KEY:
    raise EnvironmentError("Please create .env.local and insert UNSPLASH_KEY=<your key>")


app = Flask(__name__)
CORS(app)

app.config["DEBUG"] = DEBUG

@app.route("/new-image")
def new_image():
    """Get a new image"""
    word = request.args.get("query")
    headers = {
        "Authorization"  :  "Client-ID "+ UNSPLASH_KEY,
        "Accept-Version" : "v1"
    }
    params = {
        "query" : word
    }
    response = requests.get(url=UNSPLASH_URL,headers=headers,params=params,timeout=10)

    data = response.json()
    return data


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
