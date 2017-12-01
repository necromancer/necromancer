<template>
  <div id="app">
    <transition name="fade" mode="out-in" v-on:after-enter="afterEnter" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "necromancer"
  };
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}</style>