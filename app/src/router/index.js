import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta:{
      type:true
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/category',
    name: 'classi',
    component: () => import( '../views/classi.vue'),
    meta:{
      type:false
    }

  },
  {
    path: '/details',
    name: 'details',
    component: () => import( '../views/details.vue'),
    meta:{
      title:true
    },
  },
  {
    path: '/user',
    name: 'user',
    component: () => import( '../views/user.vue'),
    meta:{
      title:true
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login.vue')
  },
  {
    path: '/car',
    name: 'car',
    component: () => import( '../views/car.vue'),
    meta:{
      title:true
    },
  },

]
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  // console.log(location)
  if(typeof(location)=="string"){
    var Separator = "&";
    if(location.indexOf('?')==-1) { Separator='?'; }
    location = location + Separator + "random=" + new Date().getTime();
  }
  return routerPush.call(this, location).catch(error=> error)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
import $store from '../store'
router.beforeEach((to,from,next)=>{
  console.log(to);
  if(to.meta.title){
    if($store.state.name.username){
      next()
    }else{
      router.push('/login')
    }
  }else{
    next()
  }
})

export default router
