import Vue from "vue";
import Vuex from "vuex";
import userModule from "./store/user";
import general from "./store/general";
import mySites from "./store/mySites";
import grids from "./store/grids";

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
  	userModule,
  	general,
  	mySites,
  	grids
  }
});
