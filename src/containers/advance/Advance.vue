<template>
	<div>
		<root-component :title="'1. Передача параметров компоненту (props: [])'">
			<app-car :carName="car.name" :carYear="car.year"></app-car>
		</root-component>

		<root-component :title="'2. Валидация входящих параметров (props: {})'">
			<app-valid :carName="carValid.name" :carYear="carValid.year"></app-valid>
		</root-component>

		<root-component :title="'3. Передача параметров от дочернего компонента ($emit)'">
			<p>Parent name: {{ carEmit.name }}</p>
			<app-car-emit
				:carName="carEmit.name"
				:carYear="carEmit.year"
				@nameChanged="carEmit.name = $event"
			></app-car-emit>
		</root-component>

		<root-component :title="'4. Передача функции как параметр'">
			<p>Parent name: {{ carFunc.name }}</p>
			<app-car-props-func
				:carName="carFunc.name"
				:carYear="carFunc.year"
				:changeFunc="changeNameToAudi"
			></app-car-props-func>
		</root-component>

		<root-component :title="'5. Связь дочерних компонентов($emit)'">
			<p>Компонент 1</p>
			<app-child2 :counter="counter" @countUpdate="counter = $event"></app-child2>

			<hr>

			<p>Компонент 2</p>
			<app-child1
				:carName="carChild.name"
				:carYear="carChild.year"
				:counter="counter"
				@counterUpdate="counter = $event"
			></app-child1>
		</root-component>

		<root-component :title="'6. Использование event emitter'">
			<!-- Заводим новый объект vue (const eventEmitter в main.js). Свойство counter остается только в компоненте счетчика -->
			<p>Компонент 1</p>
			<app-child-emitter2></app-child-emitter2>

			<hr>

			<p>Компонент 2</p>
			<app-child-emitter1
				:carName="carChild.name"
				:carYear="carChild.year"
			></app-child-emitter1>
		</root-component>
	</div>
</template>

<script>
import Component from './../../hoc/Component.vue'
import Car from './components/Car.vue'
import CarValid from './components/CarValid.vue'
import CarEmit from './components/CarEmit.vue'
import CarPropsFunc from './components/CarPropsFunc.vue'
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'
import ChildEmitter1 from './components/ChildEmitter1'
import ChildEmitter2 from './components/ChildEmitter2'
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
			},
			carEmit: {
				name: 'BMW',
				year: 2018
			},
			carFunc: {
				name: 'KIA',
				year: 2017
			},
			carChild: {
				name: 'Volvo',
				year: 2016
			},
			counter: 0
		}
	},
	methods: {
		changeNameToAudi() {
			this.carFunc.name = 'Audi'
		}
	},
	components: {
		rootComponent: Component,
		appCar: Car,
		appValid: CarValid,
		appCarEmit: CarEmit,
		appCarPropsFunc: CarPropsFunc,
		appChild1: Child1,
		appChild2: Child2,
		appChildEmitter1: ChildEmitter1,
		appChildEmitter2: ChildEmitter2
		// appDirectives: Directives,
		// appFilters: Filters,
	}
}
</script>

<style>

</style>
