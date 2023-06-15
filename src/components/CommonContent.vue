<template>
  <div class="contenter">


    <!--    顶部信息-->
    <div class="contenter-header">
      <span>博客</span>
      <span>共<span>2</span>篇</span>
    </div>
    <!--    内容主体-->
    <div class="contenter-body">
      <el-card class="box-card" shadow="never">
        <!--        左侧内容部分-->
        <div class="box-card-left">
          <!--          标题-->
          <div class="box-card-left-header">
            <span>卡片名称</span>
          </div>
          <!--          内容-->
          <div class="text item box-card-left-body">
            <p>
              linux 命令是对 Linux 系统进行管理的命令。对于 Linux 系统来说，无论是中央处理器、内存、磁盘驱动器、键盘、鼠标，还是用户等都是文件， Linux 系统管理的命令是它正常运行的核心，与之前的
              DOS
              命令类似。linux 命令在系统中有两种类型：内置 Shell 命令和 Linux 命令。linux 命令是对 Linux 系统进行管理的命令。对于 Linux
              系统来说，无论是中央处理器、内存、磁盘驱动器、键盘、鼠标，还是用户等都是文件， Linux 系统管理的命令是它正常运行的核心，与之前的
              DOS
              命令类似。linux 命令在系统中有两种类型：内置 Shell 命令和 Linux 命令。
            </p>
            <!--            作者-->
            <div class="box-card-left-body-info">
                <span class="author">
                  <span class="author-img">
                    <img alt="" src="../assets/images/login2.jpg">
                  </span>
                  <span class="author-name">管理员</span>
                </span>
            </div>

          </div>
        </div>
        <!--        右侧图片部分-->
        <div class="box-card-right">
          <img alt="" src="../assets/images/login2.jpg">
        </div>

      </el-card>

      <el-card class="box-card" shadow="never">
        <!--        左侧内容部分-->
        <div class="box-card-left">
          <!--          标题-->
          <div class="box-card-left-header">
            <span>卡片名称</span>
          </div>
          <!--          内容-->
          <div class="text item box-card-left-body">
            <p>
              linux 命令是对 Linux 系统进行管理的命令。对于 Linux 系统来说，无论是中央处理器、内存、磁盘驱动器、键盘、鼠标，还是用户等都是文件， Linux 系统管理的命令是它正常运行的核心，与之前的
              DOS
              命令类似。linux 命令在系统中有两种类型：内置 Shell 命令和 Linux 命令。
            </p>
            <!--            作者-->
            <div class="box-card-left-body-info">
                <span class="author">
                  <span class="author-img"></span>
                  <span class="author-name">管理员</span>
                </span>
            </div>

          </div>
        </div>
        <!--        右侧图片部分-->
        <div class="box-card-right">
          <img alt="" src="../assets/images/login2.jpg">
        </div>

      </el-card>

    </div>
  </div>
</template>

<script>
export default {
  name: "CommonContent"
}
</script>

<style lang="less" scoped>
.contenter {
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, .5);
  border-radius: 10px;

  .contenter-header {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    padding: 15px 20px;
    letter-spacing: 5px;
    border-bottom: 1px rgb(255, 255, 255) solid;

    span:nth-child(1) {
      font-size: 20px;
      color: #e08c9b;
      font-weight: bold;
    }

  }


  .contenter-body {
    .box-card {
      background-color: rgba(255, 255, 255, .0%);
      border: none;
      //display: flex;
      width: 100%;
      position: relative;
      //justify-content: space-between;
      //align-items: center;

      .box-card-left {
        width: 76%;
        float: left;

        .box-card-left-header {
          margin-bottom: 20px;
          font-size: 18px;
          font-weight: bold;
        }

        .box-card-left-body {

          //overflow: hidden;
          color: #645959;
          font-size: 16px;

          p {
            height: 125px;
            overflow: hidden;
            margin-bottom: 20px;
            color: #817777
          }

          .box-card-left-body-info {
            margin-bottom: 20px;

            .author {
              display: flex;
              align-items: center;

              .author-img {
                img {
                  width: 30px;
                  height: 30px;
                  border-radius: 50%;
                  margin-right: 10px;
                }
              }

              .author-name {
                color: #e08c9b;
              }
            }
          }
        }
      }

      .box-card-right {
        width: 22%;
        float: right;
        padding: 1% 0;

        img {
          width: 100%;
          height: 100%;
        }
      }

    }

    .box-card::after {
      position: absolute;
      content: '';
      display: block;
      width: 90%;
      background-color: white;
      margin: 0 auto;
      height: 1px;
      bottom: 0;
      left: 5%;
    }
  }
}
</style>