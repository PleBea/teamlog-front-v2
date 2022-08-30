<template>
  <div class="App">
    <HeaderItem></HeaderItem>
    <Nuxt />
  </div>
</template>

<script>
import HeaderItem from '~/components/HeaderItem.vue';
export default {
    components: { HeaderItem }
}
</script>

<style lang="scss">
@import "@/static/assets/scss/global.scss";
</style>
