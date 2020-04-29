<template>
	<div>
		<h2>Counter: {{ counter }}</h2>
		<button @click="updateCounter(1)">Up counter</button>
		<button @click="updateCounter(-1)">Sub counter</button>
	</div>
</template>

<script>
import { eventEmitter } from '../../../main'
	export default {
		data() {
			return {
				counter: 0
			}
		},
		methods: {
			updateCounter(val) {
				this.counter += val
			}
		},
		created() {
			// Привязываем событие другого элемента через eventEmitter
			eventEmitter.$on('counterUpdated', () => {
				this.counter += 10
			})
		}
	}
</script>

<style>
</style>
