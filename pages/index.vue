<template>
  <div class="index">
    <TitleItem />
    <AwardItem />
    <SpecialItem />
    <CurriculumItem />
    <FooterItem />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TitleItem from '~/components/TitleItem.vue';
import AwardItem from '~/components/AwardItem.vue';
import SpecialItem from '~/components/SpecialItem.vue';
import FooterItem from '~/components/FooterItem.vue';
import CurriculumItem from '~/components/CurriculumItem.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { TitleItem, AwardItem, SpecialItem, FooterItem, CurriculumItem },
    data() {
      return {

      }
    }
})
</script>


<style lang="scss">
@import "@/static/assets/scss/Index.scss";
</style>
