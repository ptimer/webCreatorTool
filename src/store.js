import Vue from "vue";
import Vuex from "vuex";
import userModule from "./store/user";
import general from "./store/general";

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
  	userModule,
  	general
  }
});
