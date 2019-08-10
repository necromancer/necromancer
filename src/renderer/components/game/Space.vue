<template>
    <div v-bind:id="id" class="card-space" v-bind:elementaltype="elementaltype">
        <img v-bind:src="src" alt="card" class="character">
        <img class="frame" v-bind:src="cardSrc" alt="card">
        <div class="life-indicator">{{life}}</div>
        <div class="life-deal">{{dealValue}}</div>
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
        cardSrc: String,
        life: Number,
        attack: Number,
        cost: Number,
    },
    data() {
        return {
            dealValue: ""
        };
    },
    methods:{
        animate: function (animation, data) {
            var spaceHTML = document.getElementById(this.id);

            if (animation == 'attack up'){
                Velocity(spaceHTML, { translateY: "-50px" }, { duration: 600 });
                Velocity(spaceHTML, "reverse");
            }

            if (animation == 'attack down'){
                Velocity(spaceHTML, { translateY: "50px" }, { duration: 600 });
                Velocity(spaceHTML, "reverse");
            }

            if(animation == 'die'){
                Velocity(spaceHTML, "fadeOut", {display: "inline-table"},{duration: 800});
                Velocity(spaceHTML, "reverse", {delay: 800});
            }

            if (animation == 'summon'){
                Velocity(spaceHTML, "fadeIn", {display: "inline-table"},{duration: 800});  
            }

            if (animation == 'deal'){
                spaceHTML.getElementsByClassName('life-deal')[0].style = "";     
                this.dealValue = "-"+data;
                Velocity(spaceHTML.getElementsByClassName('life-deal')[0], { top: "50px" },{duration: 400});            
                Velocity(spaceHTML.getElementsByClassName('life-deal')[0], "fadeOut",{duration: 800});
            }

        }
    }

};
</script>

<style scoped>
.card-space {
    width: 8.5vh;
    margin-right: 30px !important;
    box-sizing: border-box;
    position: relative;
    display: inline-table;
    text-align: center;
    cursor: url(~@/assets/img/cursors/pointer.png), pointer;
}

.frame {
    position: relative;
    z-index: 9;
    width: 100%;
}


.character {
    width: 100%;
    position: absolute;
    margin-top: 2%;
}
.life-indicator {
    font-size: 1.6vh;
    margin: 0;
    color: green;
    position: absolute;
    z-index: 10;
    right: 3px;
    bottom: 3px;
}

.attack-indicator {
    font-size: 1.6vh;
    color: red;
    position: absolute;
    z-index: 10;
    left: 6px;
    bottom: 3px;
}

.cost-indicator {
    font-size: 1.6vh;
    color: blue;
    position: absolute;
    z-index: 10;
    right: 5px;
    top: 0px;
}

.life-deal {
    font-size: 1.6vh;
    color: red;
    position: absolute;
    z-index: 10;
    right: 3px;
    bottom: 3px;
}

/* For mobile */
@media only screen and (max-width: 600px) {
    .card-space {
        margin: 0 !important;
    }
}
</style>