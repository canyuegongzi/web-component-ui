import Vuex from 'vuex';
import Vue from 'vue';
import app from './module/app';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    getters: {},
    modules: {
        app
    }
});
