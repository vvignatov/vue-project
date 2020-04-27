<template>
	<div>
		<app-filters></app-filters>

		<app-directives></app-directives>

		<app-car>
			<h2 slot="title">{{ carName }}</h2>
			<p slot="text">Lorem, ipsum dolor.</p>
		</app-car>
		<app-counter></app-counter>
	</div>
</template>

<script>
import Car from './Car.vue'
import Counter from './Counter.vue'
import AppDirectives from './AppDirectives.vue'
import AppFilters from './AppFilters.vue'


export default {
	data() {
		return {
			carName: 'Ford'
		}
	},
	components: {
		appCar: Car,
		appCounter: Counter,
		appDirectives: AppDirectives,
		appFilters: AppFilters
	}
}
</script>

<style scoped>

</style>
