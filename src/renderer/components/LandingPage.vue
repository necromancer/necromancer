<template>
  <div id="wrapper">
    <div class="title">
      <!-- Title  -->
      <img src="~@/assets/img/title.png" alt="Necromancer">
    </div>
    <main>
      <!-- Menu -->
      <div class="menu">
        <div class="buttonMenu">
          <router-link to="singleplayer">
            <Button buttonText="Singleplayer"></Button>
          </router-link>
        </div>
        <div class="buttonMenu">
          <router-link to="">
            <Button buttonText="Multiplayer"></Button>
          </router-link>
        </div> 

      </div>
      <!-- -->
      
      <!-- Windows -->
      <transition name="fade">

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

import Button from './gui/Button.vue';

export default {
  components: {
    Button
  },
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
    document.body.style.backgroundImage = "url('"+require('./../assets/img/bg.jpg')+"')";
  },
  destroyed: function() {
    document.removeEventListener('keyup', this.escapeKeyListener);
  }
};
</script>

<!-- Styles -->
<style scope>
html {
  min-height: 100%;
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.678);
}
body {
  /* Location of the image */
  /*background-image: url(bg.jpg);*/
  
  /* Background image is centered vertically and horizontally at all times */
  background-position: center center;
  
  /* Background image doesn't tile */
  background-repeat: no-repeat;
  
  /* Background image is fixed in the viewport so that it doesn't move when 
     the content's height is greater than the image's height */
  background-attachment: fixed;
  
  /* This is what makes the background image rescale based
     on the container's size */
  background-size: cover;
  
  /* Set a background color that will be displayed
     while the background image is loading */
  background-color: #464646;
}

.title {
  width: 100%;
}

.title img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

.menu {
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.menu img {
  width: 20%;
}

.menu a {
  text-decoration: none;
}

.buttonMenu {
  margin-top: 2%;
}
</style>