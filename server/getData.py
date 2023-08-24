import requests
import json


url = "https://api.scryfall.com/cards/named?"
datas = {"fuzzy": "craterhoof"}

res = requests.get(url, params=datas).json()

modRes = {}
modRes["name"] = res["name"]
modRes["manaCost"] = res["mana_cost"]
modRes["imageUri"] = res["image_uris"]["small"]

print(modRes)

data = []
data.append(modRes)
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=4)
