<template>
  <div class="header">
    <nuxt-link tag="div" :to="'/'" class="header_logo">
      <img src="~/static/assets/images/teamlog_logo.png" alt="logo" />
      <p>Teamlog.</p>
    </nuxt-link>
    <button class="header_button" @click="toggleHeader">
      <img src="~/static/assets/images/hamburger.svg" alt="">
    </button>
    <div class="header_menu" id="menu" :class="{header_show: showMenu}">
      <ul>
        <li
        v-for="(i,k) in header"
        :key="k"
        ><nuxt-link href="#" v-scroll-to="`#${i.id}`" :to="i.url">{{ i.name }}</nuxt-link></li>
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
      showMenu: false as boolean,
    }
  },
  methods: {
    home() {
      location.href = '/'
      console.log(1)
    },
    toggleHeader() {
      this.showMenu = !this.showMenu
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
  },
})
</script>

<style lang="scss">
@import "@/static/assets/scss/Header.scss";
</style>
