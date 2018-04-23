import pandas as pd
from flask import Flask, request
from flask import render_template
from flask_cors import CORS, cross_origin
#from flask_restful import Resource, Api
from json import dumps
#from flask_jsonpify import jsonify

app = Flask(__name__)
#api = Api(app)

#CORS(app)

@app.route("/")
def index():
    df = pd.read_csv('src/app/veggies.csv',names=['Fruits_vegetables', 'portion_size', 'price', 'calories'])
    return df.to_json(orient='records')


@app.route("/data")
def get_data():
    df = pd.read_csv('src/app/veggies.csv',names=['Fruits_vegetables', 'portion_size', 'price', 'calories'])
    return df.to_json(orient='records')


if __name__ == '__main__':
    app.run(port=5002)







