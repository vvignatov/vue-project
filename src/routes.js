// Импортируем VueRouter и компоненты, с которыми он будет работать в отдельный файл

import VueRouter from 'vue-router'
import Base from './containers/base/Base'
import Advance from './containers/advance/Advance'
import Forms from './containers/forms/Forms'
import RoutesPage from './containers/routes/RoutesPage'
// import RoutesCar from './containers/routes/RoutesCar'
import DynamicRoutesCar from './containers/routes/components/DynamicRoutesCar'

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
			component: DynamicRoutesCar
		}
	],
	mode: 'history'
})
