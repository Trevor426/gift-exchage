import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const record = r => require.ensure([], () => r(require('../page/record/record')), 'record')
const rule = r => require.ensure([], () => r(require('../page/rule/rule')), 'rule')
const giftDetail = r => require.ensure([], () => r(require('../page/giftDetail/giftDetail')), 'giftDetail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/rule',
      name: 'rule',
      component: rule
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/giftDetail',
      name: 'giftDetail',
      component: giftDetail
    }   
  ]
})
