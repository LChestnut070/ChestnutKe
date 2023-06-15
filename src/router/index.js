<<<<<<< HEAD
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
            path: '/',
            name: 'Main',
      component: () => import('../views/Main.vue'),
      children: [
        {
        path: '/home',
            name: 'Home',
            component: () => import('../views/Home/Index.vue')
      },
              {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login/Index.vue')
        }, {
            path: 'information',
            name: 'Information',
            component: ()=> import('../views/Information/Index.vue')
        },{
            path: '/classify',
            name: 'Classify',
            component: () => import('../views/Classify/Index.vue')
        }, {
            path: '/tags',
            name: 'Tags',
            component: () => import('../views/Tags/Index.vue')
        }, {
            path: '/timeline',
            name: 'Timeline',
            component: () => import('../views/TimeLine/Index.vue')
        }, {
            path: '/about',
            name: 'About',
            component: () => import('../views/About/Index.vue')
        }, {
            path: '/message-board',
            name: 'Message-board',
            component: () => import('../views/Message-board/Index.vue')
    }, {
      path: '/links',
      name: 'Links',
      component: () => import('../views/Links/Index.vue')
    }
            ]
    },
    
  ]
})
=======
import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: () => import('../views/Main.vue'),
            children: [
                {
                    path: '/home',
                    name: 'Home',
                    component: () => import('../views/Home/Index')
                },
                {
                    path: '/login',
                    name: 'Login',
                    component: () => import('../views/Login/Index')
                }, {
                    path: '/classify',
                    name: 'Classify',
                    component: () => import('../views/Classify/Index.vue')
                }, {
                    path: '/tags',
                    name: 'Tags',
                    component: () => import('../views/Tags/Index.vue')
                }, {
                    path: '/timeline',
                    name: 'Timeline',
                    component: () => import('../views/TimeLine/Index')
                }, {
                    path: '/about',
                    name: 'About',
                    component: () => import('../views/About/Index.vue')
                }, {
                    path: '/message-board',
                    name: 'Message-board',
                    component: () => import('../views/Message-board/Index.vue')
                }, {
                    path: '/links',
                    name: 'Links',
                    component: () => import('../views/Links/Index.vue')
                }
            ]
        },
    ]
})
>>>>>>> a049eca22cb134649b1f996b653580a3477bc6f2
