import Vue from 'vue'
import Router from 'vue-router'
import Welfare from '@/components/welfare';
import Care from '@/components/care';
import CreateGroup from '@/components/create_group';
import GroupList from '@/components/group_list';
import GroupCover from '@/components/group_cover';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CreateGroup',
      component: CreateGroup
    },
    {
      path: '/care',
      name: 'Care',
      component: Care
    },
    {
      path: '/welfare',
      name: 'Welfare',
      component: Welfare
    },
    {
      path: '/list',
      name: 'GroupList',
      component: GroupList
    },
    {
      path: '/cover',
      name: 'GroupCover',
      component: GroupCover
    }
  ]
})
