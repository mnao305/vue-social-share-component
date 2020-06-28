<template>
  <a
    class="social-share-button"
    :class="service"
    :href="getUrl()"
    target="_blank"
  >
    <img
      class="social-share-icon"
      :src="getImgSrc()"
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
        text: 'Share',
        url: 'https://www.facebook.com/sharer/sharer.php?u={url}',
      },
      hatena: {
        text: 'Bookmark',
        url: 'https://b.hatena.ne.jp/add?url={url}',
      },
      pocket: {
        text: 'Pocket',
        url: 'https://getpocket.com/edit?url={url}',
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

    const getImgSrc = () => {
      return require(`./icons/${props.service}.svg`)
    }

    return { getUrl, getText, getImgSrc }
  },
})
</script>

<style lang="scss" scoped>
.social-share-button {
  border: none;
  padding: 14px 40px;
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

  &.facebook {
    background-color: #1877f2;
  }

  &.hatena {
    background-color: #00a4de;
  }

  &.pocket {
    background-color: #ef3f56;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
