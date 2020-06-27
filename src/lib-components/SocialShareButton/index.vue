<template>
  <a
    class="social-share-button twitter"
    :href="getUrl()"
    target="_blank"
  >
    <img
      class="social-share-icon"
      src="./icons/twitter.svg"
    >
    {{ getText() }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'SocialShareButton',
  setup () {
    const services = {
      twitter: {
        text: 'Tweet',
        url: 'https://twitter.com/intent/tweet?url={url}&text={title}',
      },
      facebook: {},
      hatena: {},
      pocket: {},
    }

    const formatByArr = (serviceUrl: string, url: string, title?: string) => {
      let text = serviceUrl.replace(/{url}/, encodeURIComponent(url))
      if (title) text = text.replace(/{title}/, encodeURIComponent(title))
      return text
    }

    const getUrl = () => {
      return formatByArr(services.twitter.url, 'example.com', 'test')
    }

    const getText = () => {
      return services.twitter.text
    }

    return { getUrl, getText }
  },
})
</script>

<style lang="scss" scoped>
.social-share-button {
  border: none;
  padding: 14px 40px;
  border-radius: 5px;
  display: inline;
  position: relative;
  font-weight: bold;
  text-decoration: none;
  color: white;
  text-align: center;

  .social-share-icon {
    height: 20px;
  }

  &.twitter {
    background-color: #1da1f2;
  }

  &.twitter:hover {
    background-color: #1397d8;
  }
}
</style>
