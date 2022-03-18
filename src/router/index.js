import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogIndex from '@/views/BlogIndex.vue'
import BlogList from '@/views/BlogList.vue'
import LeftContainer from '@/views/list/LeftContainer.vue'
import BlogDetail from '@/views/BlogDetail.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: BlogIndex },
  {
    path: '/list',
    component: BlogList,
    children:
    [{ path: ':tag', component: LeftContainer, props: true }]
  },
  { path: '/detail', component: BlogDetail }
]

const router = new VueRouter({
  routes
})

export default router
