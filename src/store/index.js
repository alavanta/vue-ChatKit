import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistance from 'vuex-persist'
import mutations from './mutations'
import actions from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistance({
    storage: window.localStorage
})

export default new Vuex.Store({
    // state: {
    //     loading: false,
    //     sending: false,
    //     error: 'Relax! This is just a drill error message',
    //     user: {
    //         username: 'Deku',
    //         name: 'Midoriya Izuku'
    //     },
    //     reconnect: false,
    //     activeRoom: {
    //         id: '124'
    //     },
    //     rooms: [
    //         {
    //             id: '123',
    //             name: 'Naruto'
    //         },
    //         {
    //             id: '124',
    //             name: 'My Hero Academia'
    //         }
    //     ],
    //     users: [
    //         {
    //             username: 'Deku',
    //             name: 'Midoriya Izuku',
    //             presence: 'online'
    //         },
    //         {
    //             username: 'Naruto',
    //             name: 'Uzumaki Naruto',
    //             presence: 'offline'
    //         },
    //         {
    //             username: 'Tommy',
    //             name: 'Tommy',
    //             presence: 'terminated'
    //         }
    //     ],
    //     messages: [
    //         {
    //             username: 'Deku',
    //             date: '11/12/2019',
    //             text: 'mou daijoubu nazette watashi ga kita'
    //         },
    //         {
    //             username: 'Naruto',
    //             date: '12/12/2019',
    //             text: `I won't run away anymore... I won't go back on my word... that is my ninja way!" "To become Hokage is my dream!`
    //         },
    //         {
    //             username: 'Tommy',
    //             date: '12/12/2019',
    //             text: 'SEEEKIP!'
    //         }
    //     ],
    //     userTyping: null
    // },
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