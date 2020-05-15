// Импортируем VueRouter и компоненты, с которыми он будет работать в отдельный файл

import VueRouter from 'vue-router'
import Base from './containers/base/Base'
import Advance from './containers/advance/Advance'
import Forms from './containers/forms/Forms'
import RoutesPage from './containers/routes/RoutesPage'
import DynamicRoutesCar from './containers/routes/components/DynamicRoutesCar'
import NestedRoutes from './containers/routes/components/NestedRoutes'
import ErrorCmp from './containers/routes/components/404'

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
			path: '/routes',
			component: RoutesPage
		},
		{
			path: '/car/:id', // Динамический роут
			component: DynamicRoutesCar,
			children: [ // вложенные роуты
				{
					path: 'full',
					component: NestedRoutes,
					name: 'carFull'
				}
			]
		},
		{
			path: '/none',
			redirect: '/'
		},
		{
			path: '*',
			component: ErrorCmp
		}
	],
	mode: 'history',
	scrollBehavior (to, from, savedPosition) { // callback метод вызывается при переходе
		if (to.hash) {
			return { selector: to.hash }
		}

		// return {
		// 	x: 0,
		// 	y: 0
		// }
	}
})
