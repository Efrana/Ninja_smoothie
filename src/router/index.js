import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import AddSmoothie from '@/components/AddSmoothie'
import HelloWorld from '@/components/HelloWorld'
import EditSmoothie from '@/components/EditSmoothie'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
     
      path: '/add-smoothie',
      name: 'AddSmoothie',
      component: AddSmoothie
  },
   {
     
      path: '/edit-smoothie/:smoothie_slug',
      name: 'EditSmoothie',
      component:EditSmoothie
  },
 
 
]

const router = new VueRouter({
  routes
})

export default router
