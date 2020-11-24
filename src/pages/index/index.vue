<template>
  <view class="container">
    <text>{{ msg }}</text>
    <button size="mini">click</button>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.less'

export default {
  setup () {
    const msg = ref('Hello world')
    return {
      msg
    }
  }
}
</script>
