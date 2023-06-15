<template>
    <footer class="ui vertical segment" style="margin: 0;text-align: center;">
        <div class="ui container aligned center footer-box">
            <div class="ui grid inverted divided stackable">
                <!-- 二维码 -->
                <div class="three wide column">
                    <img src="../assets/images/WeChatpay.jpg" style="width: 110px;height: 110px;" class="ui rounded image footer-img">
                </div>
                <!-- 最新博客 -->
                <div class="three wide column">
                    <h4 class="ui inverted header" style="color: #febcd3">
                        最新博客
                    </h4>
                    <div class="ui inverted link list " >
                        <a href="#" class="item" >用户故事(User Story)</a>
                        <a href="#" class="item">用户故事</a>
                        <a href="#" class="item">用户故事</a>
                    </div>
                </div>
                <!-- 联系我 -->
                <div class="four wide column">
                    <h4 class="ui inverted header">
                        最新博客
                    </h4>
                    <div class="ui inverted link list">
                        <a href="#" class="item">用户故事(User Story)</a>
                        <a href="#" class="item">用户故事</a>
                        <a href="#" class="item">用户故事</a>
                    </div>
                </div>
                <!-- 网站介绍 -->
                <div class="five wide column">
                    <h4 class="ui inverted header">
                        最新博客
                    </h4>
                    
                     <p class="footer-about">这是我的个人博客，会分享关于编程、写作、思考相关的任何内容，希望可以给来到这里的人有所帮助</p>
                    
                </div>
            </div>
            <div class="ui inverted section divider"></div>
            <!-- 备案号 -->
            <p class="footer-foot">Copyright © 2022 - 2023 Lirenmi Designed by Lirenmi</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Index",
}
</script>

<style scoped>
.footer-box {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
}
.footer-img {
    margin: 0 auto
}
.my-font-color {
    color: #febcd3
}
.footer-about {
    color: #cdcbcd;
    letter-spacing: 1px;
}
.footer-foot {
    text-align: center;
    letter-spacing: 1px;
    font-weight: 300;
}
</style>