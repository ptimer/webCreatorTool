import Vue from "vue"
import Router from "vue-router"
import store from "@/store"
import profile from "@/components/profile" 
import signin from "@/components/signin" 
import signup from "@/components/signup" 
import createNewWebsite from "@/components/createNewWebsite"
import mySites from "@/components/mySites"
import constructor from "@/components/constructor"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/createNewWebsite',
      name: 'createNewWebsite',
      component: createNewWebsite
    },
    {
      path: '/constructor',
      name: 'constructor',
      component: constructor
    },
    {
      path: '/mySites',
      name: 'mySites',
      component: mySites,
      beforeEnter(to, from, next){
        store.getters.isUserAuth ? next() : next('/signin')
      }
    },
    {
      path: '/profile',
      name: "profile",
      component: profile,
      beforeEnter(to, from, next){
        store.getters.isUserAuth ? next() : next('/signin')
      }
    },
    {
      path: '/signin',
      name: "signin",
      component: signin
    },
    {
      path: '/signup',
      name: "signup",
      component: signup
    }
  ],
  mode: 'history'
});
