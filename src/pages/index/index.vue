<template>
  <view class="container">
    <button @click="httpTest">Http Test</button>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.less'
import { helloGet } from '../../service/api'

export default {
  setup() {
    const msg = ref('Hello world')
    const httpTest = () => {
      helloGet()
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    return {
      msg,
      httpTest,
    }
  },
}
</script>
