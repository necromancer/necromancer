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
            <img id="PlayerImageProfile" class="player-bar-profile" src="" alt="">

            <h4 id="playerName"></h4>
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
        <div id="cards-deck" class="cards-deck"></div>
        <main>
            <router-link to="/">
                <h2>Main Menu!</h2>
            </router-link>

        </main>
    </div>
</template>



<style>
    @import "~@/assets/css/singlePlayer.css";
</style>