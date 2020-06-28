<template>
  <div>
    <social-share-button
      url="http://www.example.com"
      text="test"
      service="twitter"
    />
    <social-share-button
      url="http://www.example.com"
      text="test"
      service="facebook"
    />
    <social-share-button
      url="http://www.example.com"
      text="test"
      service="hatena"
    />
    <social-share-button
      url="http://www.example.com"
      text="test"
      service="pocket"
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
