<template>
  <div id="app">
    <transition name="fade" mode="out-in" appear>
      <router-view :globalMethods="globalMethods" :settings="settings" :locales="locales" :gameDeck="gameDeck"></router-view>
    </transition>
  </div>
</template>
<script>
import Router from './router';
// Get settings
import settings  from './config.js';

export default {
  name: "Necromancer",
  data(){
    return{
      locales: settings.locale, // Export locales
      gameDeck: settings.deck,
      settings: {
        playerName: settings.playerName
      },
      globalMethods: {
        // Exit App
        exitApp: function (){
              var confirmExit = confirm(settings.locale.confirm_exit_app);
              if (confirmExit == true) {
                window.close();
              }
        },  
        // Go to main menu
        exitMainMenu: function(){
              var confirmExit = confirm(settings.locale.confirm_exit_menu);
              if (confirmExit == true) {
                Router.push('/');
              }
        }
      }
    }
  }
};
</script>

<!-- Global Styles -->
<style>
html {
  cursor: url(~@/assets/img/cursors/default.png), default;
  -webkit-user-select: none;
    overflow: hidden;
    position:fixed;
}

#app{
  width: 100vw;
}
:link {
  cursor: url(~@/assets/img/cursors/pointer.png), pointer;
}
body {
    background-size: cover;
    padding: 0;
    margin: 0;
    overflow:hidden;
}

a:hover, a:active, a:focus {
    outline: 0;
}

.window {
  position: absolute;
  width: 40%;
  height: 40%;
  top: 30%;
  left: 30%;
  text-align: left;
}

audio {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>