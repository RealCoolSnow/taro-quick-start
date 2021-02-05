<template>
  <view class="flex flex-col items-center mx-auto">
    <view v-if="!userInfo" class="w-4_5 mt-10">
      <Logo />
      <AtButton @tap="onGetUserInfo">getUserInfo</AtButton>
    </view>
    <view class="flex flex-col items-center" v-else>
      <image
        style="width: 100px; height: 100px; border-radius: 100px"
        :src="userInfo.avatarUrl"
      />
      <text class="mt-10">{{ userInfo.nickName }}</text>
    </view>
    <button @tap="httpTest" class="w-4_5 mt-10">Http Test</button>
    <button @tap="inc" class="w-4_5 mt-10">Counter - {{ counter }}</button>
    <navigator url="/pages/about/index" class="w-4_5 mt-10">
      <AtButton type="primary">Show About</AtButton>
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
import { getUserInfo } from '@/utils/login'
import { AtButton } from 'taro-ui-vue'

export default {
  components: {
    Logo,
    AtButton
  },
  setup() {
    const store = useStore()
    const htmlContent = `<div style="color:red">this is html content</div>`
    const counter = computed(() => store.getters.counter)
    const userInfo = computed(() => store.getters.userInfo)
    const onGetUserInfo = () => {
      getUserInfo()
    }
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
      userInfo,
      onGetUserInfo,
      inc,
      htmlContent,
    }
  },
}
</script>
