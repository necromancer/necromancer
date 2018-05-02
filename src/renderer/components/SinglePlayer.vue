<template>
    <div id="wrapper">
        <div class="enemy-bar">
            <img class="enemy-bar-profile" src="~@/assets/img/faces/enemy.png" alt="">
            <h4>Enemy </h4>
            <h5 id="enemy-life">60</h5>
        </div>
        <div id="battlefield" class="battlefield">
            <div id="space1" class="card-space">
                <img src="~@/assets/img/blank.png" alt="">
            </div>
            <div id="space2" class="card-space">
                <img src="~@/assets/img/blank.png" alt="">
            </div>
            <div id="space3" class="card-space">
                <img src="~@/assets/img/blank.png" alt="">
            </div>
            <div id="space4" class="card-space">
                <img src="~@/assets/img/blank.png" alt="">
            </div>
            <div id="space5" class="card-space">
                <img src="~@/assets/img/blank.png" alt="">
            </div>
            <div id="space6" class="card-space">
                <img src="~@/assets/img/blank.png" alt="">
            </div>

            <br>
            <br>

            <div id="space7" onclick="moveCard(this);" class="card-space">
                <img src="~@/assets/img/blank.png" alt="">
            </div>
            <div id="space8" onclick="moveCard(this);" class="card-space">
                <img src="~@/assets/img/blank.png" alt="">
            </div>
            <div id="space9" onclick="moveCard(this);" class="card-space">
                <img src="~@/assets/img/blank.png" alt="">
            </div>
            <div id="space10" onclick="moveCard(this);" class="card-space">
                <img src="~@/assets/img/blank.png" alt="">
            </div>
            <div id="space11" onclick="moveCard(this);" class="card-space">
                <img src="~@/assets/img/blank.png" alt="">
            </div>
            <div id="space12" onclick="moveCard(this);" class="card-space">
                <img src="~@/assets/img/blank.png" alt="">
            </div>
        </div>
        <div class="player-bar w3-light-grey">
            <div id="player-life" class="w3-green" style="width:100%"></div>
            <img id="PlayerImageProfile" class="player-bar-profile" v-bind:src="playerImage" alt="">

            <h4 id="playerName">{{ playerName }}</h4>
            <!--<h5 id="player-life">60</h5>
                <div class="allManas">
                <div class="mana"><img src="~@/assets/img/combat/fire_rune.png" alt=""><span id="fireMana"></span></div>
                <div class="mana"><img src="~@/assets/img/combat/water_rune.png" alt=""><span id="waterMana"></span></div>
                <div class="mana"><img src="~@/assets/img/combat/air_rune.png" alt=""><span id="airMana"></span></div>
                <div class="mana"><img src="~@/assets/img/combat/earth_rune.png" alt=""><span id="earthMana"></span></div>
                <img onclick="skipTurn();" src="~@/assets/img/buttons/skipTurn.png" alt="" style="
                top: 7px;
                width: 2.5%;
                position: absolute;
                right: -50px;
        ">        </div>-->
        </div>
        <div id="cards-deck" class="cards-deck">
            <Card 
            v-for="(card, index) in cards"
            :key="index"
            :elementaltype="card.elementaltype"
            :src="require('./../assets/decks/default/img/'+card.img)"
            :id="card.id"
            :life="card.life"
            :attack="card.attack"
            :cost="card.cost">
            </Card>
        </div>
        <main>
            <router-link to="/">
                <h2>Main Menu!</h2>
            </router-link>

        </main>
    </div>
</template>

<script>
import Card from './Card.vue'


export default {
    props:["locales","globalMethods"],
    components: {
		Card
	},
    data() {
    return {
      playerName: settings.PlayerName,
      playerImage:require("./../assets/img/faces/face" +2+".png"),
      seen: false,
      cards: deck
    };
  },
  methods: {
    escapeKeyListener: function(evt) {
      if (evt.keyCode === 27) {
        this.globalMethods.exitMainMenu();
      }
    }
  },
    created: function() {
    document.addEventListener('keyup', this.escapeKeyListener);
    document.body.style.backgroundImage = "url('"+require('./../assets/img/table.jpg')+"')";
  },
    destroyed: function() {
    document.removeEventListener('keyup', this.escapeKeyListener);
  }
}
</script>


<style scoped>
.card-space {
    box-sizing: border-box;
    position: relative;
    display: inline-table;
    text-align: center;
    font-size: 70%;
    font-weight: bold;
    padding: 0;
    margin-right: 1%;
    padding: 0;
}

.card-space img {
    padding: 0;
    margin: 0;
    width: 100%;
}
  
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
    text-align: center;
    border: 32px solid transparent;
    -o-border-image: url('~@/assets/img/paperborder.png') 32 round;
    border-image: url('~@/assets/img/paperborder.png') 32 round;
    background-image: url('~@/assets/img/paper.jpg');
    background-clip: padding-box;
}

.card {
    box-sizing: border-box;
    position: relative;
    display: inline-table;
    text-align: center;
    font-size: 70%;
    font-weight: bold;
    padding: 0;
    padding-right: 15%;
    margin-bottom: 15%;
}

.card img {
    padding: 0;
    margin: 0;
    position:absolute;
    /* width: 100%; */
}

.card .character{
	margin-top: 8px;
	margin-left:3px;
	max-height: 80px;
	clip: rect(0px,80px,80px,0px);

}

.spell {
    box-sizing: border-box;
    position: relative;
    display: inline-table;
    text-align: center;
    font-size: 70%;
    font-weight: bold;
    padding: 0;
    margin-right: 1%;
    margin-top: 0%;
}

.spell img {
    padding: 0;
    margin: 0;
    width: 100%;
}

.spell .cost-indicator {
    color: blue;
    position: absolute;
    right: 12px;
    top: 10px;
}

.life-indicator {
    color: green;
    position: relative;
    right: -78px;
    bottom: -82px;
}

.attack-indicator {
    color: red;
    position: relative;
    left: 9px;
    bottom: -70px;
}

.cost-indicator {
    color: blue;
    position: relative;
    right: -78px;
    top: -22px;
}

.player-bar {
    /*background: url(~@/assets/img/playerStausBar.png) center center repeat-x;*/
    background-position: top;
    position: relative;
    width: 100%;
    max-height: 120px;
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

.player-bar h5 {
    display: inline-block;
    position: relative;
    left: 8%;
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

.enemy-bar h5 {
    display: inline-block;
    position: relative;
    left: 8%;
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

.allManas {
    display: inline-block;
    position: relative;
    width: 90%;
    text-align: center;
    position: absolute;
}

.allManas div {
    display: inline-block;
    width: 8%;
}
.mana{
  width: 10%;
}

.mana img {
    display: inline-block;
    width: 40%;
}
.mana span{
  position: absolute;
  top: 20px;
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