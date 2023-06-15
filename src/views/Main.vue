<template>
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
}
</script>

<style lang="less" scoped>
.body {
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
</style>