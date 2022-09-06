<template>
  <div v-if="loading" class="loading">
    <img src="~/static/assets/images/teamlog_logo.png" alt="">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LoadingItem',
  data: () => ({
      loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
})
</script>

<style lang="scss">
@import "@/static/assets/scss/Loading.scss";
</style>
