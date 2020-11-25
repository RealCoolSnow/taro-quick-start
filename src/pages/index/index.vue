<template>
  <view class="container">
    <Logo />
    <AtButton @tap="httpTest" class="btn mt-10">Http Test</AtButton>
    <AtButton @tap="inc" class="btn mt-10">Counter - {{ counter }}</AtButton>
    <navigator url="/pages/about/index" class="nav-about mt-10">
      <AtButton>Show About</AtButton>
    </navigator>
    <AtButton
      type="primary"
      class="btn mt-10"
      @tap="state.actionSheetShow = true"
      >Show Action</AtButton
    >
    <AtBadge :value="99" class="mt-10">
      <AtAvatar circle image="https://taro-ui.jd.com/img/logo-taro.png"
    /></AtBadge>
    <view v-html="htmlContent" class="mt-10" />
    <AtActionSheet
      :isOpened="state.actionSheetShow"
      @Close="state.actionSheetShow = false"
      cancelText="取消"
      title="这是标题"
    >
      <AtActionSheetItem> Action - 1 </AtActionSheetItem>
      <AtActionSheetItem> Action - 2 </AtActionSheetItem>
    </AtActionSheet>
  </view>
</template>

<script lang="ts">
import { computed, reactive } from 'vue'
import './index.less'
import { helloGet } from '@/service/api'
import MutationTypes from '@/store/mutation-types'
import Logo from '@/components/Logo.vue'
import { useStore } from 'vuex'
import { showAlert } from '@/utils/util'
import {
  AtButton,
  AtAvatar,
  AtActionSheet,
  AtActionSheetItem,
  AtBadge,
} from 'taro-ui-vue'

export default {
  components: {
    Logo,
    AtButton,
    AtAvatar,
    AtActionSheet,
    AtActionSheetItem,
    AtBadge,
  },
  setup() {
    const store = useStore()
    const state = reactive({
      actionSheetShow: false,
    })
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
      state,
      httpTest,
      counter,
      inc,
      htmlContent,
    }
  },
}
</script>
