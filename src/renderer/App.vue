<template>
  <div id="app">
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Necromancer"
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