import Vue from 'vue'
import App from './App.vue'
import ColorDirective from './ColorDirective'

Vue.directive('colored', ColorDirective)

export const eventEmitter = new Vue();

new Vue({
	el: '#app',
	render: h => h(App)
})

