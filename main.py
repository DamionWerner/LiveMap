import firebase_admin
from firebase_admin import db
import json
import datetime

cred_obj = firebase_admin.credentials.Certificate(
    "./firebase-credentials.json"
)
default_app = firebase_admin.initialize_app(
    cred_obj,
    {
        "databaseURL": "https://livemap-a9cb2-default-rtdb.europe-west1.firebasedatabase.app/"
    },
)
ref = db.reference("/")

location = {
        'lat': 47.6577775,
        'lon': 9.452870,
        'time': datetime.datetime.now().timestamp()
}
ref.push().set(location)
