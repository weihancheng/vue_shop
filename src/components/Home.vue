<template>
  <view>
    <el-button type="info" @click="logout">退出</el-button>
  </view>
</template>

<script>
export default {
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
