<template>
    <div v-bind:id="id" class="card-space" v-bind:elementaltype="elementaltype">
        <img v-bind:src="src" alt="card" class="character">
        <img class="frame" v-bind:src="cardSrc" alt="card">
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
        cardSrc: String,
        life: Number,
        attack: Number,
        cost: Number,
    },
    methods:{
        animate: function (animation) {
            var spaceHTML = document.getElementById(this.id);

            if (animation == 'attack up'){
                Velocity(spaceHTML, { top: "-50px" }, { duration: 1000 });
                Velocity(spaceHTML, "reverse");
            }

            if (animation == 'attack down'){
                Velocity(spaceHTML, { top: "50px" }, { duration: 1000 });
                Velocity(spaceHTML, "reverse");
            }

        }
    }

};
</script>

<style scoped>
.card-space {
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
    width: 86px;;
}


.character {
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
    top: -19px;
}

.attack-indicator {
    color: red;
    position: relative;
    z-index: 10;
    left: -33px;
    top: -35px;
}

.cost-indicator {
    color: blue;
    position: relative;
    z-index: 10;
    right: -33px;
    top: -130px;
}
</style>