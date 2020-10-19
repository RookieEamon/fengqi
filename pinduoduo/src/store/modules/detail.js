import { goodsList } from '@/api'

export default {
    state: {
        detGoodsList: []
    },
    mutations: {
        DETGOODSLIST(state, detGoodsList) {
            state.detGoodsList = detGoodsList
        }
    },

    actions: {
        async GETDETGOODSLIST({ commit }) {
            const ressult = await goodsList()
            if (ressult.code === 200) {
                commit('DETGOODSLIST', result)
            }
        }
    },

    getters: {

    }
}