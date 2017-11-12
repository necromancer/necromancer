/*----------------------------------------
---------GENERAL GAME FUNCTIONS-----------
------------------------------------------*/

// Read the battlefield and return cards position and attack of both players
function readBattlefield() {
    activeSlots = [];
    cardsAttacks = [];

    EnemyActiveSlots = [];
    EnemyCardsAttacks = [];


    // Player Active Cards
    for (var i = 7; i < 13; i++) {
        if (document.getElementById('space' + i).getElementsByTagName('img')[0].alt == "card") {
            var attack = parseInt(document.getElementById('space' + i).getElementsByClassName('attack-indicator')[0].innerHTML);
            activeSlots.push(i);
            cardsAttacks.push(attack);
        } else {
            activeSlots.push(undefined);
            cardsAttacks.push(undefined);
        }
    }
    console.log("-----------CARDS---------");
    console.log("Player:");
    console.log(activeSlots);
    console.log(cardsAttacks);



    // Enemy Active Cards
    for (var i = 1; i < 7; i++) {
        if (document.getElementById('space' + i).getElementsByTagName('img')[0].alt == "card") {
            var attack = parseInt(document.getElementById('space' + i).getElementsByClassName('attack-indicator')[0].innerHTML);
            EnemyActiveSlots.push(i);
            EnemyCardsAttacks.push(attack);
        } else {
            EnemyActiveSlots.push(undefined);
            EnemyCardsAttacks.push(undefined);
        }
    }
    console.log("Enemy:");
    console.log(EnemyActiveSlots);
    console.log(EnemyCardsAttacks);
    console.log("---------ATTACKS----------");

}



// Playing functions for selecting and moving cards
var selectedCard = undefined;
var cardSelected = false;

function selectDeckCard(card) {
    if (card.getAttribute("available") !== "false") {


        if (selectedCard == undefined) {
            selectedCard = card.id;
        }
        document.getElementById(selectedCard).getElementsByTagName('img')[0].style = "";
        document.getElementById(selectedCard).style = "";
        card.getElementsByTagName('img')[0].style = "-webkit-box-shadow: 0px 0px 54px 0px rgba(0,145,148,1);-moz-box-shadow: 0px 0px 54px 0px rgba(68,145,148,1);box-shadow: 0px 0px 54px 0px rgba(68,145,148,1);";

        selectedCard = card.id;
        cardSelected = true;
    }
}

var playerTurn = true;
function moveCard(space) {
    if (cardSelected == true && playerTurn == true) {
        switchPlayerTurn(false);            
        var numberOfCards = 0;
        for (var i = 1; i < 12; i++) {
            if (document.getElementById('space' + i).getElementsByTagName('img')[0].alt == "card") {
                numberOfCards++;
            }
        }

        if (numberOfCards != 0) {
            startPlayerFightTurn();
        }

        var manaCosts = parseInt(document.getElementById(selectedCard).getElementsByClassName('cost-indicator')[0].innerHTML);
        var manaElementalType = document.getElementById(selectedCard).getAttribute("elementaltype");
        decreaseMana(manaCosts,manaElementalType);

        space.innerHTML = document.getElementById(selectedCard).innerHTML;
        space.getElementsByTagName('img')[0].style = "";
        document.getElementById(selectedCard).getElementsByTagName('img')[0].style = "";
        selectedCard = undefined;                
        cardSelected = false;
    }
}

function attackAnimationCard(card,num){
        var attackAnimation = document.createElement('h3');
        attackAnimation.innerHTML = "-" + num;
        attackAnimation.style = "position:absolute;top:140%;color:red;z-index:9999;";
        attackAnimation.className = "aTa";
        document.getElementById('space' + card).appendChild(attackAnimation);
        $('#space' + card).animateCss('bounce');
        $('#space' + card).find('h3').animateCss('fadeOutUp');
}

function calcMana(elementaltype) {
    // Manas
    var manaAmount = parseInt(document.getElementById(elementaltype + 'Mana').innerHTML);
    //Cards
    var allCards = document.getElementById('cards-deck').getElementsByClassName('card');

    // Calc Mana
    for (var i = 0; i < allCards.length; i++) {
        if (allCards[i].getAttribute("elementaltype") == elementaltype) {
            if (parseInt(allCards[i].getElementsByClassName('cost-indicator')[0].innerHTML) > manaAmount) {
                allCards[i].style = "-webkit-filter: grayscale(100%);";
                allCards[i].setAttribute("available", "false");
            } else {
                allCards[i].style = "";
                allCards[i].setAttribute("available", "true");
            }
        }
    }
}

function randombetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setInitialMana() {
    var max = 20;
    var mana1 = randombetween(1, max - 13);
    var mana2 = randombetween(1, max - 12 - mana1);
    var mana3 = randombetween(1, max - 11 - mana1 - mana2);
    var mana4 = max - mana1 - mana2 - mana3;

    document.getElementById('fireMana').innerHTML = mana1;
    document.getElementById('waterMana').innerHTML = mana2;
    document.getElementById('airMana').innerHTML = mana3;
    document.getElementById('earthMana').innerHTML = mana4;
    calcMana("fire");
    calcMana("water");
    calcMana("air");
    calcMana("earth");
}

function inncreasePlayerMana(){
  document.getElementById('fireMana').innerHTML = parseInt(document.getElementById('fireMana').innerHTML)+1;
  document.getElementById('waterMana').innerHTML = parseInt(  document.getElementById('waterMana').innerHTML)+1;
  document.getElementById('airMana').innerHTML = parseInt(document.getElementById('airMana').innerHTML)+1;
  document.getElementById('earthMana').innerHTML = parseInt(document.getElementById('earthMana').innerHTML)+1;
  calcMana("fire");
  calcMana("water");
  calcMana("air");
  calcMana("earth");
}

function decreaseMana(points,elementaltype){
  document.getElementById(elementaltype+'Mana').innerHTML = parseInt(document.getElementById(elementaltype+'Mana').innerHTML)-points;
}

function checkLife (player){
    var life = eval(player+"Life");
    if (life <= 0){
        alert(player+" has lost the duel");
        location.href='index.html';
    }   
}

function switchPlayerTurn (status){
   playerTurn =  status;
}

function skipTurn (){
    switchPlayerTurn(false);
    startPlayerFightTurn();
}