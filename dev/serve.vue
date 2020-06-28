<script lang="ts">
import Vue from 'vue'
import { SocialShareComponent, SocialShareButton } from '@/entry'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    SocialShareComponent,
    SocialShareButton,
  },
})
</script>

<template>
  <div id="app">
    <h2>SocialShareComponent</h2>
    <social-share-component
      url="http://www.example.com"
      text="test"
    />
    <h2>SocialShareButton</h2>
    <h3>Twitter</h3>
    <social-share-button
      url="http://www.example.com"
      text="test"
      service="twitter"
    />
    <h3>Facebook</h3>
    <social-share-button
      url="http://www.example.com"
      text="test"
      service="facebook"
    />
    <h3>Hatena</h3>
    <social-share-button
      url="http://www.example.com"
      text="test"
      service="hatena"
    />
    <h3>Pocket</h3>
    <social-share-button
      url="http://www.example.com"
      text="test"
      service="pocket"
    />
  </div>
</template>
