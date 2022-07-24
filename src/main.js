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
