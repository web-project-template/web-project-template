import {createRouter, createWebHashHistory} from 'vue-router'

import Layout from '../layout/index.vue'
import Test from '../pages/test/index.vue'
import About from '../pages/about/index.vue'

const routes = [
  {
    path: '',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('../pages/index.vue'),
      },
      {
        path: '/system/user',
        component: () => import('../pages/system/user/index.vue'),
      }
    ]
  },
  {path: '/test', component: Test},
  {path: '/about', component: About},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router