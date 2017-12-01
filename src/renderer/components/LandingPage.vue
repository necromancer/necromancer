<template>
  <div id="wrapper">
      <link rel="preload" href="~@/assets/img/table.jpg" as="image">
    <div class="title">
      <img id="logo" src="~@/assets/img/title.png" alt="electron-vue">
    </div>
    <main>
      <div class="menu">
        <router-link to="singleplayer">
          <img class="singleplayer-button" src="~@/assets/img/buttons/NSinglePlayer.png" alt="">
        </router-link>
        <img onclick="#" src="~@/assets/img/buttons/BMultiPlayer.png" alt="">
        <img onclick="#" src="~@/assets/img/buttons/BMyDeck.png" alt="">
        <img class="options-button" onclick="openOptions();" src="~@/assets/img/buttons/NOptions.png" alt="">
        <img class="exit-button" onclick="exitApp();" src="~@/assets/img/buttons/NExit.png" alt="">
      </div>

      <div class="window" id="options" style="display:none;">
        <div style="text-align:right;color:#901805;" id="newMets_handle">
          <a onclick="closeWindow(this);">&#x2716;&nbsp;</a>
        </div>
        <img class="faces" id="PlayerImageProfile" src="" alt="">
        <input onkeyup="controlSaveButton(true);" id="playerName" type="text" name="">
        <br>
        <select onchange="controlSaveButton(true);" id="deckSelection"></select>
        <img class="small-back-button back-button" onclick="previousImageProfile();controlSaveButton(true);" src="img/buttons/NBack.png"
          alt="">
        <img class="small-back-button next-button" onclick="nextImageProfile();controlSaveButton(true);" src="img/buttons/NNext.png"
          alt="">
        <img id="save-button" class="save-button" src="img/buttons/BSave.png" alt="">
        <br>
      </div>
      <audio autoplay="" controls="" loop="" preload="">
        <source src="~@/assets/audio/music1.ogg" type="audio/ogg"></source>
        Your browser does not support the audio element.
      </audio>
    </main>
  </div>
</template>

<script>
  import SystemInformation from "./LandingPage/SystemInformation";

  export default {
    name: "landing-page",
    components: {
      SystemInformation
    },
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      }
    }
  };
</script>

<style>
  @import "~@/assets/css/landingPage.css";
</style>