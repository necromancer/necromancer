// System dependencies
const app = require('electron').remote;
const fs = require("fs");
const path = require('path');

// Decks diretory 
const decksFolder = path.join(__dirname, 'decks');

// -- LOAD SETTINGS ---
// Read settings.json file and parse it
const settingsFile = path.join(__dirname, '..', 'settings.json');
const settingsFileJSON = JSON.parse(fs.readFileSync(settingsFile, "utf8"));

// Load Player Name
var playerName = settingsFileJSON.PlayerName;

// Load Player Image Profile
var playerImageProfile = settingsFileJSON.PlayerImageProfile;

// Load selected Deck
gameDeck =  settingsFileJSON.GameDeck;



/*----------------------------------
----------SYSTEM FUNCTIONS----------
------------------------------------*/

// Exit from Necromancer
function exitApp(){
var confirmExit = confirm("Are you sure do you want to exit?");
if (confirmExit == true) {
  window.close();
}
}

// Profile settings functions
var actualPlayerImageProfile = playerImageProfile;
function nextImageProfile(){
actualPlayerImageProfile++;
document.getElementById('PlayerImageProfile').src = "./img/faces/face"+actualPlayerImageProfile+".png";
}

function previousImageProfile(){
  actualPlayerImageProfile--;
  document.getElementById('PlayerImageProfile').src = "./img/faces/face"+actualPlayerImageProfile+".png";
}

function savePlayerProfile(){
// Collect new values from fields
var newPlayerName = document.getElementById('playerName').value;
var newPlayerImageProfile = actualPlayerImageProfile;
var newDeck = inputDeck.value;

// Compose the new settings file
var newSettings = `{
    "PlayerName": "${newPlayerName}",
    "PlayerImageProfile": ${newPlayerImageProfile},
    "GameDeck": "${newDeck}"
}`;

// Write
  fs.writeFile("settings.json", newSettings, function(err) {
    if(err) {
        alert("Error writing settings json file.");
    }
});
}


function printDeck(row) {
   var types = ["fire","water","air","earth"];

    for (var i = 0; i < 4; i++) {
      var filePath = path.join(__dirname, '..', 'src', 'decks',gameDeck,types[i]+'Cards.json');
      var cards = JSON.parse(fs.readFileSync(filePath, "utf8"));


      //Create card
      var card = document.createElement("div");
      card.setAttribute("id", cards[row].id);
      card.setAttribute("class", "card");
      card.setAttribute("ElementalType", cards[row].ElementalType);

      // Card's element
      var img = document.createElement("img");
      img.setAttribute("src", "decks/"+gameDeck+"/img/"+cards[row].image);
      img.setAttribute("alt", "card");

      var life = document.createElement("div");
      life.setAttribute("class", "life-indicator");
      life.innerHTML = cards[row].life;

      var attack = document.createElement("div");
      attack.setAttribute("class", "attack-indicator");
      attack.innerHTML = cards[row].attack;

      var cost = document.createElement("div");
      cost.setAttribute("class", "cost-indicator");
      cost.innerHTML = cards[row].cost;

      // Append elements to card
      card.appendChild(img);
      card.appendChild(life);
      card.appendChild(attack);
      card.appendChild(cost);

      //  Append default function to card
      card.addEventListener("click",  function(){ selectDeckCard(this); });

      // Print into DOM
      document.getElementById('cards-deck').appendChild(card);
    }
    document.getElementById('cards-deck').appendChild(document.createElement("br"));

  }

function closeWindow(element) {
    element.parentElement.parentElement.style.display = "none";
}

function openOptions() {
   document.getElementById('options').style.display = "block";
}

// register onLoad event with anonymous function
window.onload = function (e) {
    var evt = e || window.event,// define event (cross browser)
        imgs,                   // images collection
        i;                      // used in local loop
    // if preventDefault exists, then define onmousedown event handlers
    if (evt.preventDefault) {
        // collect all images on the page
        imgs = document.getElementsByTagName('img');
        // loop through fetched images
        for (i = 0; i < imgs.length; i++) {
            // and define onmousedown event handler
            imgs[i].onmousedown = disableDragging;
        }
    }
};

// disable image dragging
function disableDragging(e) {
    e.preventDefault();
}

function firstToUpperCase( str ) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
}
