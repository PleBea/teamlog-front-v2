<template>
  <div class="index">
    <TitleItem />
    <AwardItem />
    <SpecialItem />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TitleItem from '~/components/TitleItem.vue';
import AwardItem from '~/components/AwardItem.vue';
import SpecialItem from '~/components/SpecialItem.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { TitleItem, AwardItem, SpecialItem },
    data() {
      return {
        
      }
    }
})
</script>


<style lang="scss">
@import "@/static/assets/scss/Index.scss";
</style>
