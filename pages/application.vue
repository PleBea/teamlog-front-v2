<template>

</template>

<script lang="ts">
import Vue from 'vue'
const application_json = require('@/static/resources/application.json').application_link

export default Vue.extend({
  mounted() {
    location.href = application_json
  }
})
</script>
