from flask import Flask
import flask
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    return "Hello, World!"


@app.route("/cards", methods=["GET"])
def cards():
    print("cards info reached...")
    with open("data.json", "r") as f:
        data = json.load(f)
        data.append(
            {
                "name": "Sol Ring",
                "manaCost": "{1}",
                "imageUri": "https://cards.scryfall.io/small/front/4/6/46ca0b66-a000-4483-b916-f5b89e710244.jpg?1689999818",
            }
        )
        return flask.jsonify(data)


if __name__ == "__main__":
    app.run("localhost")
