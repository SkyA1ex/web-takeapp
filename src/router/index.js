import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Education from '@/components/Education'
import Customers from '@/components/Customers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Education',
      name: 'Education',
      component: Education
    },
    {
      path: '/Customers',
      name: 'Customers',
      component: Customers
    }
  ]
})
