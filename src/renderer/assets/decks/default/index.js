// Read JSON
var cards = require(`./cards.json`);

// Elemental card's objects
var fireCards = shuffle(filterCards('fire'));
var waterCards = shuffle(filterCards('water'));
var airCards = shuffle(filterCards('air'));
var earthCards = shuffle(filterCards('earth'));
var deathCards = shuffle(filterCards('death'));


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