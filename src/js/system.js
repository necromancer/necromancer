/*----------------------------------
----------SYSTEM FUNCTIONS----------
------------------------------------*/
var app = require('electron').remote;
const fs = require("fs");
var path = require('path');

// Exit from Necromancer
function exitApp(){
var confirmExit = confirm("Are you sure do you want to exit?");
if (confirmExit == true) {
  window.close();
}
}

// Loading animation
function initLoading(){
  ;
  (function() {
      function id(v) {
          return document.getElementById(v);
      }

      function loadbar() {
          var ovrl = id("overlay"),
              prog = id("progress"),
              stat = id("progstat"),
              img = document.images,
              c = 0,
              tot = img.length;
          if (tot == 0) return doneLoading();

          function imgLoaded() {
              c += 1;
              var perc = ((100 / tot * c) << 0) + "%";
              prog.style.width = perc;
              stat.innerHTML = "Loading " + perc;
              if (c === tot) return doneLoading();
          }

          function doneLoading() {
              ovrl.style.opacity = 0;
              setTimeout(function() {
                  ovrl.style.display = "none";
              }, 1200);
          }
          for (var i = 0; i < tot; i++) {
              var tImg = new Image();
              tImg.onload = imgLoaded;
              tImg.onerror = imgLoaded;
              tImg.src = img[i].src;
          }
      }
      document.addEventListener('DOMContentLoaded', loadbar, false);
  }());
}


// Profile settings functions
function nextImageProfile(){
actualPlayerImageProfile++;
document.getElementById('PlayerImageProfile').src = "./img/faces/face"+actualPlayerImageProfile+".png";
}

function previousImageProfile(){
  actualPlayerImageProfile--;
  document.getElementById('PlayerImageProfile').src = "./img/faces/face"+actualPlayerImageProfile+".png";
}

function savePlayerProfile(){
// Input fields
var playerName = document.getElementById('playerName').value;

var settings = `{
    "PlayerName": "${playerName}",
    "PlayerImageProfile": ${actualPlayerImageProfile}
}`;

  fs.writeFile("settings.json", settings, function(err) {
    if(err) {
        alert("error");
    }
});
}

function readPlayerProfile(){
  // Read settings.json file and parse it
  var filePath = path.join(__dirname, '..', 'src', 'settings.json');
  settings = JSON.parse(fs.readFileSync(filePath, "utf8"));

  // Input fields
  var inputPlayerName = document.getElementById('playerName');
  var inputPlayerImageProfile = document.getElementById('PlayerImageProfile');


  // Apply information
  inputPlayerName.value = settings.PlayerName; // For settings window
  inputPlayerName.innerHTML = settings.PlayerName; // For SinglePlayer
  inputPlayerImageProfile.src = "./img/faces/face"+settings.PlayerImageProfile+".png";

  actualPlayerImageProfile = settings.PlayerImageProfile;

}

// Change the menu when detect a change in the screen size
function printDeck(row) {
   var types = ["fire","water","air","earth"];

    for (var i = 0; i < 4; i++) {
      var filePath = path.join(__dirname, '..', 'src', 'resources',types[i]+'Cards.json');
      var cards = JSON.parse(fs.readFileSync(filePath, "utf8"));


      //Create card
      var card = document.createElement("div");
      card.setAttribute("id", cards[row].id);
      card.setAttribute("class", "card");
      card.setAttribute("ElementalType", cards[row].ElementalType);

      // Card's element
      var img = document.createElement("img");
      img.setAttribute("src", "img/cards/"+cards[row].image);
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


// *NOT IN USE* Change battlefield background
var totalCount = 3;
function ChangeIt(){
var num = Math.ceil( Math.random() * totalCount );
document.body.background = '../img/backgrounds/bg'+num+'.png';
document.body.style.backgroundRepeat = "repeat";// Background repeat
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
