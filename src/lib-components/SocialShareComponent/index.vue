<template>
  <div>
    <social-share-button
      url="https://google.com"
      text="hogefugapiypiyo"
      service="twitter"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import SocialShareButton from '../SocialShareButton/index.vue'

export default defineComponent({
  name: 'SocialShareComponent',
  components: {
    SocialShareButton,
  },
  setup () {
    // TODO
  },
})
</script>
