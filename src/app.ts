import { createApp } from 'vue'
import './app.less'
import store from './store'
import { silentLogin } from './utils/login'

const app = createApp({
  setup() {
    console.log('app created')
    silentLogin()
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
app.use(store)
export default app
