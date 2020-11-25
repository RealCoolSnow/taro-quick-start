<template>
  <view class="container">
    <text>{{ msg }}</text>
    <AtButton @tap="back" class="btn-back" type="secondary">Back</AtButton>
  </view>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import './index.less'
import Taro from '@tarojs/taro'
import { AtButton } from 'taro-ui-vue'
export default defineComponent({
  components: {
    AtButton,
  },
  setup() {
    const msg = ref('this is about page')
    const back = () => {
      Taro.navigateBack()
    }
    return { msg, back }
  },
})
</script>