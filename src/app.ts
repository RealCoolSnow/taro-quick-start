import { createApp } from 'vue'
import './app.less'
import 'vant/lib/index.css'
import store from './store'
const app = createApp({
  setup(options) {
    console.log('app created')
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
app.use(store)

export default app
