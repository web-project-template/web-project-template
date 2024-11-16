import {createApp} from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
import router from './router'
import store from "./store"
import App from './App.vue'
import './common/styles/index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Vant);
app.use(ElementPlus, {
  locale: locale,
  size: 'default'
})
app.mount('#app')
