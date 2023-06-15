<template>
<<<<<<< HEAD
    <div class="blog-content ">
        <div class="ui container ">
            <div class="ui grid stackable">
                <div class="eleven wide column">
                    <div class="ui segment blog-content-box blog-content-box-foot">
                        <h5>这里是栗子~</h5>
                        <p>很高兴在这里与你相见~</p>
                    </div>
                </div>
                <div class="five wide column">
                    <div class="ui top segment attached blog-content-box blog-content-box-head">
                        <h2 class="ui header " style="color: #fd70a1;">关于我</h2>
                    </div>
                    <div class="ui segment attached blog-content-box blog-content-box-content">
                        <div class="ui stackable mobile reversed">
                            <img src="../../assets/images/backgroundimage.jpeg" class="ui fluid image ">
                            <p class="ui center aligned pink header">Chestnutke</p>
                        </div>
                    </div>
                    <div class="ui segment attached blog-content-box blog-content-box-content">
                        <p class="content">一个菜鸡一个菜鸡一个菜鸡一个菜鸡一个菜鸡一个菜鸡</p>
                    </div>
                    <!-- 联系方式 -->
                    <div class="ui segment attached blog-content-box blog-content-box-foot">
                        <a href="#" class="ui circular icon button"><i class="github icon"></i></a>
                        <a href="#" class="ui wechat circular icon button"><i class="weixin icon"></i></a>
                        <a href="#" class="ui qq circular icon button"><i class="qq icon"></i></a>



                        <div class="ui wechatQR flowing popup transition hidden" style="padding: 0">
                            <img class="ui rounded bordered image" style="width: 80px;height: 80px;"
                                src="../../assets/images/alipay.jpg" alt="">
                        </div>
                        <div class="ui qqQR flowing popup transition hidden" style="padding: 0">
                            <img class="ui rounded bordered image" style="width: 80px;height: 80px;"
                                src="../../assets/images/alipay.jpg" alt="">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { wechatQR, qqQR } from '../../../jQuery_method/swap';
export default {
    name: "Index",
    methods: {

    },
    mounted() {
        wechatQR(),
            qqQR()
    }
}
</script>

<style lang="less" scoped>
.transparents {
    background: rgba(255, 255, 255, 0.1) !important;
}

.blog-content-box {
    background: rgba(255, 255, 255, 0.1) !important;
    border: none !important;
}

.blog-content {
    .blog-content-box-head {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border: 1px solid #747171 !important;
    }

    .blog-content-box-content {

        border-left: 1px solid #747171 !important;
        border-right: 1px solid #747171 !important;

    }

    .blog-content-box-foot {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border: 1px solid #747171 !important;
    }

}
=======
  <div>分类</div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>

>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
</style>