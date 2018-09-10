<template>
        <div class="mana"> {{elementaltype}}: {{value}}</div>
</template> 

<script>
export default {
    name: 'card',
    props:{
        elementaltype: String,
        value:Number
    }

};
</script>

<style scoped>
.mana{
margin-bottom: 10px;
}
</style>