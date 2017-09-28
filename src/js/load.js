// -- APPLY INFORMATION TO DOM
//HTML Input fields
const inputPlayerName = document.getElementById('playerName');
const inputPlayerImageProfile = document.getElementById('PlayerImageProfile');
const inputDeck = document.getElementById("deckSelection");
/*----------------------------------
----------LOAD  USER DATA ----------
------------------------------------*/

// Apply Name
inputPlayerName.value = settingsFileJSON.PlayerName; // For settings window
inputPlayerName.innerHTML = settingsFileJSON.PlayerName; // For SinglePlayer

// Apply profile Image
inputPlayerImageProfile.src = "./img/faces/face"+settingsFileJSON.PlayerImageProfile+".png";

// Apply decks
// Get a list of installed decks
const installedDecks = [];
fs.readdirSync(decksFolder).forEach(file => {
installedDecks.push(file);
})

// Fill select with avaible decks and selected saved deck
for (var i = 0; i < installedDecks.length; i++) {
    if(installedDecks[i] == gameDeck){
        inputDeck.innerHTML += "<option selected>"+installedDecks[i]+"</option>";
    }else{
        inputDeck.innerHTML += "<option>"+installedDecks[i]+"</option>";
    }
}
