If you are viewing this via github in order to use this you can do pip install -r requirements.txt 

Then set flask_app=index and do flask run. 

Data set leveraged - The Cocktail Database API (Can be found at https://www.thecocktaildb.com/)

In this project we utilized flask a web framework in python to render information in a dynamic html pages. 

We utilized the render templates function within flask in order to render html pages where we dispalyed a countdown timer built in javascript and a randomized cocktail with image,ingredients,quantities,and special instructions for data was pulled from the api. 

The specific information such as cocktail name and thumbnail image was passed to the index html page via flask. 