import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistance from 'vuex-persist'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistance({
    storage: window.localStorage
})

export default new Vuex.Store({
    state: {
        loading: false,
        sending: false,
        error: null,
        user: null,
        reconnect: false,
        activeRoom: null,
        rooms: [],
        users: [],
        messages: [],
        userTyping: null
      },
    mutations,
    actions,
    getters: {
        hasError: state => state.error ? true : false
    },
    plugins: [vuexLocal.plugin],
    strict: debug
})