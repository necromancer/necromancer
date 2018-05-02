<template>
  <div id="app">
    <transition name="fade" mode="out-in" appear>
      <router-view :globalMethods="globalMethods" :locales="locales"></router-view>
    </transition>
  </div>
</template>
<script>
// Get settings
import settings  from './config.js';

var locale = settings.locale;

export default {
  name: "Necromancer",
  data(){
    return{
      locales: locale, // Export locales
      globalMethods: {
        // Exit App
        exitApp: function (){
              var confirmExit = confirm(locale.confirm_exit_app);
              if (confirmExit == true) {
                window.close();
              }
        },  
        // Go to main menu
        exitMainMenu: function(){
              var confirmExit = confirm(locale.confirm_exit_menu);
              if (confirmExit == true) {
                this.$router.push('/')
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