<template>
<<<<<<< HEAD
  <div class="blog-content">
    <div class="ui container">
      <!-- header -->
      <div class="ui attached segment blog-content-box blog-content-box-head">
        <div class="ui middle aligned two column grid ">
          <div class="column left aligned">
            <h2 class="ui  header " style="color:  #fd70a1;font-weight: 300;">分类</h2>
          </div>
          <div class="right aligned column">
            共 <h2 class="ui orange header  blog-content-header">12</h2>个
          </div>
        </div>
      </div>
      <!-- tags -->
      <div class="ui bottom attached segment transparents blog-content-box-content clearpadded">

        <a class="ui label large pink circular tags-btn">
          JavaScript
          <div class="detail">214</div>
        </a>
        <a class="ui label large pink circular tags-btn">
          JavaScript
          <div class="detail">214</div>
        </a><a class="ui label large pink circular tags-btn">
          ui
          <div class="detail">21</div>
        </a><a class="ui label large pink circular tags-btn">
          ree
          <div class="detail">214</div>
        </a><a class="ui label large pink circular tags-btn">
          JavaScript
          <div class="detail">214</div>
        </a><a class="ui label large pink circular tags-btn">
          JavaScript
          <div class="detail">214</div>
        </a><a class="ui label large pink circular tags-btn">
          JavaScript
          <div class="detail">214</div>
        </a><a class="ui label large pink circular tags-btn">
          JavaScript
          <div class="detail">214</div>
        </a><a class="ui label large pink circular tags-btn">
          JavaScript
          <div class="detail">214</div>
        </a>


      </div>
      <!-- content -->
      <div class="ui padded top segment attached  blog-content-box blog-content-box-head clearpadded">
        <div class="ui grid stackable mobile reversed clearpadded" style="padding: 20px 30px 0 30px">
          <!-- 左侧文章概览文字信息 -->
          <div class="eleven wide column ">
            <!-- 文章概览标题 -->
            <h3 class="ui header aligned left">你真的理解什么是财富自由吗</h3>
            <!-- 文章概览文字 -->
            <p style="text-align: left;color: #747473;letter-spacing: 1px;max-height: 100px;overflow: hidden;">
              正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至从来没有皇帝爱啊很多事适当减少对环境的黄金时间段
              正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至从来没有皇帝爱啊很多事适当减少对环境的黄金时间段正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至从来没有皇帝爱啊很多事适当减少对环境的黄金时间段正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至从来没有皇帝爱啊很多事适当减少对环境的黄金时间段
            </p>
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
        <div class="ui divider attached" style="margin:30px 0 0 0"></div>

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
  </div>
=======
  <div>标签</div>
>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
</template>

<script>
export default {
<<<<<<< HEAD
  name: "Index",
  methods: {
    toInformation() {
      this.$router.push({ path: 'information' })
    }
  }
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

  .tags-btn {
    margin: 5px !important;
    padding: 6px !important
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
=======
  name: "Index"
}
</script>

<style scoped>

>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
</style>