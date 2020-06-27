import { shallowMount, createLocalVue } from '@vue/test-utils'
import SocialShareButton from './index.vue'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('SocialShareButton/index.vue - Twitter', () => {
  it('Display the text passed by Props', () => {
    const wrapper = shallowMount(SocialShareButton, {
      localVue,
      propsData: {
        url: 'http://www.example.com',
        text: 'test',
        service: 'twitter',
      },
    })
    expect(wrapper.text()).toBe('Tweet')
  })
  it('The url passed in Props is set', () => {
    const wrapper = shallowMount(SocialShareButton, {
      localVue,
      propsData: {
        url: 'http://www.example.com',
        text: 'test',
        service: 'twitter',
      },
    })
    expect(wrapper.attributes().href).toBe('https://twitter.com/intent/tweet?url=http%3A%2F%2Fwww.example.com&text=test')
  })
})
