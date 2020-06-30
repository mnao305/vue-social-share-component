import SocialShareButton from './index.vue'

export default {
  component: SocialShareButton,
  title: 'SocialShareButton',
}

export const Twitter = () => ({
  components: { SocialShareButton },
  template: '<social-share-button service="twitter" url="example.com" text="example text" />',
})

export const Facebook = () => ({
  components: { SocialShareButton },
  template: '<social-share-button service="facebook" url="example.com" text="example text" />',
})

export const Hatena = () => ({
  components: { SocialShareButton },
  template: '<social-share-button service="hatena" url="example.com" text="example text" />',
})

export const Pocket = () => ({
  components: { SocialShareButton },
  template: '<social-share-button service="pocket" url="example.com" text="example text" />',
})
