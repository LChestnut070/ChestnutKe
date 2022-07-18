<template>
  <div class="container">
    <div class="form-box">
      <div class="register-box">
        <h1>register</h1>
        <input placeholder="用户名" type="text">
        <input placeholder="邮箱" type="email">
        <input placeholder="密码" type="password">
        <input placeholder="确认密码" type="password">
      </div>
      <div class="login-box">
        <h1>login</h1>
        <input placeholder="用户名" type="text">
        <input placeholder="密码" type="password">
      </div>
    </div>
    <div class="con-box left">
      <h2>欢迎来到<span>栗子&柯柯的家</span></h2>
      <p>快来一起学习<span>编程知识吧</span></p>
<!--      <img alt="" src="../../assets/login1.jpg">-->
      <p>已有帐号</p>
      <button id="login">去登录</button>
    </div>
    <div class="con-box right">
      <h2>欢迎来到<span>栗子&柯柯的家</span></h2>
      <p>快来看看<span>咱们的温馨小家吧</span></p>
<!--      <img alt="" src="../../assets/login2.jpg">-->
      <p>没有账号？</p>
      <button id="login">去注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>