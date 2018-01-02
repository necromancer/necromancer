<template>
  <div id="wrapper">
    <div class="title">
      <!-- Title  -->
      <img id="logo" src="~@/assets/img/title.png" alt="electron-vue">
    </div>
    <main>
      <!-- Menu -->
      <div class="menu">
        <router-link to="singleplayer">
          <img class="singleplayer-button" src="~@/assets/img/buttons/NSinglePlayer.png" alt="">
        </router-link>
        <img onclick="#" src="~@/assets/img/buttons/BMultiPlayer.png" alt="">
        <img onclick="#" src="~@/assets/img/buttons/BMyDeck.png" alt="">
        <router-link to="#">
          <img class="options-button" v-on:click="seen = true" src="~@/assets/img/buttons/NOptions.png" alt="">
        </router-link>
        <router-link to="#">
          <img class="exit-button" onclick="exitApp();" src="~@/assets/img/buttons/NExit.png" alt="">
        </router-link>
      </div>
      <!-- -->
      
      <!-- Options Window -->
      <transition name="fade">
      <div class="window" id="options" v-if="seen">
        <div style="text-align:right;color:#901805;">
          <a v-on:click="seen = false">&#x2716;&nbsp;</a>
        </div>
        <img class="faces" id="PlayerImageProfile" v-bind:src="playerImage" alt="">
        <input id="playerName" type="text" v-on:change="changeHandler" v-model="playerName">
        <br>
        <select onchange="controlSaveButton(true);" id="deckSelection"></select>
        <img class="small-back-button back-button" onclick="previousImageProfile();controlSaveButton(true);" src="~@/assets/img/buttons/NBack.png"
          alt="">
        <img class="small-back-button next-button" onclick="nextImageProfile();controlSaveButton(true);" src="~@/assets/img/buttons/NNext.png"
          alt="">
        <img id="save-button" class="save-button" src="~@/assets/img/buttons/BSave.png" alt="">
        <br>
      </div>
       </transition>
       <!-- -->

      <!-- Audio -->
      <audio autoplay="" controls="" loop="" preload="">
        <source src="~@/assets/audio/music1.ogg" type="audio/ogg"></source>
        Your browser does not support the audio element.
      </audio>
    </main>
  </div>
</template>
<script>
//import fs from "fs";
//import path from "path";

//const settingsContent = JSON.parse(fs.readFileSync("settings.json", "utf8"));

export default {
  data() {
    return {
      playerName: "settingsContent.PlayerName",
      playerImage:require("./../assets/img/faces/face" +2+".png"),
      seen: false
    };
  },
  methods: {
    changeHandler: function(event) {
      var newPlayerImageProfile = 2;
      var newDeck = "default";
      // Compose the new settings file
      var newSettings = `{
      "PlayerName": "${playerName.value}",
      "PlayerImageProfile": ${newPlayerImageProfile},
      "GameDeck": "${newDeck}"
      }`;

      // Write
      fs.writeFile("settings.json", newSettings, function(err) {
        if (err) {
          alert("Error writing settings json file.");
        } else {
          console.log("Settings saved!");
        }
      });
    },
    escapeKeyListener: function(evt) {
      if (evt.keyCode === 27) {
      exitApp();
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
};
</script>

<!-- Styles -->
<style scope>
.title {
    width: 100%;
    text-align: center;
}

.title img{
    width: 60%;
}

.menu {
    float: right;
    margin-right: 2%;
    /* left: 20px; */
    box-sizing: border-box;
    width: 15%;
    text-align: center;
    border: 32px solid transparent;
    -o-border-image: url(~@/assets/img/paperborder.png) 32 round;
    border-image: url(~@/assets/img/paperborder.png) 32 round;
    background-image: url(~@/assets/img/paper.jpg);
    background-clip: padding-box;
    background-color: #d2bfa0;
}

.menu img {
    margin-right: 2%;
    margin-left: 2%;
    width: 87%;
}

#options {
    border: 32px solid transparent;
    -o-border-image: url('~@/assets/img/paperborder.png') 32 round;
    border-image: url('~@/assets/img/paperborder.png') 32 round;
    background-image: url('~@/assets/img/paper.jpg');
    background-clip: padding-box;
    background-color: #d2bfa0;
    padding: 0px;
    overflow: hidden;
}

#options .faces {
    padding: 0;
    margin-left: 1%;
    vertical-align: middle;
    width: 20%;
}

.button-change {
    text-decoration: none;
    display: inline-block;
    padding: 8px 16px;
}

.button-change:hover {
    background-color: #ddd;
    color: black;
}

.previous {
    background-color: #f1f1f1;
    color: black;
}

.next {
    background-color: #f1f1f1;
    color: black;
}

.round {
    border-radius: 50%;
}

.singleplayer-button:hover {
    content: url("~@/assets/img/buttons/OSinglePlayer.png");
}

.options-button:hover {
    content: url("~@/assets/img/buttons/OOptions.png");
}

.exit-button:hover {
    content: url("~@/assets/img/buttons/OExit.png");
}

.save-button {
    width: 15%;
    position: absolute;
    padding: 0;
    margin: 1%;
    float: right;
    bottom: 1%;
    right: 1%;
}

.save-button .enabled:hover {
    content: url("~@/assets/img/buttons/OSave.png");
}

.next-button:hover {
    content: url("~@/assets/img/buttons/ONext.png");
}

.back-button:hover {
    content: url("~@/assets/img/buttons/OBack.png");
}

.small-back-button {
    width: 4%;
}
#deckSelection{
    width: 15%;
    position: absolute;
    padding: 0;
    margin: 1%;
    float: right;
    bottom: 1%;
    left: 1%;
}
</style>