<template>
  <div class="body">
    <div class="main">
      <a-layout>
        <!--       顶部导航-->
        <a-layout-header>
          <common-header></common-header>
        </a-layout-header>
        <!--        内容区域-->
        <a-layout class="content">
          <a-layout-content>
            <common-content></common-content>
          </a-layout-content>
          <!--          侧边区域-->
          <a-layout-sider style="background-color: #a262ad;">
            <router-view></router-view>
          </a-layout-sider>
        </a-layout>
        <!--        底部区域-->
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </div>


  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader";
import CommonContent from "@/components/CommonContent";

export default {
  name: "Main",

  components: {CommonContent, CommonHeader},

  methods: {
    toLogin() {
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style lang="less" scoped>
.body {
  background-size: cover;
  position: relative;
  text-align: center;
  width: 100vw;
  height: 100vh;
  //line-height: 100vh;
}

.body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url("../assets/images/backgroundimage.jpeg") no-repeat center center;
  filter: blur(3px);
  background-size: cover;
}

.ant-layout-header {

  height: 80px;
  background-color: rgba(255, 255, 255, .3);
  backdrop-filter: blur(10px)
}

.content {
  width: 60%;
  text-align: left;
  margin: 50px auto;

  .ant-layout-content {
    z-index: 2;
    border-top: 5px solid #e08c9b;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, .0%);
    border-radius: 10px;
  }

  .ant-layout-sider {
    margin-left: 35px;
  }

  // 侧边菜单栏宽度
  .ant-layout-sider-dark {
    flex: 0 0 250px !important;
    max-width: 250px !important;
    min-width: 250px !important;
    width: 250px !important;
  }
}


</style>