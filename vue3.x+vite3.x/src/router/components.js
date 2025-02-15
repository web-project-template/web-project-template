export default {
  '/login': () => import('../pages/login/index.vue'),
  '/signin': () => import('../pages/signin/index.vue'),
  '/index': () => import('../pages/home/index.vue'),
  '/system/user': () => import('../pages/system/user/index.vue'),
}