import firebase_admin
from firebase_admin import db
import json
import datetime

cred_obj = firebase_admin.credentials.Certificate(
    "./livemap-a9cb2-firebase-adminsdk-b1wqw-05b34ad07c.json"
)
default_app = firebase_admin.initialize_app(
    cred_obj,
    {
        "databaseURL": "https://livemap-a9cb2-default-rtdb.europe-west1.firebasedatabase.app/"
    },
)
ref = db.reference("/")

location = {
        'lat': 47.662440,
        'lon': 9.448082,
        'time': datetime.datetime.now().timestamp()
}
ref.push().set(location)
