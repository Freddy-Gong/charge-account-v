import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistic from '@/views/Statistic.vue'
import NoMach from '@/views/NoMach.vue'
import EditLabel from '@/views/EditLabel.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistic',
    component: Statistic
  },
  {
    path: '/labels/edit/:id',//:id代表占位
    component: EditLabel
  },
  {
    path: '*',
    component: NoMach
  }
]

const router = new VueRouter({
  routes
})

export default router
