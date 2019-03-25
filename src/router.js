import Vue from "vue";
import Router from "vue-router";
import books from "@/components/books" 
import profile from "@/components/profile" 
import signin from "@/components/signin" 
import signup from "@/components/signup" 
import words from "@/components/words" 

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/books',
      name: "books",
      component: books
    },
    {
      path: '/profile',
      name: "profile",
      component: profile
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
    },
    {
      path: '/words',
      name: "words",
      component: words
    },
  ],
  mode: 'history'
});
