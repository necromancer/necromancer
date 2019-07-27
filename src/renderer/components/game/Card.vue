<template>
    <div v-bind:id="id" class="card tooltip" v-bind:elementaltype="elementaltype">
        <!-- Tooltip card info -->
        <span style="z-index: 999" class="tooltiptext">
            <h4>{{id}}</h4>
            <h5>{{elementaltype}} {{type}}, Cost {{cost}}, Attack {{attack}}, Life {{life}}</h5>
            <p>{{description}}</p>
        </span>
        <!-- Creature/spell image -->
        <img v-bind:src="src" alt="card" class="character">
        
        <!-- Frame for creature/spell -->
        <img v-if="type === 'creature'" class="frame" src="~@/assets/decks/default/img/creature.png" alt="card">
        <img v-else class="frame" src="~@/assets/decks/default/img/spell.png" alt="card">
        
        <!-- Life indicator (only creatures) -->
        <div v-if="type === 'creature'" class="life-indicator">{{life}}</div>

        <!-- Attack indicator (only creatures) -->
        <div v-if="type === 'creature'" class="attack-indicator">{{attack}}</div>
        
        <!-- Cost indicator (2 styles depending on card type, creature or spell) -->
        <div v-if="type === 'creature'" class="cost-indicator">{{cost}}</div>
        <div v-else class="cost-indicator-spell">{{cost}}</div>
    </div>
</template> 

<script>
export default {
    name: 'card',
    props:{
        id: String,
        elementaltype: String,
        type: String,
        src: String,
        life: Number,
        attack: Number,
        cost: Number,
        available: Boolean,
        description: String,
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
.card {
    margin-bottom: -45px;
    padding: 0;
    cursor: url(~@/assets/img/cursors/pointer.png), pointer;
}

.frame {
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

.cost-indicator-spell {
    color: blue;
    position: relative;
    z-index: 10;
    right: -33px;
    top: -93px;
}

.tooltip {
    position: relative;
}

.tooltip .tooltiptext {
    border: 1px solid #98774b;
    visibility: hidden;
    width: 240px;
    background-color: #bba077;
    color: black;
    text-align: left;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 110%;
    left: 50%;
    margin-left: -120px;
    /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */
    opacity: 0;
    transition: opacity 0.7s;
}

.tooltip .tooltiptext h4 {
    color: #441200;
    padding: 0;
    margin: 0;
}

.tooltip .tooltiptext h5 {
    color: #49682d;
    padding: 0;
    margin: 0;
    text-transform: capitalize
}

.tooltip .tooltiptext p {
    color: #3a2d13;
    padding: 0;
    margin: 0;
}

.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: #98774b transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}
</style>