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
