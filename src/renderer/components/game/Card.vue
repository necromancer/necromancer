<template>
    <div v-bind:id="id" class="card" v-bind:elementaltype="elementaltype">
        <img v-bind:src="src" alt="card" class="character">
        <img class="frame" src="~@/assets/decks/default/img/card.png" alt="card">
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
        src: String,
        life: Number,
        attack: Number,
        cost: Number,
        available: Boolean,
    },
    data() {
        return {
            selected: false
        }
    },
    watch: {
        selected: function(){
            let card = document.getElementById(this.id);

            if (this.selected == true){
                card.getElementsByTagName('img')[1].style = "";
                card.style = "";
                card.getElementsByTagName('img')[1].style = "-webkit-box-shadow: 0px 0px 54px 0px rgba(0,145,148,1);-moz-box-shadow: 0px 0px 54px 0px rgba(68,145,148,1);box-shadow: 0px 0px 54px 0px rgba(68,145,148,1);";
            }else{
                document.getElementById(this.id).getElementsByTagName('img')[1].style = "";  
            }
        }
    }
};
</script>

<style scoped>

.card{
    margin-bottom: -45px;
    padding: 0;
    cursor: url(~@/assets/img/cursors/pointer.png), pointer;
}
.frame{
position: relative;
z-index: 9;
width: 86px;
}

.card .character {
    position: absolute;
    margin-top: 8px;
    margin-left: 3px;
    max-width: 80px;
    clip: rect(0px, 80px, 80px, 0px);
}

.life-indicator {
    color: green;
    position: relative;
    z-index: 10;
    right: -33px;
    top: -21px;
}

.attack-indicator {
    color: red;
    position: relative;
    z-index: 10;
    left: -33px;
    top: -38px;
}

.cost-indicator {
    color: blue;
    position: relative;
    z-index: 10;
    right: -33px;
    top: -136px;
}
</style>