export default{
  state: {
  	gridsArray: [],
    textsComponentsAdded: [],
    whatElementIsDragging: null
  },
  mutations: {
  	set_gridsArray(state, payload){
  		state.gridsArray.push(payload)
  	},
    set_textsComponentsAdded(state,payload){
      state.textsComponentsAdded.push(payload);
    },
    set_whatElementIsDragging(state, payload){
      state.whatElementIsDragging = payload;
    }
  },
  getters:{
  	get_gridsArray: (state) => state.gridsArray,
    get_textsComponentsAdded: (state, payload) => state.textsComponentsAdded,
    get_whatElementIsDragging: (state, payload) => state.whatElementIsDragging
  }
};