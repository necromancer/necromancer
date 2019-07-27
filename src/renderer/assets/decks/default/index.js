// Read JSON
var cards = require(`./cards.json`);

// Elemental card's objects
var fireCards = shuffle(filterCards('fire')).slice(0,4).sort((a, b) => a.cost - b.cost);
var waterCards = shuffle(filterCards('water')).slice(0,4).sort((a, b) => a.cost - b.cost);
var airCards = shuffle(filterCards('air')).slice(0,4).sort((a, b) => a.cost - b.cost);
var earthCards = shuffle(filterCards('earth')).slice(0,4).sort((a, b) => a.cost - b.cost);
var deathCards = shuffle(filterCards('death')).slice(0,4).sort((a, b) => a.cost - b.cost);


// Filter cards by elemental
function filterCards(elemental) {
    return cards.filter(function(u) {
        return u.ElementalType == elemental
        })
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

export default {
    fireCards,
    waterCards,
    airCards,
    earthCards,
    deathCards
}