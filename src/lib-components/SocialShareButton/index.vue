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
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  name: 'SocialShareButton',
  props: {
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
    service: {
      type: String as PropType<'twitter' | 'facebook' | 'hatena' | 'pocket'>,
      required: true,
    },
  },
  setup (props) {
    const services = {
      twitter: {
        text: 'Tweet',
        url: 'https://twitter.com/intent/tweet?url={url}&text={text}',
      },
      facebook: {
        text: '',
        url: '',
      },
      hatena: {
        text: '',
        url: '',
      },
      pocket: {
        text: '',
        url: '',
      },
    }

    const urlReplace = (serviceUrl: string, url: string, text?: string) => {
      let replacedUrl = serviceUrl.replace(/{url}/, encodeURIComponent(url))
      if (text) replacedUrl = replacedUrl.replace(/{text}/, encodeURIComponent(text))
      return replacedUrl
    }

    const getUrl = () => {
      return urlReplace(services[props.service].url, props.url, props.text)
    }

    const getText = () => {
      return services[props.service].text
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