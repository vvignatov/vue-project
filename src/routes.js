// Импортируем VueRouter и компоненты, с которыми он будет работать в отдельный файл

import VueRouter from 'vue-router'
import Base from './containers/base/Base'
import Advance from './containers/advance/Advance'
import Forms from './containers/forms/Forms'
import Cmp404 from './containers/Cmp404'

// компоненты vmodules
import Vmodules from './containers/vmodules/Vmodules'
import RoutesCar from './containers/vmodules/components/RoutesCar'
import RoutesNested from './containers/vmodules/components/RoutesNested'

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
		},
		{
			path: '/modules',
			component: Vmodules
		},
		{
			path: '/car/:id', // Динамический роут
			component: RoutesCar,
			children: [ // вложенные роуты
				{
					path: 'full',
					component: RoutesNested,
					name: 'carFull',
					beforeEnter(to, from, next) { // метод вызывается перед тем, как зайти на текущий роут
						console.log('enter')
						next()
					}
				}
			]
		},
		{
			path: '/none',
			redirect: '/'
		},
		{
			path: '*',
			component: Cmp404
		}
	],
	mode: 'history',
	scrollBehavior (to, from, savedPosition) { // callback метод вызывается при переходе
		if (to.hash) {
			return { selector: to.hash }
		}
	}
})
