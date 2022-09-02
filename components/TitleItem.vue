<template>
    <section id="title" class="section title" :style=backgroundImg>
        <h1><span v-for="(i, k) in title.top" :key="k">{{ i }}</span><br><span v-for="(i, k) in title.bottom" :key="k">{{ i }}</span></h1>
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
            backgroundImg: {},
            title: {}
        }
    },
    mounted() {
        this.backgroundImg = {
            "background-image": `linear-gradient(rgba(20, 23, 32, 0.7), rgba(20, 23, 32, 0.7)), url("/assets/images/${config_json.background_img}")`
        }

        this.title = {
            "top": ['WE', 'ARE'],
            "bottom": ['T','E','A','M','L','O','G','.']
        }
    }
})
</script>

<style lang="scss">
@import "@/static/assets/scss/Title.scss";
</style>
