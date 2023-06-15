<template>
<<<<<<< HEAD
  <nav class="ui inverted segment attached transparents Position">
    <div class="ui container ">
      <div class="ui menu secondary inverte stackable ">
        <!-- logo -->
        <h1 class="ui header item " style="color: #fd70a1">{{ headerLabel }}</h1>
        <!-- 导航 -->
        <a class="item menu-hide menu-show menu-item" v-for="(item, index) in headerMenu" :key="item.path"
          @click="toPage(item, index)" style="color: #febcd3" ref="menu">
          <i :class="item.icon" class="icon small middle"></i>
          {{ item.label }}
        </a>

        <!-- 搜索 -->
        <div class="right item menu-show menu-hide">
          <div class="ui icon input transparent inverted ">
            <input type="text" placeholder="Search...">
            <i class="search icon link "></i>
          </div>
        </div>
      </div>
    </div>
    <button class="ui menu toggle icon button transparents menu-button-hide munu-button-show menu-item"
      @click="showMenu">
      <i class="icon bars"></i>
    </button>
  </nav>
</template>

<script>

=======
  <div class="CommonHeader">
    <!--    logo部分-->
    <span class="header-logo">
      <img alt="" src="../assets/logo.png">
    </span>
    <!--    顶部导航-->
    <div class="header-right">
      <a-menu class="header-menu" mode="horizontal">
        <a-menu-item v-for="(item,index) in headerMenu" :key="item.name" ref="ever-header-menu"
                     class="ever-header-menu"
                     @click="toPage(item,index)">
          <a-icon :type="item.icon"/>
          {{ item.label }}
        </a-menu-item>
      </a-menu>
      <!--      搜索部分-->
      <div class="search">
        <input class="search-input" placeholder="搜索博客..." type="text">
        <a-icon class="search-icon" type="search" @click="searchContent"/>
      </div>
    </div>

  </div>
</template>

<script>
>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
export default {
  name: "CommonHeader",
  methods: {
    toPage(item, index) {
<<<<<<< HEAD
      this.$router.push({ name: item.name })
      $('.menu-item').toggleClass('menu-hide')
    },
    showMenu() {
      console.log(5);
      $('.menu-item').toggleClass('menu-hide')
=======
      this.$refs["ever-header-menu"][index].$el.style.color = '#e08c9b';
      this.$refs["ever-header-menu"][index].$el.style.borderBottomColor = '#e08c9b';
      this.$router.push({name: item.name})
    },
    searchContent() {
      console.log(1)
>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
    }
  },
  data() {
    return {
<<<<<<< HEAD
      headerLabel: "ChestnutKe's BLOG",
      headerMenu: [
        {
          path: '/',
=======
      headerMenu: [
        {
          path: '/home',
>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
          name: 'Home',
          label: '首页',
          icon: 'home'
        }, {
          path: '/classify',
          name: 'Classify',
          label: '分类',
<<<<<<< HEAD
          icon: 'align left'
=======
          icon: 'unordered-list'
>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
        }, {
          path: '/tags',
          name: 'Tags',
          label: '标签',
          icon: 'tags'
        }, {
          path: '/timeline',
          name: 'Timeline',
          label: '时间线',
<<<<<<< HEAD
          icon: 'calendar alternate'
=======
          icon: 'clock-circle'
>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
        }, {
          path: '/about',
          name: 'About',
          label: '关于我',
          icon: 'info'
        }, {
          path: '/message-board',
          name: 'Message-board',
          label: '留言板',
          icon: 'mail'
        }, {
          path: '/links',
          name: 'Links',
          label: '友链',
<<<<<<< HEAD
          icon: 'compass'
=======
          icon: 'paper-clip'
>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
        }
      ]
    }
  }
}
</script>

<<<<<<< HEAD
<style scoped>
.Position {
  position: relative;
  width: calc(100%) !important;
  max-width: calc(100%) !important;
}

.transparents {
  background: transparent !important;
  border: none !important
}

.menu-button-hide {
  display: none !important;
}

.menu-show {
  display: block;
}

@media screen and (max-width: 768px) {
  .menu-hide {
    display: none !important;

  }

  .munu-button-show {
    display: block !important;
    position: absolute;
    top: 15px;
    right: 30px
=======
<style lang="less" scoped>
.CommonHeader {
  width: 80%;
  padding: 10px 0;
  height: 100%;
  //background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;

  .header-logo {
    height: 75px;
    width: 250px;
    //justify-content: space-between;
    align-items: center;
    display: flex;

    img {
      height: 100%;
      width: 100%;

      //transform: scale(0.5)
    }
  }

  .header-right {
    display: flex;
    height: 100%;
    align-items: center;

    .header-menu {
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
      height: 100%;

      .ever-header-menu {
        color: #E08C9BFF;
      }

      .ever-header-menu:hover {
        color: #e08c9b;
        border-bottom: 2px solid #e08c9b;
        background-color: transparent;
      }

      .ever-header-menu:focus {
        color: #E08C9BFF;
        border-bottom: 2px solid #e08c9b;
        background-color: transparent;
        padding: 10px;
      }
    }

    .search {
      display: flex;
      align-items: center;
      width: 100%;
      height: 50px;
      margin-left: 10px;
      position: relative;

      .search-input {
        border: none;
        width: 200px;
        height: 38px;
        background-color: rgba(255, 255, 255, .0%);
        padding: 0 10px;


      }

      .search-input::placeholder {
        color: #E08C9BFF;
      }

      .search-input:focus {
        outline: none;
        border-bottom: 2px solid #e08c9b;
        padding: 25px 10px;
      }

      .search-icon {
        position: absolute;
        right: 0;
        color: #e08c9b;
        font-size: large;
      }
    }
>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
  }
}
</style>