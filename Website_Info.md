Big Idea:
During COVID-19, many individuals often found themselves bored. To entertain themselves, they would do activites based on a random generator. For example, a Tiktok trend of going to walmart and randomly pulling a DVD movie from their pile of movies and picking random snacks through an isle while blind folded went viral. Our Team, Krishna and Brandon, wanted to create a simple random generator of alcholic cocktails that people can make when they're bored. 

*Include Screenshot of Project*

The random generator will include
1) Name of the Drink
2) Image
3) Brief descripition of the Drink
4) List of Ingredients
5) Measurements of each Ingredients

Read Me:

1) If you are viewing this via github in order to use this you can do pip install -r requirements.txt 
2) Then set flask_app=app and do flask run in terminal
3) The type of data set we leveraged was - The Cocktail Database API (Can be found at https://www.thecocktaildb.com/
    In this project we utilized flask a web framework in python to render information in a dynamic html pages. 
4) We utilized the render templates function within flask in order to render html pages where we dispalyed a countdown timer built in javascript and a randomized cocktail with image,ingredients,quantities,and special instructions for data was pulled from the api. 
5) The specific information such as cocktail name and thumbnail image was passed to the index html page via flask. 

Implementation Infomation:

*Diagram Representing how the Code works*
1) Request information from Public API (do not need a API KEY)
2) 