<template>
    <div class="blog-content">
        <div class="ui container">
            <!-- header -->
            <div class="ui attached segment blog-content-box blog-content-box-head">
                <div class="ui middle aligned two column grid ">
                    <div class="column left aligned">
                        <h2 class="ui  header " style="color:  #fd70a1;font-weight: 300;">时间线</h2>
                    </div>
                    <div class="right aligned column">
                        共 <h2 class="ui orange header blog-content-header">12</h2>篇博客
                    </div>
                </div>
            </div>
            <div class="ui padded segment attached  blog-content-box blog-content-box-content clearpadded">
                <h2 class="ui center aligned header">2017</h2>
                <div class="ui fluid vertical menu transparents">
                    <a href="#" class="item">
                        <span>
                            关于刻意练习的清单
                            <div class="ui pink basic left pointing label">9月02</div>
                        </span>
                        <div class="ui pink left pointing label" style="margin-top: 3px">原创</div>
                    </a>
                    <a href="#" class="item">
                        <span>
                            关于刻意练习的清单
                            <div class="ui pink basic left pointing label">9月02</div>
                        </span>
                        <div class="ui pink left pointing label" style="margin-top: 3px">原创</div>
                    </a>
                </div>
                <h2 class="ui center aligned header">2017</h2>
                <div class="ui fluid vertical menu transparents">
                    <a href="#" class="item">
                        <span>
                            关于刻意练习的清单
                            <div class="ui pink basic left pointing label">9月02</div>
                        </span>
                        <div class="ui pink left pointing label" style="margin-top: 3px">原创</div>
                    </a>
                    <a href="#" class="item">
                        <span>
                            关于刻意练习的清单
                            <div class="ui pink basic left pointing label">9月02</div>
                        </span>
                        <div class="ui pink left pointing label" style="margin-top: 3px">原创</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    name: "Index"
}
</script>

<style lang="less" scoped>
.text {
    text-align: left;
    display: flex;
    align-content: center;
    align-items: center;
}

.transparents {
    background: rgba(255, 255, 255, 0.1) !important;
}

.blog-content {
    .blog-content-box-head {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-top: 2px solid #fd70a1 !important;
        border-bottom: 1px solid #747171 !important;
        border-left: 1px solid #747171 !important;
        border-right: 1px solid #747171 !important;
    }

    .blog-content-box-content {
        padding: 50px;
        border-top: 1px solid #747171 !important;
        border-left: 1px solid #747171 !important;
        border-right: 1px solid #747171 !important;
        border-bottom: 1px solid #747171 !important;
    }

    .blog-content-box-foot {
        border-left: 1px solid #747171 !important;
        border-right: 1px solid #747171 !important;
        border-bottom: 1px solid #747171 !important;
    }

    .classify-btn {
        margin: 5px
    }
}

.blog-content-box {
    background: rgba(255, 255, 255, 0.1) !important;
    border: none !important;
}

.blog-content-header {
    display: inline-block;
    margin-right: 5px;
    font-weight: 300;
}
@media screen and(max-width: 768px) {
    .clearpadded {
        padding-left: 10px !important;
        padding-right: 10px !important;
    }
}
</style>