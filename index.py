from flask import Flask
from flask import render_template,request
import requests 
import json 
import webbrowser

app = Flask(__name__,template_folder="templates")


@app.get("/")
def index():
    f = r"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    data = requests.get(f)
    tt = json.loads(data.text)
    #webbrowser.open(tt["url"])
    
    for i in (tt["drinks"]):
        print(i, "\n")
    print(len(tt["drinks"]))    
    return render_template("index.html",tt=tt,data=data)






if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")