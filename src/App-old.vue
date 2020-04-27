<template>
	<div>
		<h1 class="title">{{ pageTitle }}</h1>

		<div class="component">
			<h2 class="component__title"></h2>
		</div>
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
import Car from './components/Car.vue'
import Counter from './components/Counter.vue'
import Directives from './components/Directives.vue'
import Filters from './components/Filters.vue'


export default {
	data() {
		return {
			carName: 'Ford',
			pageTitle: 'Examles of vue.js synthaxis'
		}
	},
	components: {
		appCar: Car,
		appCounter: Counter,
		appDirectives: Directives,
		appFilters: Filters
	}
}
</script>

<style>
	.title {
		padding: 20px;
		margin-bottom: 20px;
		font-size: 40px;
		text-align: center;
	}
	.component {
		padding: 20px;
		margin-bottom: 20px;
		border: 1px solid black;
	}
	.component__title {
		text-align: center;
		margin-bottom: 10px;
	}
</style>
