<template>
  <section class="section footer">
    <div class="footer_wrapper">
      <div class="footer_left">
        <div class="footer_logo">
          <img src="~/static/assets/images/teamlog_logo.png" alt="logo" />
          <p>Teamlog.</p>
        </div>
        <p style="margin-top: 20px;">2022&copy;Teamlog All rights reserved.</p>
        <p>서울 용산구 원효로97길 33-4 선린인터넷고등학교</p>
        <div class="footer_social_logo">
          <a href="https://github.com/teamlog2022/"><img src="~/static/assets/images/github.svg" alt="github" /></a>
          <a href="https://facebook.com"><img src="~/static/assets/images/facebook.svg" alt="facebook" /></a>
        </div>
      </div>
      <div class="footer_right">
        <h1>동아리 부장/부부장 문의</h1>
        <p
        v-for="(i, k) in king"
        :key="k">{{ i.name }} ({{ i.role }}) {{ i.tel }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { king } from '@/types/index'
const king_json = require('../static/resources/config.json').king

export default Vue.extend({
  name: 'FooterItem',
  data() {
    return {
      king: [] as king[],
    }
  },
  mounted() {
    this.king = king_json as king[]
  },
})
</script>

<style lang="scss">
@import "@/static/assets/scss/Footer.scss";
</style>
