# vue-social-share-component

> This is a component that makes it easy to implement social sharing in Vue.js.

## Installation

```bash
npm i vue-social-share-component
```

## Usage

```vue
<template>
  <div>
    <social-share-component service="twitter" url="example.com" text="test text message" />
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
