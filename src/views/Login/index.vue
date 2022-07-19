<template>
  <div class="login">
    <div class="container">
      <div ref="form-box" class="form-box">
        <div ref="register-box" class="register-box hidden">
          <h1>register</h1>
          <input placeholder="用户名" type="text">
          <input placeholder="邮箱" type="email">
          <input placeholder="密码" type="password">
          <input placeholder="确认密码" type="password">
          <button>注册</button>
        </div>
        <div ref="login-box" class="login-box">
          <h1>login</h1>
          <input placeholder="用户名" type="text">
          <input placeholder="密码" type="password">
          <button>登录</button>
        </div>
      </div>
      <div class="con-box left">
        <h2>欢迎来到<span>栗子的博客</span></h2>
        <p>快来一起学习<span>编程知识吧</span></p>
        <img alt="" src="../../assets/images/login1.jpg">
        <p>已有帐号</p>
        <button ref="toLogin" @click="toLogin">去登录</button>
      </div>
      <div ref="" class="con-box right">
        <h2>欢迎来到<span>栗子的博客</span></h2>
        <p>快来看看<span>咱们的温馨小家吧</span></p>
        <img alt="" src="../../assets/images/login2.jpg">
        <p>没有账号？</p>
        <button ref="toRegister" @click="toRegister">去注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {
    toRegister() {
      console.log(this.$refs["form-box"].style)
      this.$refs["form-box"].style.transform = 'translateX(80%)'
      this.$refs["login-box"].classList.add('hidden')
      this.$refs["register-box"].classList.remove('hidden')
    },
    toLogin() {
      this.$refs["form-box"].style.transform = 'translateX(0%)'
      this.$refs["login-box"].classList.remove('hidden')
      this.$refs["register-box"].classList.add('hidden')
    }
  }
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
  background-color: #fff;
  width: 800px;
  height: 600px;
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
    z-index: 2;
    //动画过渡 加速后减速
    transition: 0.5s ease-in-out;

    .register-box, .login-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      h1 {
        text-align: center;
        //大写
        text-transform: uppercase;
        color: #fff;
        letter-spacing: 10px;
        position: absolute;
        top: 150px

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
        position: absolute;
        bottom: 140px;
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
    width: 51%;
    //绝对定位 垂直水平居中
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //绝对定位 居中
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    h2 {
      color: #8e9aaf;
      font-size: 25px;
      font-weight: bold;
      letter-spacing: 5px;
      text-align: center;
      margin-bottom: 10px;
    }

    p {
      font-size: 12px;
      letter-spacing: 2px;
      color: #8e9aaf;
      text-align: center;
    }

    span {
      color: #d3b7d8;
    }

    img {
      width: 150px;
      height: 150px;
      opacity: 0.9;
      margin: 50px 0
    }

    button {
      margin-top: 3%;
      background-color: #fff;
      color: #a262ad;
      border: 1px solid #d3b7d8;
      padding: 5px 10px;
      border-radius: 5px;
      letter-spacing: 2px;
      outline: none;
      cursor: pointer;
    }

    button:hover {
      background-color: #d3b7d8;
      color: #fff
    }
  }

  .left {
    left: -2%;
  }

  .right {
    right: -2%;
  }
}
</style>