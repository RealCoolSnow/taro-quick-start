<template>
  <view class="container">
    <button @click="httpTest">Http Test</button>
    <navigator url="/pages/about/index" class="btn-about">
      <button>about</button>
    </navigator>
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
          alert(JSON.stringify(res))
        })
        .catch((err) => {
          console.log(err)
          alert(err)
        })
    }
    return {
      msg,
      httpTest,
    }
  },
}
</script>
