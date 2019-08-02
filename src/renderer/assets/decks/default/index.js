/*
  _____            _               _                  _ _   _               
 |  __ \          | |        /\   | |                (_) | | |              
 | |  | | ___  ___| | __    /  \  | | __ _  ___  _ __ _| |_| |__  _ __ ___  
 | |  | |/ _ \/ __| |/ /   / /\ \ | |/ _` |/ _ \| '__| | __| '_ \| '_ ` _ \ 
 | |__| |  __/ (__|   <   / ____ \| | (_| | (_) | |  | | |_| | | | | | | | |
 |_____/ \___|\___|_|\_\ /_/    \_\_|\__, |\___/|_|  |_|\__|_| |_|_| |_| |_|
                                      __/ |                                 
                                     |___/                                  
*/

// Read JSON
var cards = require(`./cards.json`);

// *** ALGORITHM ***
function getCards() {
  let decks = [];

  // Elemental card's objects
  var fireCards = shuffle(filterCards('fire')).slice(0, 4).sort((a, b) => a.cost - b.cost);
  var waterCards = shuffle(filterCards('water')).slice(0, 4).sort((a, b) => a.cost - b.cost);
  var airCards = shuffle(filterCards('air')).slice(0, 4).sort((a, b) => a.cost - b.cost);
  var earthCards = shuffle(filterCards('earth')).slice(0, 4).sort((a, b) => a.cost - b.cost);
  var deathCards = shuffle(filterCards('death')).slice(0, 4).sort((a, b) => a.cost - b.cost);

  let deckA = {fireCards,waterCards,airCards,earthCards,deathCards};
  
  decks.push(deckA);
  decks.push(deckA);

  return decks;
}

// *** USEFUL FUNCTIONS ***
// Filter cards by elemental
function filterCards(elemental) {
  return cards.filter(function (u) {
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
  getCards
}