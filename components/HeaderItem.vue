<template>
  <div class="header">
    <div class="header_logo">
      <img src="~/static/assets/images/teamlog_logo.png" alt="logo" />
      <p>Teamlog.</p>
    </div>
    <div class="header_menu" id="menu">
      <ul>
        <li 
        v-for="(i,k) in header" 
        :key="k"
        :class="{active: /* scroll change */ }"><a href="#" v-scroll-to="'#special'">{{ i.name }}</a></li>
      </ul>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { application, headerItems } from '@/types/index'
const header_json = require('../static/resources/headerItem.json')
const application_json = require('../static/resources/application.json')

export default Vue.extend({
  name: 'Header',
  data() { 
    return {
      header: [] as headerItems[],
    }
  },
  mounted() {
    let application = application_json as application
    let header = header_json.header as headerItems[]
    let today = new Date()

    if ( application.application_start <= today && application.application_end >= today && header.length < 5 ) {
      header.push(application.json)
    }

    this.header = header

    setInterval(() => {

    }, 1000)
  },
})
</script>

<style lang="scss">
@import "@/static/assets/scss/Header.scss";
</style>
