<template>
  <view class="container">
    <button @tap="httpTest">Http Test</button>
    <navigator url="/pages/about/index" class="btn-about">
      <button>about</button>
    </navigator>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.less'
import { helloGet } from '../../service/api'
import Taro from '@tarojs/taro'

export default {
  setup() {
    const msg = ref('Hello world')
    const httpTest = () => {
      helloGet()
        .then((res) => {
          console.log(res)
          Taro.showModal({ content: JSON.stringify(res), showCancel: false })
        })
        .catch((err) => {
          console.log(err)
          Taro.showModal({ content: err, showCancel: false })
        })
    }
    return {
      msg,
      httpTest,
    }
  },
}
</script>
