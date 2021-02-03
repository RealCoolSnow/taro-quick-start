<template>
  <view class="flex flex-col items-center p-8">
    <text>{{ msg }}</text>
    <button @tap="back" class="btn" hover-class="btn-hover">Back</button>
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