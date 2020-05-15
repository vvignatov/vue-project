import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './routes' // импорт файла роутов

import App from './App.vue'

import colorDirective from './directives/colorDirective'

// Поключаем библиотеку VueResource
Vue.use(VueResource)

// Поключаем библиотеку Vuelidate
Vue.use(Vuelidate)

// Поключаем библиотеку Vuerouter
Vue.use(VueRouter)

// Глобальный фильтр uppercase
Vue.filter('uppercase', value => value.toUpperCase())

// Глобальньая директива v-colored
Vue.directive('colored', colorDirective)

// Новый объект vue для связывания событий.
export const eventEmitter = new Vue();

new Vue({
	el: '#app',
	render: h => h(App),
	router // подключение файла роутов
})


