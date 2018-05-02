/*---------------------- 
---- APP SETTINGS ------
-----------------------*/

// Get settings file
var settings = require('../../settings.json');

// Get selected lang
var selectedLang = settings.lang;

// Load selected lang file
var selectedLocales = require(`../locales/${selectedLang}.json`);

export default {
    lang: selectedLang,
    locale: selectedLocales
}