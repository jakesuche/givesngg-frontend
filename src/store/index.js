
import Vue from 'vue'
import Vuex from "vuex"
import auth from "./modulels/auth"

Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        auth

    }
})