
function recommend() {
    var randomJuice = Math.floor(Math.random()*myRecommendations.length);
    document.getElementById('juiceDisplay').innerHTML = myRecommendations[randomJuice];
  }
  
  
  var myRecommendations = [
    "Tequila sunrise,orange juice,tequila,grenadine",
    "rustaveli,chacha,vermouth,cynar,absinthe",
    "burrata cocktail,gin,lemon juice,gomme syrup,burrata water",
    "ramos gin fizz,gin,orange blossom water,egg white,half and half,lemon juice,lime juice,simple syrup,ice,seltzer",
    "mr. pink,rum,lime juice,campari,pineapple juice,simple syrup,egg white",
    "bee to the blossom,gin,lemon,honey syrup,yellow chartreuse,orange bitters",
    "spring fling,tequila,grapefruit juice,lime juice,orgeat,simple syrup,peychaud's bitters",
    "fly french 75,gin,cava,lemon juice,simple syrup",
    "strawberry fields,tequila,lime juice,agave syrup,strawberry,basil",
    "southern revival,whiskey,passionfruit puree,simple syrup,lemon juice,basil,ginger ale",
    "mastro's lavender collins,lavender gin,triple sec,lavender syrup,lemon juice",
    "ladybug,brandy,lime,orgeat,dale gegroff bitters",
    "easter egg hunt martini,vanilla vodka,triple sec,milk,orange juice,egg white",
    "what's up doc,vodka,carrot juice,lime juice,simple syrup,ginger beer",
    "dark and stormy,rum,ginger beer",
    "white russian,vodka,half and half,kahlua",
    "negroni,gin,vermouth,campari",
    "mojito,white rum,lime juice,mint,simple syrup,seltzer",
    "caipirinha,cachaca,lime,sugar"
  ];
  