<template>
    <div class="section title" :style=backgroundImg>
      <div class="title_wrapper">
        <h1>WE ARE<br>TEAMLOG.</h1>
        <p>Feel the Change, Make the Change</p>
      </div>

      <img src="/assets/images/teamlog_logo.png" alt="팀로그 로고 사진">
    </div>
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
