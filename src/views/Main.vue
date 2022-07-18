<template>
<div>
<button @click="toLogin">
点我登录
</button>
</div>
</template>

<script>
export default {
  name: "Main",
  methods: {
    toLogin(){
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style scoped>

</style>