<template>
  <view class="container">
    <Logo />
    <button @tap="httpTest" class="mt-10">Http Test</button>
    <button @tap="inc" class="mt-10">Counter - {{ counter }}</button>
    <navigator url="/pages/about/index" class="nav-about mt-10">
      <text>Show About</text>
    </navigator>
    <view v-html="htmlContent" class="mt-10" />
  </view>
</template>

<script lang="ts">
import { computed } from 'vue'
import './index.less'
import { helloGet } from '@/service/api'
import MutationTypes from '@/store/mutation-types'
import Logo from '@/components/Logo.vue'
import { useStore } from 'vuex'
import { showAlert } from '@/utils/util'

export default {
  components: {
    Logo,
  },
  setup() {
    const store = useStore()
    const counter = computed(() => store.getters.counter)
    const htmlContent = `<div>
      <img src="https://taro-ui.jd.com/img/logo-taro.png" style="width:30px;height:30px">
      <div style="color:red">this is html content</div>
      </div>`
    const inc = () => {
      store.commit(MutationTypes.APP.SET_COUNTER, 1)
    }
    const httpTest = () => {
      helloGet()
        .then((res) => {
          console.log(res)
          showAlert('httpTest', res)
        })
        .catch((err) => {
          console.log(err)
          showAlert('httpTest', err)
        })
    }
    return {
      httpTest,
      counter,
      inc,
      htmlContent,
    }
  },
}
</script>
