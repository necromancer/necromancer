<template>
    <div id="wrapper">
        <div class="enemy-bar">
            <img class="enemy-bar-profile" src="~@/assets/img/faces/enemy.png" alt="">
            <h4>Strahdor {{ AIlife }}</h4>
        </div>
        <div id="battlefield" class="battlefield">
            <!-- AI Spaces-->
            <Space 
            v-for="(card, index) in AIspaces"
            :key="index"
            :elementaltype="card.elementaltype"
            :src="require('./../assets/decks/default/img/'+card.img)"
            :cardSrc="require('./../assets/decks/default/img/'+card.cardSrc)"
            :id="card.id"
            :ref="card.id"
            :life="card.life"
            :attack="card.attack"
            :cost="card.cost">
            </Space>

            <br><br><br><br>

            <!-- Player Play Spaces-->
            <Space 
            v-for="(card, index) in playerSpaces"
            :key="index+6"
            v-on:click.native="moveCard(card,astralGameFlux);"
            :elementaltype="card.elementaltype"
            :src="require('./../assets/decks/default/img/'+card.img)"
            :cardSrc="require('./../assets/decks/default/img/'+card.cardSrc)"
            :id="card.id"
            :ref="card.id"
            :life="card.life"
            :attack="card.attack"
            :cost="card.cost">
            </Space>
        </div>
        <div class="player-bar w3-light-grey">
            <div id="player-life" class="w3-green" style="width:100%"></div>
            <img id="PlayerImageProfile" class="player-bar-profile" v-bind:src="playerImage" alt="">

            <h4 id="playerName">{{ playerName }} {{ playerLife }}</h4>
            
                <img v-on:click="skipTurn();" src="~@/assets/img/skipTurn.png" alt="" style="top: 7px;width: 2.5%;position: absolute;right:0px;">
            
        </div>
        <div id="cards-deck" class="cards-deck">

            <!-- FIRE CARDS -->
            <div class="card-column">
                <Mana :elementaltype="locales.ElementalFire" :value="playerMana[0].value"></Mana>
                <Card 
                    v-for="(card, index) in cards.fireCards"
                    :key="index"
                    v-on:click.native="selectDeckCard(card);"
                    :elementaltype="card.elementaltype"
                    :available="true"
                    :src="require('./../assets/decks/default/img/'+card.img)"
                    :id="card.id"
                    :ref="card.id"
                    :life="card.life"
                    :attack="card.attack"
                    :cost="card.cost">
                </Card>
            </div>

            <!-- WATER CARDS -->
            <div class="card-column">
                <Mana :elementaltype="locales.ElementalWater" :value="playerMana[1].value"></Mana>
                <Card 
                    v-for="(card, index) in cards.waterCards"
                    :key="index"
                    v-on:click.native="selectDeckCard(card);"
                    :elementaltype="card.elementaltype"
                    :available="true"
                    :src="require('./../assets/decks/default/img/'+card.img)"
                    :id="card.id"
                    :ref="card.id"
                    :life="card.life"
                    :attack="card.attack"
                    :cost="card.cost">
                </Card>
            </div>


            <!-- AIR CARDS -->
            <div class="card-column">
                <Mana :elementaltype="locales.ElementalAir" :value="playerMana[2].value"></Mana>
                <Card 
                    v-for="(card, index) in cards.airCards"
                    :key="index"
                    v-on:click.native="selectDeckCard(card);"
                    :elementaltype="card.elementaltype"
                    :available="true"
                    :src="require('./../assets/decks/default/img/'+card.img)"
                    :id="card.id"
                    :ref="card.id"
                    :life="card.life"
                    :attack="card.attack"
                    :cost="card.cost">
                </Card>
            </div>

            <!-- EARTH CARDS -->
            <div class="card-column">
                <Mana :elementaltype="locales.ElementalEarth" :value="playerMana[3].value"></Mana>
                <Card 
                    v-for="(card, index) in cards.earthCards"
                    :key="index"
                    v-on:click.native="selectDeckCard(card);"
                    :elementaltype="card.elementaltype"
                    :available="true"
                    :src="require('./../assets/decks/default/img/'+card.img)"
                    :id="card.id"
                    :ref="card.id"
                    :life="card.life"
                    :attack="card.attack"
                    :cost="card.cost">
                </Card>
            </div>

            <!-- CUSTOM ELEMENTAL -->
            <div class="card-column">
                <Mana :elementaltype="locales.ElementalDeath" :value="playerMana[4].value"></Mana>
                <Card 
                    v-for="(card, index) in cards.deathCards"
                    :key="index"
                    v-on:click.native="selectDeckCard(card);"
                    :elementaltype="card.elementaltype"
                    :available="true"
                    :src="require('./../assets/decks/default/img/'+card.img)"
                    :id="card.id"
                    :ref="card.id"
                    :life="card.life"
                    :attack="card.attack"
                    :cost="card.cost">
                </Card>
            </div>

        </div>
    </div>
</template>

<script>
// Modules
import Velocity from 'velocity-animate'
var log = require('electron-log');

// Mixes
import manaJS from './../../mixins/mana.js'
import spacesJS from './../../mixins/spaces.js'

// Deck
import cards from  '../assets/decks/default/index.js'

// Game Components
import Card from './../components/game/Card.vue'
import Space from './../components/game/Space.vue'
import Mana from './../components/game/Mana.vue'

export default {
    props:["locales","globalMethods","gameDeck","settings"],
    components: {
        Card,
        Space,
        Mana
    },
    data() {
        return {
        playerName: this.settings.playerName,
        playerImage:require("./../assets/img/faces/face" +2+".png"),
        cards:{
            fireCards: cards.fireCards,
            waterCards: cards.waterCards,
            airCards: cards.airCards,
            earthCards: cards.earthCards,
            deathCards: cards.deathCards,  
        },
        playerSpaces: spacesJS.playerSpaces,
        AIspaces: spacesJS.AISpaces,
        playerLife: 60,
        AIlife: 60,
        playerMana: manaJS.mana,
        AIMana: manaJS.mana,
        turn: Boolean(Math.round(Math.random()))
        };
    },
    watch: {
        turn: function(){
            if (this.turn == false){
                this.AI();
            }
        },
        playerLife: function () {
            if (this.playerLife <= 0){
                alert("You lose");
                this.$router.push("landing-page");
            }
        },
        AIlife: function () {
            if (this.AIlife <= 0){
                alert("You win");
                this.$router.push("landing-page");
            }
        }
    },
    methods: {
        escapeKeyListener: function(evt) {
            if (evt.keyCode === 27) {
            this.globalMethods.exitMainMenu();
            }
        },
        skipTurn: function (){
            // Skip Turn
            try {
                //const switchTurnStatus = await vm.switchTurn();
                log.info(`Skipped turn`);
                this.astralGameFlux();
            } catch (err) {
                return log.info('Error: '+err.message);
            }
        },
        selectDeckCard: function(cardObj) {
                // Actual selected card
                let card = cardObj.id;
                
                if (this.selectedCard != undefined){
                    this.$refs[this.selectedCard.id][0].selected = false;
                }
             
                // Only if selected card is avaible
                //if (card.available !== "false") {

                    // Store selected card
                    this.selectedCard = cardObj;
                    this.cardSelected = true;

                    // Select style for player
                    if (this.turn == true){
                        this.$refs[cardObj.id][0].selected = true;
                    }

                    // Log
                    log.info(`Selected ${cardObj.id} card (${cardObj.ElementalType})`);

                //}        
        },
        moveCard: function (spaceObj,astralFluxCallback) {
            // Target space
            var space = spaceObj;

            // If there's a selected card and is player's turn
            if (this.cardSelected == true) {

                // Cost of the card
                var manaCosts = this.selectedCard.cost;

                // Elemental Type of the Card
                var manaElementalType = this.selectedCard.ElementalType;

                // Move card (by reactive Vue DOM)
                spaceObj.img = this.selectedCard.img;
                spaceObj.ElementalType = this.selectedCard.ElementalType;
                spaceObj.life = this.selectedCard.life;
                spaceObj.cost = this.selectedCard.cost;
                spaceObj.attack = this.selectedCard.attack;
                spaceObj.cardSrc = "card.png";

                // Log
                log.info(`Moved ${this.selectedCard.id} card  to ${space.id}`);

                // Left the mana
                if(this.turn){
                    var target = this.playerMana;
                }else{
                    var target = this.AIMana;
                }
                
                this.decreaseMana(target,manaElementalType,manaCosts);
                

                // Clear style
                space.style = "";

                if (this.turn == true){
                    this.$refs[this.selectedCard.id][0].selected = false;
                }


                // Clear selectedCard
                this.selectedCard = undefined;
                this.cardSelected = false;

                // Start astral flux control
                astralFluxCallback();
            }
        },
        astralGameConsole: function (mode){
            
            const promise = new Promise(function (resolve, reject) {
                if (mode =="init"){
                var text = "(Init) Astral Console";
                }else{
                var text = "(End) Hi! I'm the Astral Console";
                }
                resolve(text);

                if (!text) {
                    reject(new Error('Error with Astral Console'));
                }
            })
  
            return promise;
        },
        astralGameFlux: async function (){

            // Execute init AstralConsole turn
            try {
                const initConsole = await this.astralGameConsole('init');
                log.info(initConsole);
            } catch (err) {
                return log.info('Error: '+err.message);
            }
            
            // Fight Turn
            try {
                var fightTurn = await this.fightTurn(this.turn);
                log.info(fightTurn);
            } catch (err) {
                return log.info('Error: '+err.message);
            }

            // Execute end AstralConsole turn
            try {
                const initConsole = await this.astralGameConsole('end');
                log.info(initConsole);
            } catch (err) {
                return log.info('Error: '+err.message);
            }

            // Switch Turn
            try {
                const switchTurnStatus = await this.switchTurn();
                log.info(switchTurnStatus);
            } catch (err) {
                return log.info('Error: '+err.message);
            }

        },
        switchTurn: function (){

            var vm = this;

            const promise = new Promise(function (resolve, reject) {
                var text = 'Switched turn';
                vm.turn = !vm.turn;
                resolve(text);

                if (!text) {
                    reject(new Error('Error switching turn'));
                }
            })
  
            return promise;
        },
        fightTurn: function (turn){
            // View Model for scoped context
            var vm = this;

            const promise = new Promise(function (resolve, reject) {
                // Log
                log.info(`--- Started fight turn ---`);
                let lifeResult;

                if (turn == true){
                    // Walk spaces
                    for (var i = 0; i < vm.AIspaces.length; i++) {
                    
                        let spaceHTML = document.getElementById(vm.playerSpaces[i].id);
                        let id = vm.playerSpaces[i].id;

                        // If space with card against empty
                        if(vm.playerSpaces[i].attack != null && vm.AIspaces[i].attack == null ){
                            vm.AIlife -= vm.playerSpaces[i].attack;

                            // Animate (todo: create a specific function with attack values)
                            vm.$refs[id][0].animate("attack up");
                        }
                        // If space with card against card
                        if (vm.playerSpaces[i].attack != null && vm.AIspaces[i].attack != null){
                            
                            lifeResult = vm.AIspaces[i].life - vm.playerSpaces[i].attack;
                            
                            if (lifeResult > 0){
                                vm.AIspaces[i].life -= vm.playerSpaces[i].attack;

                            }else {
                                let space = {};
                                space.id = `space${i+1}`;
                                space.type = "card";
                                space.ElementalType = "";
                                space.img = "charBlank.png";
                                space.cardSrc = "blank.png";
                                space.life = null;
                                space.attack = null;
                                space.cost = null;
                                vm.AIspaces[i] = space;
                            }
                            
                            // Animate (todo: create a specific function with attack values)
                            vm.$refs[id][0].animate("attack up");
 

                        }
                    }
                }else{
                    // Walk spaces
                    for (var i = 0; i < vm.playerSpaces.length; i++) {
                    
                        let spaceHTML = document.getElementById(vm.AIspaces[i].id);
                        let id = vm.AIspaces[i].id;

                        // If space with card against empty
                        if(vm.AIspaces[i].attack != null && vm.playerSpaces[i].attack == null ){
                            vm.playerLife -= vm.AIspaces[i].attack;

                            // Animate (todo: create a specific function with attack values)
                            vm.$refs[id][0].animate("attack down");
                        }
                        // If space with card against card
                        if (vm.AIspaces[i].attack != null && vm.playerSpaces[i].attack != null){

                            lifeResult = vm.playerSpaces[i].life - vm.AIspaces[i].attack;
                            
                            if (lifeResult > 0){
                                vm.playerSpaces[i].life -= vm.AIspaces[i].attack;

                            }else {
                                let space = {};
                                space.id = `space${i+7}`;
                                space.type = "card";
                                space.ElementalType = "";
                                space.img = "charBlank.png";
                                space.cardSrc = "blank.png";
                                space.life = null;
                                space.attack = null;
                                space.cost = null;
                                vm.playerSpaces[i] = space;
                            }
                            
                            // Animate (todo: create a specific function with attack values)
                            vm.$refs[id][0].animate("attack down");

                        }
                    }

                }

                var text = "--- Finished fight turn ---";
                resolve(text);

                if (!i) {
                    reject(new Error('Error with fight turn promise'));
                }
            })
  
            return promise;
        },
        AI: function (){
            var vm = this;
            let randomSpace = Math.floor(Math.random() * 5) + 0;

            setTimeout( async function() { 
                
                // AI Test
                //log.info("Hi! I'm the AI ");
                let space= vm.AIspaces[randomSpace];

                if (space.attack == null){

                let testCard = {
                    "id": "orc",
                    "type": "card",
                    "ElementalType": "fire",
                    "img": "exampleCard.png",
                    "life": 20,
                    "attack": 6,
                    "cost": 7
                };

                vm.selectDeckCard(testCard);
                vm.moveCard(space,vm.astralGameFlux);

                }else{
                    vm.skipTurn();
                }
                }, 2000);
        },
        decreaseMana: function (target, elementalTypeTarget, value){

            // Get elementalType object of given target and left the given value
            target.filter(function (target) {return target.name == elementalTypeTarget;})[0].value -= value;
            log.info(`-${value} to ${elementalTypeTarget}`);
        }
    },
    created: function() {
    /* INIT SCRIPT */

    // Log game mode
    log.info('*** Singleplayer Game ***');

    // Add escape key event
    document.addEventListener('keyup', this.escapeKeyListener);

    // Update background
    document.body.style.backgroundImage = "url('"+require('./../assets/img/bg.jpg')+"')";
  
    // Starting turn (true == Player turn && false == AI turn)
    log.info(`Starting turn: ${this.turn}`);

    // --- MANA DISTRIBUTION ALGORITHM ---
    
    // Set overall mana (19 for starting turn and 18 for second)
    if(this.turn == false){
        var AIOverall = 19;
        var playerOverall = 18;
    }else{
        var AIOverall = 18;
        var playerOverall = 19;   
    }

    this.playerMana = manaJS.generateInitalMana(true);
    this.AIMana = manaJS.generateInitalMana(true);


    // Log
    log.info(`Player initial mana: ${JSON.stringify(this.playerMana, null, 4)}`);


    // Log
    log.info(`AI initial mana: ${JSON.stringify(this.AIMana, null, 4)}`);





    //  --- GAME VARIABLES ---
    // Selected card object
    this.selectedCard = undefined;

    // Selected card ?
    this.cardSelected = false;

        
    

    if(this.turn == false){
        this.AI();
    }

  },
    destroyed: function() {
    document.removeEventListener('keyup', this.escapeKeyListener);
  }
}
</script>


<style scoped>
.battlefield {
    text-align: center;
    width: 100%;
    margin-top: 0%;
    padding-top: 6%;
    padding-bottom: 3%;
    background-image: url('~@/assets/img/combat/backgrounds/bg0.png');
    background-size: cover;
}

@media (max-width: 1400px) {
    .battlefield {
        text-align: center;
        width: 100%;
        margin-top: 0%;
        padding-top: 2.5%;
        padding-bottom: 0%;
        background-image: url('~@/assets/img/combat/backgrounds/bg0.png');
        background-size: cover;
    }
}

.cards-deck {
    margin-left: 30%;
    margin-right: 30%;
    border: 32px solid transparent;
    -o-border-image: url('~@/assets/img/paperborder.png') 32 round;
    border-image: url('~@/assets/img/paperborder.png') 32 round;
    background-image: url('~@/assets/img/paper.jpg');
    background-clip: padding-box;
}


.card-column{
    width: 19%;
    display: inline-block;
    text-align: center;
}

.player-bar {
    /*background: url(~@/assets/img/playerStausBar.png) center center repeat-x;*/
    background-position: top;
    position: relative;
    width: 100%;
    max-height: 120px;
    -webkit-box-shadow: 0px 3px 8px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 8px -1px rgba(0,0,0,0.75);
    box-shadow: 0px 3px 8px -1px rgba(0,0,0,0.75);
}

.player-bar-profile {
    width: 7%;
    position: absolute;
    top: -150%;
    display: inline-block;
    margin: 0.4%;
    vertical-align: middle;
    -webkit-box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.75);
}

.player-bar h4 {
    display: inline-block;
    position: absolute;
    left: 8%;
    top:-60%;
}

.enemy-bar {
    background: url(~@/assets/img/enemyStausBar.png) center center repeat-x;
    position: absolute;
    top: -1.2%;
    width: 100%;
    max-height: 50px;
    margin: 0;
    padding: 0;
}

.enemy-bar h4 {
    display: inline-block;
    position: relative;
    left: 4.5%;
}

.enemy-bar-profile {
    width: 4%;
    position: absolute;
    top: 15%;
    display: inline-block;
    vertical-align: middle;
    -webkit-box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.75);
}

.w3-light-grey, .w3-hover-light-grey:hover, .w3-light-gray, .w3-hover-light-gray:hover {
    color: #000 !important;
    background-color: #18191d !important;
    border-top: 8px solid transparent;
    border-bottom: 5px solid transparent;

    -webkit-border-image: url(~@/assets/img/border.png) 30 round; /* Safari 3.1-5 */
    -o-border-image: url(~@/assets/img/border.png) 30 round; /* Opera 11-12.1 */
    border-image: url(~@/assets/img/border.png) 30 round;
}
.w3-green, .w3-hover-green:hover {
    color: #fff !important;
    background: url(~@/assets/img/bg.png);
    height:24px;
}
</style>