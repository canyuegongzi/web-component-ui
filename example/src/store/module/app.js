const state = {
    list: []
};
const mutations = {
    setList (state, data = []) {
        state.list = data;
    }
};
const actions = {
    /**
     * 异步请求数据
     * @param store
     * @return {Promise<void>}
     */
    async getList (store) {
        store.commit('setList', []);
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions
};
