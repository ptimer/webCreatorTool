import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

import firebase from "firebase/app"
var config = {
      apiKey: "AIzaSyDT8SFLqJktvIvn4jPyqXt8Fm7rlyotqBM",
      authDomain: "database-43762.firebaseapp.com",
      databaseURL: "https://database-43762.firebaseio.com",
      projectId: "database-43762",
      storageBucket: "database-43762.appspot.com",
      messagingSenderId: "1033539267681"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
  	let vm = this
  	firebase.auth().onAuthStateChanged(function(user) {
  		vm.$store.dispatch('STATE_CHANGED', user)
	});
  }
}).$mount("#app");
