import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './routes' // импорт файла роутов

import App from './App.vue'

import colorDirective from './directives/colorDirective'

import store from './store'

// Поключаем библиотеку VueResource
Vue.use(VueResource)

// Поключаем библиотеку Vuelidate и определяем url
Vue.use(Vuelidate)
Vue.http.options.root = 'http://localhost:3000/'
Vue.http.interceptors.push(request => {
	request.headers.set('Auth', 'RAND TOKEN' + Math.random())
})

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
	store,
	router // подключение файла роутов
})


