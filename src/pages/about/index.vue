<template>
  <view class="container">
    <text>{{ msg }}</text>
    <button @tap="back" class="btn-back">Back</button>
  </view>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import './index.less'
import Taro from '@tarojs/taro'

export default defineComponent({
  setup() {
    const msg = ref('this is about page')
    const back = () => {
      Taro.navigateBack()
    }
    return { msg, back }
  },
})
</script>