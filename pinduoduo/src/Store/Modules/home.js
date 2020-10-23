import { reqHome } from '@/api'
import Vue from 'vue'
const state = {
    goodsList: [],
    cartList:[
      
    ],//购物车列表
}
const mutations = {
    RECEIVE_GOODS_LIST(state, goodsList) {
        state.goodsList = goodsList
    },
    ADD_CARTLIST(state,good){
        let goodObj = state.cartList.find(item=>item.goods_id === good.goods_id)
        if(goodObj){//有该商品
            goodObj.count += 1;
        }else{//没有该商品
            state.cartList.push(good)
             Vue.set(good,'count',1)
             Vue.set(good,'selected',true)
        }
        localStorage.setItem('cartList',JSON.stringify(state.cartList))
    },
    //修改商品数量
    changeCountMutation(state, {isAdd, index}){
		if(isAdd){
			state.cartList[index].count += 1;
		}else {// 减
			// 判断商品的数量是否大于1
			if(state.cartList[index].count > 1){
				state.cartList[index].count -= 1;
			}else {
				// window.showModal({
				// 	content: '你确认删除该商品吗',
				// 	success: (res) => {
				// 		if(res.confirm){
				// 			// 用户确认删除商品
				// 			state.cartList.splice(index, 1)
				// 		}
				// 	}
                // })
                if(confirm('您确认删除该商品吗？')){
                    state.cartList.splice(index, 1)
                }
			}
		}
    },
    changeSelectedMutation(state, {isSelected, index}){
		state.cartList[index].selected = isSelected;
	},
	// 修改全选/全不选的状态
	changeAllSelectedMutation(state, allSelected){
		state.cartList.forEach(item => item.selected = allSelected)
	}
}
const actions = {
    async getGoodsList({ commit }) {
        const result = await reqHome()
        commit('RECEIVE_GOODS_LIST', result)
    }
}
const getters = {
    // isAllSelected(state){
	// 	// every(所有的元素都满足条件) VS some(只要 有一个满足条件就为true)
	// 	return state.cartList.every(item => item.selected)
	// },
	// totalCount(state){
	// 	return state.cartList.reduce((pre, good) => {
	// 		return pre += good.selected?good.count:0;
	// 	}, 0)
	// },
	// totalPrice(state){
	// 	return state.cartList.reduce((pre, good) => {
	// 		return pre += good.selected?good.count * good.retailPrice:0;
	// 	}, 0)
	// }
}
export default {
    state,
    mutations,
    actions,
    getters
}