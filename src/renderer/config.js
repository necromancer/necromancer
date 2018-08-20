/*---------------------- 
---- APP SETTINGS ------
-----------------------*/

// Get settings file
var settings = require('../../settings.json');


/*  LOCALES  */
// Get selected lang
var selectedLang = settings.lang;
// Load selected lang file
var selectedLocales = require(`../locales/${selectedLang}.json`);

/*  DECK  */
// Get selected deck
var selectedDeck = settings.gameDeck;

/*  PORFILE  */
var name = settings.playerName;

export default {
    lang: selectedLang,
    locale: selectedLocales,
    deck:selectedDeck,
    playerName: name
}