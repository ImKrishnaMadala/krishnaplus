from flask import Flask, render_template
import requests 
import json 
import webbrowser

app = Flask(__name__,template_folder="templates")

@app.route("/")
def index():
    f = r"https://www.thecocktaildb.com/api/json/v1/1/random.php"
    data = requests.get(f)
    #name = data['drinks'][0]['strDrink']
    #image = data['drinks'][0]['strDrinkThumb']
    ingredients = []
    measures = []
    #instructions = data['drinks'][0]['strInstructions']
    for i in range(1, 16):
        ingredients.append(data['drinks'][0][f'strIngredient{i}'])
        measures.append(data['drinks'][0][f'strMeasure{i}'])
       
    return render_template("index.html", name=name, image=image, ingredients=ingredients, measures=measures, instructions=instructions)





if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")