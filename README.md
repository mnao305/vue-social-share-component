# vue-social-share-component

![image](https://user-images.githubusercontent.com/32170530/86668817-f84bcd00-c02d-11ea-9883-ce78bfaf5ebc.png)

> This is a component that makes it easy to implement social sharing in Vue.js.

[![npm version](https://badge.fury.io/js/vue-social-share-component.svg)](https://badge.fury.io/js/vue-social-share-component)

[DEMO](https://vue-social-share-component.vercel.app/?path=/docs/socialsharecomponent--default)

## Installation

```bash
npm i vue-social-share-component
```

## Usage

```vue
<template>
  <div>
    <social-share-component url="example.com" text="test text message" />
  </div>
</template>

<script>
import { SocialShareComponent } from "vue-social-share-component";

export default {
  name: 'App',
  components: {
    SocialShareComponent
  }
}
</script>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
