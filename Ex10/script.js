/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
let adj = ["Crazy", "Amazing", "Fire"]
let shopName = ["Engine", "Foods", "Garments"]
let anoWord = ["Bros", "Limited", "Hub"]
let first, second, third;
let rand = Math.random()
if(rand < 0.33){
    first = adj[0]
}
else if(rand < 0.66 && rand >= 0.33){
    first = adj[1]
}
else{
    first = adj[2]
}
rand = Math.random()
if(rand < 0.33){
    second = shopName[0]
}
else if(rand < 0.66 && rand >= 0.33){
    second = shopName[1]
}
else{
    second = shopName[2]
}
rand = Math.random()
if(rand < 0.33){
    third = anoWord[0]
}
else if(rand < 0.66 && rand >= 0.33){
    third = anoWord[1]
}
else{
    third = anoWord[2]
}
console.log(`${first} ${second} ${third}`)