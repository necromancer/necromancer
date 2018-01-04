<template>
    <div v-bind:id="id" class="card" v-bind:elementaltype="elementaltype" available="true">
        <img src="decks/default/img/priest.png" alt="card" class="character">
        <img src="decks/default/img/card.png" alt="card">
        <div class="life-indicator">{{life}}</div>
        <div class="attack-indicator">{{attack}}</div>
        <div class="cost-indicator">{{cost}}</div>
    </div>
</template> 

<script>
export default {
    name: 'card',
    props:{
        id: String,
        elementaltype: String,
        life: Number,
        attack: Number,
        cost: Number
    }

};
</script>

<style scoped>
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
  position: absolute;
  /* width: 100%; */
}

.card .character {
  margin-top: 8px;
  margin-left: 3px;
  max-height: 80px;
  clip: rect(0px, 80px, 80px, 0px);
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
</style>