<template>
  <div id="app">
    <ul>
      <li><a href="./index.html"><c-button>跳转页面</c-button></a></li>
      <li><a href="./authorization.html"><c-button>授权</c-button></a></li>
      <li><a id="open" href="javascript:window.localStorage.setItem('vkdev',true)"><c-button>打开调试</c-button></a></li>
      <li><a id="close" href="javascript:window.localStorage.removeItem('vkdev')"><c-button>关闭调试</c-button></a></li>
      <li><c-button @click="clickMessage">消息</c-button></li>
      <li><c-button @click="clickLoading">加载</c-button></li>
    </ul>
    <v-edit-address></v-edit-address>
  </div>
</template>

<script>
import Button from '../../../components/c-button/c-button.vue'
import Loading from '../../../components/c-loading'
import editAddres from '../v-edit-address/v-edit-address.vue'
export default {
  name: 'v-app',
  methods: {
    clickMessage () {
      this.$message({
        showClose: false,
        message: '提示消息'
      })
    },
    clickLoading () {
      let loading = Loading.service({
        fullscreen: true
      })

      setTimeout(() => {
        loading.close()
      }, 2000)
    }
  },
  components: {
    'c-button': Button,
    'v-edit-address': editAddres
  }
}
</script>
<style lang="stylus">
  ul{
    margin:16px;
    li{
      margin:16px 0;
    }
  }
</style>
