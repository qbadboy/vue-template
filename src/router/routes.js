const routes = [
  {
    name: 'page1',
    path: '/page1',
    component: () => import('../pages/page1.vue')
  },
  {
    name: 'page2',
    path: '/page2',
    component: () => import('../pages/page2.vue')
  }
]
export default routes;