
# pymongo is install in virtualenv: couchdb
from pymongo  import MongoClient
from datetime import datetime


rclient = MongoClient(port=9017)
rdb     = rclient.test
rrest   = rdb["restaurants"]


