import '../../assets/bin/bin.css'
import '../../util/remfontsize.js'
// import './index.styl'
/* eslint-disable */
import Vue from 'vue'
import App from './v-app/v-app.vue'
import Message from '../../components/c-message/'

Vue.config.productionTip = false
Vue.prototype.$message = Message
new Vue({
  el: '#app',
  render:h=>h(App)
})
