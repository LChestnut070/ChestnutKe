<template>
<<<<<<< HEAD
    <div class="body">
        
            <a-layout>
                <a-layout-header>
                    <common-header></common-header>
                </a-layout-header>
                <a-layout>
                    <a-layout-content><router-view></router-view></a-layout-content>
                    <a-layout-sider></a-layout-sider>
                    
                </a-layout>
                <br>
                <br>
                <br>
                <br>

                <a-layout-footer>
                    <common-footer></common-footer>
                </a-layout-footer>
            </a-layout>
        


    </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader.vue";
import CommonFooter from "../components/CommonFooter..vue";
export default {
    name: "Main",
    components: { CommonHeader ,CommonFooter},
    
    methods: {
        toLogin() {
            this.$router.push({ name: 'Login' })
        }
    }
=======
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
>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
}
</script>

<style lang="less" scoped>
.body {
<<<<<<< HEAD
    background-size: cover;
    position: relative;
    // text-align: center;
    width: 100vw;
    height: 100vh;
    
}
.blog-content {
    padding-top: 50px;
    
}
.transparents {
    background: rgba(255, 255, 255, 0.1) !important
}

.body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: -1;
    height: 100vh;
     background: url("../assets/images/bg4.png") no-repeat center center;
    // background: white;
    filter: blur(5px);
    background-size: cover;

}

.ant-layout-header {
    background-color: rgba(255, 255, 255, .1);
    backdrop-filter: blur(25px)
}
.ant-layout-footer {
    background-color: rgba(255, 255, 255, .1);
    backdrop-filter: blur(25px)
}
=======
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


>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
</style>