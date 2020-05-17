import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		counter: 0
	},
	mutations: { // aналог сеттера для vue
		changeCounter(state, payload) { // в случае множественных агргументов, для payload формируется объект
			state.counter += payload
		}
	},
	actions: { // поле для асинхронных запросов
		asyncChangeCounter({commit}, payload) {
			setTimeout(() => {
				commit('changeCounter', payload.counterValue)
			}, payload.timeoutDelay)
		}
	},
	getters: {
		computedCounter(state) {
			return state.counter * 10
		}
	}
})