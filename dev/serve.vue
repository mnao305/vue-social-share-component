<script lang="ts">
import Vue from 'vue'
import { VueSocialShareComponentSample } from '@/entry'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueSocialShareComponentSample,
  },
})
</script>

<template>
  <div id="app">
    <vue-social-share-component-sample />
  </div>
</template>
