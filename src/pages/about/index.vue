<template>
  <view>{{ msg }}</view>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const msg = ref('about page')
    return { msg }
  },
})
</script>