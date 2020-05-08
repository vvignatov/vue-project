import Vue from 'vue'
import Vuelidate from 'vuelidate'

import App from './App.vue'

import colorDirective from './directives/colorDirective'

// Поключаем библиотеку Vuelidate
Vue.use(Vuelidate)

// Глобальный фильтр uppercase
Vue.filter('uppercase', value => value.toUpperCase())

// Глобальньая директива v-colored
Vue.directive('colored', colorDirective)

// Новый объект vue для связывания событий.
export const eventEmitter = new Vue();

new Vue({
	el: '#app',
	render: h => h(App)
})


