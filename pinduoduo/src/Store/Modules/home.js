import {reqHome} from '@/api'
const state = {
    goodsList: []
}
const mutations = {
    RECEIVE_GOODS_LIST(state, goosList) {
        state.goodsList = goosList
    }
}
const actions = {
    async getGoodsList({ commit }) {
        const result = await reqHome()
        commit('RECEIVE_GOODS_LIST', result)
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}