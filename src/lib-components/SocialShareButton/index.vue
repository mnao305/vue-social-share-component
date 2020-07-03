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
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'SocialShareButton',
  props: {
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
      default: '',
    },
    service: {
      type: String as PropType<'twitter' | 'facebook' | 'hatena' | 'pocket'>,
      required: true,
    },
  },
  data () {
    return {
      services: {
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
      },
    }
  },
  methods: {
    urlReplace (serviceUrl: string, url: string, text?: string) {
      let replacedUrl = serviceUrl.replace(/{url}/, encodeURIComponent(url))
      if (text) replacedUrl = replacedUrl.replace(/{text}/, encodeURIComponent(text))
      return replacedUrl
    },

    getUrl () {
      return this.urlReplace(this.services[this.service].url, this.url, this.text)
    },

    getText () {
      return this.services[this.service].text
    },

    getImgSrc () {
      return require(`./icons/${this.service}.svg`)
    },
  },
})
</script>

<style lang="scss" scoped>
.social-share-button {
  border: none;
  padding: 14px 0;
  min-width: 200px;
  display: block;
  position: relative;
  font-weight: bold;
  text-decoration: none;
  color: white;
  text-align: center;
  font-size: 18px;

  @media screen and (min-width: 600px) {
    display: inline-block;
  }

  .social-share-icon {
    height: 16px;
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
