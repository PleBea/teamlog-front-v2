<template>
  <div class="index">
    <full-page>
      <TitleItem />
      <AwardItem />
    </full-page>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TitleItem from '~/components/TitleItem.vue';
import AwardItem from '~/components/AwardItem.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { TitleItem, AwardItem }
})
</script>


<style lang="scss">
@import "@/static/assets/scss/Index.scss";
</style>
