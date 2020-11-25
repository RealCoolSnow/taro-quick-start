<template>
  <view class="container">
    <button @tap="httpTest">Http Test</button>
    <button @tap="inc">Counter - {{ counter }}</button>
    <navigator url="/pages/about/index" class="btn-about">
      <text>about</text>
    </navigator>
  </view>
</template>

<script lang="ts">
import { computed } from 'vue'
import './index.less'
import { helloGet } from '../../service/api'
import Taro from '@tarojs/taro'
import store from '../../store'
import MutationTypes from '../../store/mutation-types'

export default {
  setup() {
    const counter = computed(() => store.getters.counter)
    const inc = () => {
      store.commit(MutationTypes.APP.SET_COUNTER, 1)
    }
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
      httpTest,
      counter,
      inc,
    }
  },
}
</script>
