<template>
    <section class="section special" id="special">
        <div class="special_list">
            <div class="special_item">
                <div
                class="special_items"
                v-for="(i, k) in special"
                :key="k">
                    <h1>{{ i.title }}</h1>
                    <img :src="`/assets/images/${i.img}`">
                    <p>{{ i.description }}</p>
                </div>
            </div>
            <div class="special_description">
                <h1>저희는 <strong>이러한 특색</strong>을<br />가진 동아리입니다.</h1>
                <p>저희는 좋은 {{special[0].title}}, {{special[1].title}}, {{special[2].title}}을 전부 담아<br />
                매력적인 특색을 가진 동아리로 올라가고 있습니다. 또한<br />
                모두가 만족스러운 특색을 가질 수 있도록 노력하고 있습니다.
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { special } from '@/types/index'
const special_json = require('@/static/resources/information.json').special

export default Vue.extend({
  name: 'SpecialItem',
  data() {
    return {
      special: special_json as special[]
    }
  },
})
</script>

<style lang="scss">
@import "@/static/assets/scss/Special.scss";
</style>
