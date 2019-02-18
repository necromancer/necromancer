// Read JSON
var cards = require(`./cards.json`);

// Elemental card's objects
var fireCards = filterCards('fire');
var waterCards = filterCards('water');
var airCards = filterCards('air');
var earthCards = filterCards('earth');
var deathCards = filterCards('death');


// Filter cards by elemental
function filterCards(elemental) {
    return cards.filter(function(u) {
        return u.ElementalType == elemental
        })
}

export default {
    fireCards,
    waterCards,
    airCards,
    earthCards,
    deathCards
}