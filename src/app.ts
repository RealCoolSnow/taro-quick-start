import { createApp } from 'vue'
import './tailwind.css'
import './app.less'
import store from './store'
import 'taro-ui-vue/dist/style/index.scss'
import { silentLogin } from './utils/login'

const app = createApp({
  setup(options) {
    console.log('app created')
    silentLogin()
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
app.use(store)
export default app
