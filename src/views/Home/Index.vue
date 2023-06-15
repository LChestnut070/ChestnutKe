<template>
<<<<<<< HEAD
  <div class="blog-content ">
    <div class="ui container ">
      <div class="ui grid stackable">
        <!-- 左侧博客预览部分 -->
        <div class="eleven wide column">
          <!-- header -->
          <div class="ui segment attached blog-content-box blog-content-box-head">
            <div class="ui middle aligned two column grid ">
              <div class="column left aligned">
                <h2 class="ui  header " style="color:  #fd70a1;font-weight: 300;">博客</h2>
              </div>
              <div class="right aligned column">
                共 <h2 class="ui orange header  blog-content-header">12</h2>篇
              </div>
            </div>
          </div>
          <!-- content -->
          <div class="ui padded segment attached blog-content-box blog-content-box-content clearpadded">
            <div class="ui grid stackable mobile reversed blog-content-box-content-neirong">
              <!-- 左侧文章概览文字信息 -->
              <div class="eleven wide column ">
                <h3 class="ui header aligned left">你真的理解什么是财富自由吗</h3>
                <p style="max-height: 50px;overflow: hidden;">
                  正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至从来没有皇帝爱啊很多事适当减少对环境的黄金时间段正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至从来没有皇帝爱啊很多事适当减少对环境的黄金时间段正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至从来没有皇帝爱啊很多事适当减少对环境的黄金时间段
                </p>
                <div class="ui grid" style="margin-bottom: 0">
                  <!-- 文章概览信息 -->
                  <div class="ten wide column ">
                    <div class="ui mini horizontal link list">
                      <div class="item ">
                        <img
                          src="https://s1.wallpapermaiden.com/image/2019/06/12/misaka-mikoto-to-aru-majutsu-no-index-magic-school-uniform-anime-33952.jpeg"
                          class="ui avatar image">
                        <div class="content">
                          <a href="#" class="header">administer</a>
                        </div>
                      </div>
                      <div class="item">
                        <i class="calendar icon"></i>2023-2-18
                      </div>
                      <div class="item">
                        <i class="eye icon"></i>2323
                      </div>
                    </div>
                  </div>
                  <!-- 文章概览标签 -->
                  <div class="six wide column">
                    <div class="ui  list wide">
                      <div class="item" style="float:right;">
                        <a class="ui tag label mini inverted transparent">JavaScript</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 右侧文章概览图片 -->
              <div class="five wide column">
                <a @click="toInformation">
                  <img
                    src="https://s1.wallpapermaiden.com/image/2019/06/12/misaka-mikoto-to-aru-majutsu-no-index-magic-school-uniform-anime-33952.jpeg"
                    alt="" class=" ui image rounded">
                </a>
              </div>
            </div>
            <div class="ui divider attached"></div>
            <div class="ui grid stackable mobile reversed blog-content-box-content-neirong">
              <!-- 左侧文章概览文字信息 -->
              <div class="eleven wide column ">
                <h3 class="ui header aligned left">你真的理解什么是财富自由吗</h3>
                <p>正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至从来没有皇帝爱啊很多事适当减少对环境的黄金时间段</p>
                <div class="ui grid">
                  <!-- 文章概览信息 -->
                  <div class="ten wide column ">
                    <div class="ui mini horizontal link list">
                      <div class="item ">
                        <img
                          src="https://s1.wallpapermaiden.com/image/2019/06/12/misaka-mikoto-to-aru-majutsu-no-index-magic-school-uniform-anime-33952.jpeg"
                          class="ui avatar image">
                        <div class="content">
                          <a href="#" class="header">administer</a>
                        </div>
                      </div>
                      <div class="item">
                        <i class="calendar icon"></i>2023-2-18
                      </div>
                      <div class="item">
                        <i class="eye icon"></i>2323
                      </div>
                    </div>
                  </div>
                  <!-- 文章概览标签 -->
                  <div class="six wide column">
                    <div class="ui  list wide">
                      <div class="item" style="float:right;">
                        <a class="ui tag label mini inverted transparent">JavaScript</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 右侧文章概览图片 -->
              <div class="five wide column">
                <a @click="toInformation">
                  <img
                    src="https://s1.wallpapermaiden.com/image/2019/06/12/misaka-mikoto-to-aru-majutsu-no-index-magic-school-uniform-anime-33952.jpeg"
                    alt="" class=" ui image rounded">
                </a>
              </div>
            </div>
          </div>
          <!-- footer -->
          <div class="ui bottom attached segment blog-content-box blog-content-box-foot">
            <div class="ui middle aligned two column grid ">
              <!-- 上一页 -->
              <div class="column left aligned">
                <button class="ui  labeled icon button  pink inverted">
                  <i class="left arrow icon transparents"></i>
                  Back
                </button>
              </div>
              <!-- 下一页 -->
              <div class="right aligned column">
                <button class="ui right labeled icon button  pink inverted">
                  <i class="right arrow icon transparents"></i>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="five wide column">
          <!-- 右侧分类部分 -->
          <div class="ui segments blog-content-box-head ">
            <!-- header -->
            <div class="ui segment blog-content-box">
              <div class="ui two column grid">
                <div class="column text">
                  <i class="icon idea"></i>分类
                </div>
                <div class="right aligned column">
                  <a href="#" class="">more<i class="icon angle right"></i></a>
                </div>
              </div>
            </div>
            <!-- content -->
            <div class="ui segment transparents">
              <div class="ui fluid vertical menu transparents">
                <a class="item aligned left text">
                  学习日志
                  <div class="ui label" style="display: flex;align-content: center">123</div>
                </a>
                <a class="item aligned left text">
                  学习日志
                  <div class="ui label" style="display: flex;align-content: center">123</div>
                </a>
              </div>
            </div>
          </div>

          <!-- 右侧标签分类 -->
          <div class="ui segments blog-content-box-head">
            <!-- header -->
            <div class="ui segment blog-content-box">
              <div class="ui two column grid">
                <div class="column text">
                  <i class="icon idea"></i>标签云
                </div>
                <div class="right aligned column">
                  <a href="#" class="">more<i class="icon angle right"></i></a>
                </div>
              </div>
            </div>
            <!-- content -->
            <div class="ui segment labels transparents">
              <a class="ui label mini pink circular tagpadded">
                JavaScript
                <div class="detail">214</div>
              </a>
              <a class="ui label mini pink circular tagpadded">
                Dogs
                <div class="detail">214</div>
              </a>
              <a class="ui label mini pink circular tagpadded">
                Dogs
                <div class="detail">214</div>
              </a>
              <a class="ui label mini pink circular tagpadded">
                Dogs
                <div class="detail">214</div>
              </a>
              <a class="ui label mini pink circular tagpadded">
                Dogs
                <div class="detail">214</div>
              </a>

            </div>
          </div>

          <!-- 右侧最热博客 -->
          <div class="ui segments blog-content-box-head">
            <!-- header -->
            <div class="ui segment blog-content-box">
              <div class="ui two column grid">
                <div class="column text">
                  <i class="icon sort amount up"></i>热度
                </div>
                <div class="right aligned column">
                  <a href="#" class="">more<i class="icon angle right"></i></a>
                </div>
              </div>
            </div>
            <!-- content -->
            <div class="ui vertical segment  menu fluid transparents" style="text-align: left;padding: 0">
              <a class="item">
                Visit Google
              </a>
              <a class="item">
                Visit Google
              </a>
              <a class="item">
                Visit Google
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Index",
  data() {
    return {

    }
  },
  methods: {
    toInformation() {
      this.$router.push({ path: 'information' })
    }
  }
=======
  <div class="contenter">

    <!--    公共博客主体内容部分-->


  </div>
</template>

<script>
// import CommonContent from "@/components/CommonContent";

export default {
  name: "Index",
  components: {}
>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
}
</script>

<style lang="less" scoped>
<<<<<<< HEAD
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

    border-left: 1px solid #747171 !important;
    border-right: 1px solid #747171 !important;

    .blog-content-box-content-neirong {
      margin: 0px
    }
  }

  .blog-content-box-foot {
    border-left: 1px solid #747171 !important;
    border-right: 1px solid #747171 !important;
  }

  .tagpadded {
    padding: 7px !important
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
    padding-top: 0px !important;
    padding-left: 10px !important;
    padding-right: 10px !important
  }
}
=======


>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
</style>