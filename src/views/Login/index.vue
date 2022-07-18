<template>
  <div class="login">
    <div class="container">
      <div class="form-box">
        <div class="register-box hidden">
          <h1>register</h1>
          <input placeholder="用户名" type="text">
          <input placeholder="邮箱" type="email">
          <input placeholder="密码" type="password">
          <input placeholder="确认密码" type="password">
          <button>注册</button>
        </div>
        <div class="login-box">
          <h1>login</h1>
          <input placeholder="用户名" type="text">
          <input placeholder="密码" type="password">
          <button>登录</button>
        </div>
      </div>
      <div class="con-box left">
        <h2>欢迎来到<span>栗子的家</span></h2>
        <p>快来一起学习<span>编程知识吧</span></p>
        <img alt="" src="../../assets/logo.png">
        <p>已有帐号</p>
        <button id="login">去登录</button>
      </div>
      <div class="con-box right">
        <h2>欢迎来到<span>栗子的家</span></h2>
        <p>快来看看<span>咱们的温馨小家吧</span></p>
        <img alt="" src="../../assets/logo.png">
        <p>没有账号？</p>
        <button id="login">去注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  //flex布局
  display: flex;
  //水平垂直居中
  align-items: center;
  justify-content: center;
  //颜色渐变
  background: linear-gradient(200deg, #f3e7e9, #e3eeff);
}

.container {
  background-color: #ccc;
  width: 60vw;
  height: 60vh;
  border-radius: 10px;
  //盒子阴影
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  //相对定位
  position: relative;

  .con-box img {
    width: 150px;
    height: 150px;
  }

  .form-box {
    position: absolute;
    background-color: #d3b7d8;
    width: 50%;
    height: 120%;
    top: -10%;
    left: 5%;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    //动画过渡 加速后减速
    transition: 0.5s ease-in-out;

    .register-box, .login-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      h1 {
        text-align: center;
        margin-bottom: 30px;
        //大写
        text-transform: uppercase;
        color: #fff;
        letter-spacing: 10px;
      }

      input {
        background-color: transparent;
        width: 70%;
        color: #fff;
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, .4);
        padding: 10px 0;
        margin: 10px 0;
        letter-spacing: 5px;
      }

      input::placeholder {
        color: #fff
      }

      input:focus {
        color: #a262ad;
        outline: none;
        border-bottom: 1px solid #a262ad80;
        transition: 0.5s;
      }

      button {
        width: 70%;
        margin-top: 40px;
        background-color: #f6f6f6;
        outline: none;
        border-radius: 10px;
        padding: 10px;
        border: none;
        cursor: pointer;
        letter-spacing: 15px;
        color: #a262ad;
      }

      button:hover {
        background-color: #a262ad;
        color: #f6f6f6;
        transition: background-color 0.5s ease;
      }

    }

    .hidden {
      //隐藏元素
      display: none;
      transition: 0.5s;
    }
  }

  .con-box {
    width: 50%;
    //绝对定位 垂直水平居中
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //绝对定位 居中
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

  }
}


</style>