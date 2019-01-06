import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Test from '@/components/Test'
import Classification from '@/components/Classification'
import Region from '@/components/Region'
import Team from '@/components/Team'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/hs-boys',
      name: 'HighSchoolBoys',
      component: Classification
    },
    {
      path: '/r/:region',
      name: 'Region',
      component: Region
    },
    {
      path: '/t/:team/:season',
      name: 'Team',
      component: Team
    }
  ]
})
