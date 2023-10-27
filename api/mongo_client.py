"""
Connection for the mongo database
"""

import os
from pymongo import MongoClient
from dotenv import load_dotenv

this_dir = os.path.dirname(os.path.abspath(__file__))
dotenv_path = os.path.join(this_dir, ".env.local")
load_dotenv(dotenv_path=dotenv_path)

MONGO_URL = os.environ.get("MONGO_URL", "mongo")
MONGO_USERNAME = os.environ.get("MONGO_USERNAME", "root")
MONGO_PASSWORD = os.environ.get("MONGO_PASSWORD", "")
MONGO_PORT = os.environ.get("MONGO_PORT", 27017)


mongo_client = MongoClient(
    host=MONGO_URL,
    username=MONGO_USERNAME,
    password=MONGO_PASSWORD,
    port=MONGO_PORT,
)


def insert_test_document():
    """Insert sample document in test db."""
    db = mongo_client.test
    test_collection = db.test_collection
    res = test_collection.insert_one({"name": "Ste", "confused": "often"})
    print(res)
