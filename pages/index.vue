<template>
  <div class="index">
    <full-page>
      <TitleItem />
    </full-page>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TitleItem from '~/components/TitleItem.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { TitleItem }
})
</script>


<style lang="scss">
@import "@/static/assets/scss/Index.scss";
</style>