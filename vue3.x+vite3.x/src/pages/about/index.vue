<template>
  <div>
    关于：
    <div>姓名：{{userInfo.name}}</div>
    <div>性别：{{userInfo.sex}}</div>
    <div>年龄：{{userInfo.age}}</div>
    <div id="container" style="width:124px;border:1px solid black;">
      <van-text-ellipsis rows="3" :content="text" position="middle"/>
    </div>
  </div>
</template>

<script>
export default {
	name: "index",
	data() {
		return {
			text: `床前看月光，疑是地上霜。举头望山月，低头思故乡。`
		}
	},
	computed: {
		userInfo() {
			return this.$store.state.user.userInfo
		}
	}
}
</script>

<style scoped>

</style>