<template>
    <section class="section curriculum" id="curriculum">
      <p class="curriculum_text">Shift + Scroll</p>
      <h1 class="curriculum_title"><strong>이러한 커리큘럼</strong>이<br />준비되어 있습니다.</h1>
        <div class="curriculum_item">

          <div
          class="curriculum_items"
          v-for="(i, k) in curriculum"
          :key="k">
            <h1>{{ i.name }}</h1>
            <p>{{ i.description }}</p>
          </div>

        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { curriculum } from '@/types/index'
const curriculum_json = require('@/static/resources/curriculum.json').curriculum

export default Vue.extend({
  name: 'CurriculumItem',
  data () {
    return {
      curriculum: curriculum_json as curriculum[]
    }
  }
})
</script>

<style lang="scss">
@import "@/static/assets/scss/Curriculum.scss";
</style>
