import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import {
    Layout,
    Menu,
    Icon
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import {
    MenuItem
} from 'element-ui'

Vue.config.productionTip = false
//antd
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
//elementUi
Vue.use(MenuItem)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
