/*----------------------------------------
---------IA Bot for single player---------
------------------------------------------*/
// Enemy file cards
var filePath = path.join(__dirname, '..', 'src', 'resources','enemyCards.json');
var enemyCards = JSON.parse(fs.readFileSync(filePath, "utf8"));

// EnemyMna (Fire,Water,Air,Earth)
var enemyMana = [5, 5, 5, 5];
var enemyManaNames = ["fire", "water", "air", "earth"];

function moveCardIa() {
slot = undefined;
    // Read the Battlefield
    readBattlefield();

    //Choose the best free slot
    for (var i = 0; i < 6; i++) {
      if (activeSlots[i] !== undefined && EnemyActiveSlots[i] == undefined) {
        slot = i;
        break;
      }
    }

    if (typeof slot == 'undefined') {
      for (var i = 0; i < 6; i++) {
        if (EnemyActiveSlots[i] == undefined) {
          slot = i;
          break;
        }
      }
    }

    if (typeof slot == 'undefined') {
       setTimeout(function(){ startIaFightTurn(); }, 1000);
      return false;
    }



    // Choose random Elemental
    var elementalType = Math.floor(Math.random() * 3) + 0;

    // Create array with avaible cards, medium cards and the best cards
    var avaibleCards = [];
    var mediumCards = [];
    var bestCards = [];

    // Clasify avaible cards
    for (i = 0; i < enemyCards.length; i++) {
        if (enemyCards[i].cost <= enemyMana[elementalType] && enemyCards[i].ElementalType == enemyManaNames[elementalType]) {
            avaibleCards.push(enemyCards[i].id);

            if (enemyCards[i].attack == 3 && enemyCards[i].life > 12) {
                mediumCards.push(enemyCards[i].id);
            }

            if (enemyCards[i].attack >= 4 && enemyCards[i].life >= 18) {
                bestCards.push(enemyCards[i].id);
            }
        }
    }

    // Decide how powerful would be the card
    if (typeof bestCards[0] !== 'undefined') {
        //print best
        var cardVector = findCardById(bestCards[0]);
        printCard(slot, cardVector);
    }
    else {
      if (typeof mediumCards[0] !== 'undefined') {
        //print medium
        var cardVector = findCardById(mediumCards[0]);
        printCard(slot, cardVector);
      }else {
        //print avaible
        var cardVector = findCardById(avaibleCards[0]);
        printCard(slot, cardVector);
      }
    }

    //Take out the mana
    enemyMana[elementalType] -= enemyCards[cardVector].cost;

    //Increase all manas at the end of turn
    enemyMana[0] += 1;
    enemyMana[1] += 1;
    enemyMana[2] += 1;
    enemyMana[3] += 1;

    // Start fight turn
    startIaFightTurn();
}

function startIaFightTurn() {
    console.log("IA ATTACK");
    for (var i = 0; i < 6; i++) {
        if (EnemyActiveSlots[i] != undefined){

            attackAnimationCard(EnemyActiveSlots[i],EnemyCardsAttacks[i]);   

            if (activeSlots[i] == EnemyActiveSlots[i] + 6) {
                var actualLife = document.getElementById('space' + activeSlots[i]).getElementsByClassName('life-indicator')[0].innerHTML;
                var newLife = actualLife - EnemyCardsAttacks[i];
                if (newLife <= 0) {
                    document.getElementById('space' + activeSlots[i]).innerHTML = "<img src='img/blank.png' alt=''>";
                } else {
                    document.getElementById('space' + activeSlots[i]).getElementsByClassName('life-indicator')[0].innerHTML = newLife;
                }
                console.log("Attack to Card: -" + EnemyCardsAttacks[i]);
            }
            if (activeSlots[i] === undefined && EnemyActiveSlots[i] !== undefined) {
                console.log("Attack to Owner: -" + EnemyCardsAttacks[i]);
                playerLife -= EnemyCardsAttacks[i];
                document.getElementById("player-life").innerHTML = playerLife;
            }
    }
    }
    inncreasePlayerMana();
}

function printCard(slot, cardVector) {
    //Create card
    var card = document.createElement("div");
    card.setAttribute("id", enemyCards[cardVector].id);
    card.setAttribute("class", "card");
    card.setAttribute("ElementalType", enemyCards[cardVector].ElementalType);

    // Card's element
    var img = document.createElement("img");
    img.setAttribute("src", "img/cards/" + enemyCards[cardVector].image);
    img.setAttribute("alt", "card");

    var life = document.createElement("div");
    life.setAttribute("class", "life-indicator");
    life.innerHTML = enemyCards[cardVector].life;

    var attack = document.createElement("div");
    attack.setAttribute("class", "attack-indicator");
    attack.innerHTML = enemyCards[cardVector].attack;

    var cost = document.createElement("div");
    cost.setAttribute("class", "cost-indicator");
    cost.innerHTML = enemyCards[cardVector].cost;

    // Append elements to card
    card.appendChild(img);
    card.appendChild(life);
    card.appendChild(attack);
    card.appendChild(cost);

    //  Append default function to card
    card.addEventListener("click", function() {
        selectDeckCard(this);
    });

    // Alert player
    alert("Enemy is going to summon "+enemyCards[cardVector].id);

    // Print into DOM
    document.getElementById('space' + (slot+1)).innerHTML = card.innerHTML;

}


function findCardById(id) {
for (var i = 0; i < enemyCards.length; i++) {
  if (enemyCards[i].id == id) {
    return i;
  }
}
}
