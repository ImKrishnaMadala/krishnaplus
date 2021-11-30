
function recommend() {
    var randomJuice = Math.floor(Math.random()*myRecommendations.length);
    document.getElementById('juiceDisplay').innerHTML = myRecommendations[randomJuice];
  }
  
  
  var myRecommendations = [
    "Apple Juice",
    "Orange Juice",
    "Strawberry Juice",
    "Beet Juice",
    "Pineapple Juice"
  ];
  