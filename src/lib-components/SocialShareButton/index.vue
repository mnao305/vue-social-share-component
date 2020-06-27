<template>
  <button
    class="social-share-button"
    @click="clickEvent"
  >
    Share
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'SocialShareButton',
  setup () {
    const clickEvent = () => {
      console.log('click')
    }
    return { clickEvent }
  },
})
</script>

<style scoped>
.social-share-button {
  border: none;
  background-color: lightblue;
  padding: 10px;
}
</style>
