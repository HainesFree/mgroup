import Vue from 'vue'
import Router from 'vue-router'
import Welfare from '@/components/welfare';
import GroupList from '@/components/group_list';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welfare',
      component: Welfare
    },
    {
      path: '/list',
      name: 'GroupList',
      component: GroupList
    }
  ]
})
