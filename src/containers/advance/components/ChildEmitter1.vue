<template>
	<div class="car">
		<h3>Name: {{ carName }}</h3>
		<p>Year: {{ carYear }}</p>

		<button @click="updateCounter">Update counter</button>
	</div>
</template>

<script>
import { eventEmitter } from '../../../main' // Импортируем eventEmitter из main.js

export default {
	props: {
		carName: String,
		carYear: Number
	},
	methods: {
		updateCounter() {
			eventEmitter.$emit('counterUpdated') // Передаем в eventEmitter новое событие
		}
	},
}
</script>

<style scoped>
	.car {
		border: 1px solid black;
		padding: 10px;
		border-radius: 10px;
	}
</style>
