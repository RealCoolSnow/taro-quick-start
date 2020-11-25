<template>
  <view class="container">
    <Logo />
    <button @tap="httpTest" class="btn mt-10">Http Test</button>
    <button @tap="inc" class="btn mt-10">Counter - {{ counter }}</button>
    <navigator url="/pages/about/index" class="nav-about mt-10">
      <button>Show About</button>
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
    const htmlContent = `<div style="color:red">this is html content</div>`
    const counter = computed(() => store.getters.counter)
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
