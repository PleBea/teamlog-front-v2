<template>
  <section class="section award" id="award">
    <div class="award_description">
      <h3>2013년 창설된 이후<br><strong>이러한 실적</strong>을 쌓고 있습니다.</h3>
      <hr />
      <p>저희 Teamlog는 {{ year }}년간의 기니긴 역사로 다양한 실적을 쌓아,<br />
      교내에 다양한 활동에 참가함은 물론, 동아리에 여러 수상 실적을<br />
      쌓아 정보보호과의 큰 도움을 주는 동아리로 성장하고 있습니다.</p>
      <p class="award_scroll">Shift + Scroll</p>
    </div>
    <div class="award_list">

      <div class="award_item"
      v-for="(i, k) in award"
      :key="k">
        <h1>{{ i.year }}</h1>
        <div class="award_items">
          <p 
          v-for="(j, h) in i.award"
          :key="h">{{ j }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { award } from '@/types/index'
const award_json = require('@/static/resources/award.json')

export default Vue.extend({
  name: 'AwardItem',
  data() {
    return {
      award: [] as award[],
      year: 0
    }
  },
  mounted() {
    this.award = award_json.award.reverse() as award[]
    let date = new Date()
    this.year = date.getFullYear() - 2013
  }
})
</script>

<style lang="scss">
@import "@/static/assets/scss/Award.scss";
</style>
