<template>
  <view class="container">
    <Logo />
    <van-button @click="httpTest" class="btn mt-10" type="primary">Http Test</van-button>
    <van-button @click="inc" class="btn mt-10"
      >Counter - {{ counter }}</van-button
    >
    <van-button @click="state.actionShow = true" class="btn mt-10"
      >Show Action</van-button
    >
    <navigator url="/pages/about/index" class="nav-about mt-10">
      <van-button>Show About</van-button>
    </navigator>
    <view v-html="htmlContent" class="mt-10" />
    <van-action-sheet
      v-model:show="state.actionShow"
      :actions="state.actions"
      @select="onActionSelect"
      cancel-text="Cancel"
    />
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
import { Button, ActionSheet, Cell } from 'vant'

export default {
  components: {
    Logo,
    'van-button': Button,
    'van-action-sheet': ActionSheet,
    'van-cell': Cell,
  },
  setup() {
    const store = useStore()
    const state = reactive({
      actionShow: false,
      actions: [
        {
          name: 'Action - 1',
          subname: 'this is subname',
          color: 'red',
          value: 1,
        },
        { name: 'Action - 2' },
        { name: 'Action - 3' },
      ],
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
    const onActionSelect = (e: any) => {
      state.actionShow = false
      showAlert('onActionSelect', e)
    }
    return {
      state,
      httpTest,
      counter,
      inc,
      htmlContent,
      onActionSelect,
    }
  },
}
</script>
