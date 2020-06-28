<template>
  <div class="social-share-component">
    <social-share-button
      :url="url"
      :text="text"
      service="twitter"
    />
    <social-share-button
      :url="url"
      :text="text"
      service="facebook"
    />
    <social-share-button
      :url="url"
      :text="text"
      service="hatena"
    />
    <social-share-button
      :url="url"
      :text="text"
      service="pocket"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialShareButton from '../SocialShareButton/index.vue'

export default Vue.extend({
  name: 'SocialShareComponent',
  components: {
    SocialShareButton,
  },
  props: {
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.social-share-component {
  @media screen and (min-width: 600px) {
    display: flex;
  }
}
</style>
