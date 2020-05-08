// Импортируем VueRouter и компоненты, с которыми он будет работать в отдельный файл

import VueRouter from 'vue-router'
import Base from './containers/base/Base'
import Advance from './containers/advance/Advance'
import Forms from './containers/forms/Forms.vue'

export default new VueRouter({
	routes: [
		{
			path: '',
			component: Base
		},
		{
			path: '/advance',
			component: Advance
		},
		{
			path: '/forms',
			component: Forms
		}
	],
	mode: 'history'
})
