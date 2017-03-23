import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import DishList from './component/DishList'
import Login from './component/Login'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: '/login',
      component: Login,
    },{
      path: '/dish',
      component: DishList
    },{
      path: '/',
      component: Login,
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
