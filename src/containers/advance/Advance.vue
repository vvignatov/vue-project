<template>
	<div>
		<root-component :title="'1. Передача параметров компоненту'">
			<app-car :carName="car.name" :carYear="car.year"></app-car>
		</root-component>

		<root-component :title="'2. Валидация входящих параметров'">
			<app-valid :carName="carValid.name" :carYear="carValid.year"></app-valid>
		</root-component>
	</div>
</template>

<script>
import Component from './../../hoc/Component.vue'
import Car from './components/Car.vue'
import CarValid from './components/CarValid.vue'
// import Directives from './components/Directives.vue'
// import Filters from './components/Filters.vue'

export default {
	data() {
		return {
			car: {
				name: 'Ford from parent',
				year: '2020 from parent'
			},
			carValid: {
				name: 'Mazda',
				year: 2019
			}
		}
	},
	components: {
		rootComponent: Component,
		appCar: Car,
		appValid: CarValid,
		// appDirectives: Directives,
		// appFilters: Filters,
	}
}
</script>

<style>

</style>
