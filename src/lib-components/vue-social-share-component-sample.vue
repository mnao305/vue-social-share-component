<template>
  <div class="vue-social-share-component-sample">
    <p>The counter was {{ changedBy }} to <b>{{ state.counter }}</b>.</p>
    <button @click="increment">
      Click +1
    </button>
    <button @click="decrement">
      Click -1
    </button>
    <button @click="increment(5)">
      Click +5
    </button>
    <button @click="decrement(5)">
      Click -5
    </button>
    <button @click="reset">
      Reset
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive, computed } from '@vue/composition-api'

interface SampleData {
  counter: number;
  initCounter: number;
  message: {
    action: string | null;
    amount: number | null;
  };
}

export default defineComponent({
  name: 'VueSocialShareComponentSample',
  setup () {
    const state: SampleData = reactive({
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null,
      },
    });
    const increment = (arg: Event | number) =>{
      const amount = (typeof arg !== 'number') ? 1 : arg;
      state.counter += amount;
      state.message.action = 'incremented by';
      state.message.amount = amount;
    }
    const decrement = (arg: Event | number) =>{
      const amount = (typeof arg !== 'number') ? 1 : arg;
      state.counter -= amount;
      state.message.action = 'decremented by';
      state.message.amount = amount;
    }
    const reset = () => {
      state.counter = state.initCounter;
      state.message.action = 'reset';
      state.message.amount = null;
    }
    const changedBy = computed(() => {
      const { message } = state;
      if (!message.action) return 'initialized';
      return `${message?.action} ${message.amount ?? ''}`.trim();
    })

    return {state, increment, decrement, reset, changedBy}
  }
})
</script>

<style scoped>
  .vue-social-share-component-sample {
    display: block;
    width: 400px;
    margin: 25px auto;
    border: 1px solid #ccc;
    background: #eaeaea;
    text-align: center;
    padding: 25px;
  }
  .vue-social-share-component-sample p {
    margin: 0 0 1em;
  }
</style>
