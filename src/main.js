import Vue from 'vue'
import App from './App.vue'

export const eventEmitter = new Vue();

export const num = 123;

new Vue({
	el: '#app',
	render: h => h(App)
})

