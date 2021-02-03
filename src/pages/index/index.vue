<template>
  <view class="flex flex-col items-center mx-auto">
    <Logo />
    <button @tap="httpTest" class="w-4_5 mt-10 text-base">Http Test</button>
    <button @tap="inc" class="w-4_5 text-purple-700 mt-10 text-base">Counter - {{ counter }}</button>
    <navigator url="/pages/about/index" class="w-4_5 mt-10">
      <button class="italic text-base">Show About</button>
    </navigator>
    <view v-html="htmlContent" class="mt-10 text-lg" />
    <view class="mt-10 border-gray-500 border-2 border-dashed w-1_2 text-center">abc</view>
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
