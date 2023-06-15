<template>
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

export default {
  name: "CommonHeader",
  methods: {
    toPage(item, index) {
      this.$router.push({ name: item.name })
      $('.menu-item').toggleClass('menu-hide')
    },
    showMenu() {
      console.log(5);
      $('.menu-item').toggleClass('menu-hide')
    }
  },
  data() {
    return {
      headerLabel: "ChestnutKe's BLOG",
      headerMenu: [
        {
          path: '/',
          name: 'Home',
          label: '首页',
          icon: 'home'
        }, {
          path: '/classify',
          name: 'Classify',
          label: '分类',
          icon: 'align left'
        }, {
          path: '/tags',
          name: 'Tags',
          label: '标签',
          icon: 'tags'
        }, {
          path: '/timeline',
          name: 'Timeline',
          label: '时间线',
          icon: 'calendar alternate'
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
          icon: 'compass'
        }
      ]
    }
  }
}
</script>

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
  }
}
</style>