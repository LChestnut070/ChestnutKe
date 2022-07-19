<template>
  <div class="body">
    <div class="main">
      <a-layout>
        <a-layout-header style="background-color: transparent">
          <common-header></common-header>
        </a-layout-header>
        <!--        <a-layout>-->
        <!--          <a-layout-content>Content</a-layout-content>-->
        <!--          <a-layout-sider style="background-color: #a262ad">Side</a-layout-sider>-->
        <!--        </a-layout>-->
        <!--        <a-layout-footer>Footer</a-layout-footer>-->
      </a-layout>
    </div>


  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader";

export default {
  name: "Main",
  components: {CommonHeader},
  comment: {
    CommonHeader
  },
  methods: {
    toLogin() {
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style lang="less" scoped>
.body {
  //background: url("../assets/images/backgroundimage.jpeg") no-repeat;
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
  //background: transparent url("../assets/images/backgroundimage.jpeg") no-repeat center center;
  filter: blur(3px);
  z-index: -1;
  background-size: cover;
}
</style>