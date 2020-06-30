import SocialShareComponent from './index.vue'

export default {
  component: SocialShareComponent,
  title: 'SocialShareComponent',
}

export const Default = () => ({
  components: { SocialShareComponent },
  template: '<social-share-component url="example.com" text="example text" />',
})
