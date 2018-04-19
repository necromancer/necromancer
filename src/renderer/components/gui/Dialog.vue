<template>
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
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
