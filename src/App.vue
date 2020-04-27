<template>
	<div>
		<h1>Parent: {{ carName }}</h1>
		<appCar
			:carName="carName"
			:carYear="carYear"
			:changeFunc="changeNameToAudi"
			@nameChanged="carName = $event"
		></appCar>
		<app-counter></app-counter>
	</div>
</template>

<script>
import Car from './Car.vue'
import Counter from './Counter.vue'

export default {
	data () {
		return {
			carName: 'Ford',
			carYear: 2019
		}
	},
	methods: {
		changeNameToAudi() {
			this.carName = 'Audi'
		}
	},
	components: {
		appCar: Car,
		appCounter: Counter
	}
}
</script>

<style>
</style>
