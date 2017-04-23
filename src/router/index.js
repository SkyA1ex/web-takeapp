import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/Main'
import Education from '@/components/Education'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/main/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Education',
      name: 'Education',
      component: Education
    }
  ]
})
