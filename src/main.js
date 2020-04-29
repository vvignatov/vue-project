import Vue from 'vue'
import App from './App.vue'
import colorDirective from './directives/colorDirective'

Vue.directive('colored', colorDirective)

// Новый объект vue для связывания событий.
export const eventEmitter = new Vue();

new Vue({
	el: '#app',
	render: h => h(App)
})


