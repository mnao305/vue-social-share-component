import { shallowMount, createLocalVue } from '@vue/test-utils'
import SocialShareButton from './index.vue'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('SocialShareButton/index.vue - Twitter', () => {
  const props = {
    url: 'http://www.example.com',
    text: 'test',
    service: 'twitter',
  }
  it('Display the text passed by Props', () => {
    const wrapper = shallowMount(SocialShareButton, {
      localVue,
      propsData: props,
    })
    expect(wrapper.text()).toBe('Tweet')
  })
  it('The url passed in Props is set', () => {
    const wrapper = shallowMount(SocialShareButton, {
      localVue,
      propsData: props,
    })
    expect(wrapper.attributes().href).toBe('https://twitter.com/intent/tweet?url=http%3A%2F%2Fwww.example.com&text=test')
  })
})

describe('SocialShareButton/index.vue - Facebook', () => {
  const props = {
    url: 'http://www.example.com',
    service: 'facebook',
  }
  it('Display the text passed by Props', () => {
    const wrapper = shallowMount(SocialShareButton, {
      localVue,
      propsData: props,
    })
    expect(wrapper.text()).toBe('Share')
  })
  it('The url passed in Props is set', () => {
    const wrapper = shallowMount(SocialShareButton, {
      localVue,
      propsData: props,
    })
    expect(wrapper.attributes().href).toBe('https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.example.com')
  })
})

describe('SocialShareButton/index.vue - Hatena', () => {
  const props = {
    url: 'http://www.example.com',
    service: 'hatena',
  }
  it('Display the text passed by Props', () => {
    const wrapper = shallowMount(SocialShareButton, {
      localVue,
      propsData: props,
    })
    expect(wrapper.text()).toBe('Bookmark')
  })
  it('The url passed in Props is set', () => {
    const wrapper = shallowMount(SocialShareButton, {
      localVue,
      propsData: props,
    })
    expect(wrapper.attributes().href).toBe('https://b.hatena.ne.jp/add?url=http%3A%2F%2Fwww.example.com')
  })
})

describe('SocialShareButton/index.vue - Pocket', () => {
  const props = {
    url: 'http://www.example.com',
    service: 'pocket',
  }
  it('Display the text passed by Props', () => {
    const wrapper = shallowMount(SocialShareButton, {
      localVue,
      propsData: props,
    })
    expect(wrapper.text()).toBe('Pocket')
  })
  it('The url passed in Props is set', () => {
    const wrapper = shallowMount(SocialShareButton, {
      localVue,
      propsData: props,
    })
    expect(wrapper.attributes().href).toBe('https://getpocket.com/edit?url=http%3A%2F%2Fwww.example.com')
  })
})
