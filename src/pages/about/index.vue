<template>
  <view class="flex flex-col items-center p-2">
    <text>{{ msg }}</text>
    <button @tap="back" class="mt-2 bg-blue-500 text-white btn">Back</button>
  </view>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
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
<style scoped>
.btn:active {
  @apply bg-blue-300 text-white;
}
</style>