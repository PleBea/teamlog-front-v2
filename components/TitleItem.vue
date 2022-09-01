<template>
    <section id="" class="section title" :style=backgroundImg>
        <h1>WE ARE<br>TEAMLOG.</h1>
        <p>Feel the Change, Make the Change</p>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
const config_json = require('../static/resources/config.json')

export default Vue.extend({
    name: 'Title',
    data() {
        return {
            backgroundImg: {}
        }
    },
    mounted() {
        this.backgroundImg = {
            "background-image": `linear-gradient(rgba(20, 23, 32, 0.7), rgba(20, 23, 32, 0.7)), url("/assets/images/${config_json.background_img}")`
        }
    }
})
</script>

<style lang="scss">
@import "@/static/assets/scss/Title.scss";
</style>
