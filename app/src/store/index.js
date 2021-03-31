import Vue from 'vue'
import Vuex from 'vuex'
import persis from 'vuex-persistedstate'
Vue.use(persis)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    name:''
  },
  mutations: {
    changeList(state,obj){
      state.list=obj
    },
    login(state,val){
      state.name=val
    },
    logout(state){
      state.name=''
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[persis()]
})
