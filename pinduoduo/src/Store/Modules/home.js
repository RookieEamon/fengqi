import { reqHome } from '@/api'
const state = {
    goodsList: [],
    cartList: [],//购物车列表
}
const mutations = {
    RECEIVE_GOODS_LIST(state, goodsList) {
        state.goodsList = goodsList
        localStorage.setItem('goodsList', JSON.stringify(goodsList))
    },
    ADD_CARTLIST(state, good) {
        state.cartList.push(good)
        localStorage.setItem('cartList', JSON.stringify(state.cartList))
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