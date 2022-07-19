<template>
  <div class="CommonHeader">
    <span class="header-logo">
      <img alt="" src="../assets/logo.png">
    </span>
    <div class="header-right">
      <a-menu class="header-menu" mode="horizontal">
        <a-menu-item v-for="item in headerMenu" :key="item.name" class="ever-header-menu">
          <a-icon :type="item.icon"/>
          {{ item.label }}
        </a-menu-item>
      </a-menu>
      <div class="search">
        <input placeholder="搜索博客" type="text">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  data() {
    return {
      headerMenu: [
        {
          path: '/',
          name: 'Main',
          label: '首页',
          icon: 'home'
        }, {
          path: '/classify',
          name: 'Classify',
          label: '分类',
          icon: 'unordered-list'
        }, {
          path: '/tags',
          name: 'Tags',
          label: '标签',
          icon: 'tags'
        }, {
          path: '/timeline',
          name: 'Timeline',
          label: '时间线',
          icon: 'clock-circle'
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
          icon: 'paper-clip'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.CommonHeader {
  width: 80%;
  padding: 10px 0;

  background-color: #a262ad;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 99;

  .header-logo img {
    height: 150px;
    width: 150px;
  }

  .header-right {
    display: flex;

    .header-menu {
      background-color: #a262ad;
      border: none;

      .ever-header-menu:hover {
        color: #fff;
        border-bottom: #d3b7d8;
        background-color: transparent;
      }
    }

    .search {
      width: 200px;
      height: 30px;

      input {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>