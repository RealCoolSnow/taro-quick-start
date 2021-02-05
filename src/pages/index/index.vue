<template>
  <view class="flex flex-col items-center mx-auto">
    <Logo />
    <view class="w-4_5 mt-10">
      <AtButton @tap="httpTest" class="text-base" type="primary"
        >Http Test</AtButton
      >
    </view>
    <view class="w-4_5 mt-10">
      <AtButton @tap="inc" class="text-purple-700 text-base">
        Counter - {{ counter }}
      </AtButton>
    </view>
    <navigator url="/pages/about/index" class="w-4_5 mt-10">
      <AtButton class="italic text-base">Show About</AtButton>
    </navigator>
    <view v-html="htmlContent" class="mt-10 text-lg" />
    <view class="mt-10 border-gray-500 border-2 border-dashed w-1_2 text-center"
      >abc</view
    >
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
import { AtButton } from 'taro-ui-vue'
export default {
  components: {
    Logo,
    AtButton,
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
