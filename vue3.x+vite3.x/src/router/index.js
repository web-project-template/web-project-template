import {createRouter, createWebHashHistory} from 'vue-router'

import Layout from '../layout/index.vue'
import components from "./components";

const routes = [
  {
    path: '',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: components['/index'],
      },
      {
        path: '/system/user',
        component: components['/system/user'],
      }
    ]
  },
  {path: '/login', component: components['/login']},
  {path: '/signin', component: components['/signin']},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router