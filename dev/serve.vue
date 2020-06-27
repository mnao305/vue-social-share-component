<script lang="ts">
import Vue from 'vue'
import { SocialShareComponent } from '@/entry'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    SocialShareComponent,
  },
})
</script>

<template>
  <div id="app">
    <social-share-component />
  </div>
</template>
