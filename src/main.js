<<<<<<< HEAD
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
window.jQuery = $
window.$ = $
import {
    Layout,
  Tooltip,
    Button
} from 'ant-design-vue'
import '../semantic/dist/semantic.css'
import '../semantic/dist/semantic.js'

import '../static/css/typo.css'
import 'animate.css';


Vue.use(Layout);
Vue.use(Tooltip);
Vue.use(Button);


// const setHtmlFontSize = () => {
//   const htmlDom = document.getElementsByTagName('html')[0];
//   let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//   if (htmlWidth >= 750) {
//     htmlWidth = 750;
//   }
//   if (htmlWidth <= 320) {
//     htmlWidth = 320;
//   }
//   htmlDom.style.fontSize = `${htmlWidth / 75}px`;
// };
// window.onresize = setHtmlFontSize;
// setHtmlFontSize();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  
  // antd,
  components: { App },
  template: '<App/>'
})
=======
import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
// import './assets/rem/index'
// import 'lib-flexible'
// import 'amfe-flexible'
import {
    Layout,
    Menu,
    Icon,
    Input
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import {
    Col,
    Row,
    Card
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';


Vue.config.productionTip = false
//antd
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Input);
//elementUi
Vue.use(Col);
Vue.use(Row)
Vue.use(Card)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
