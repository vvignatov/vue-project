<template>
	<div class="car">
		<h3>Name: {{ carName }}</h3>
		<p>Year: {{ carYear }}</p>

		<button @click="updateCounter()">Update counter</button>
	</div>
</template>

<script>
	export default {
		props: {
			carName: String,
			carYear: Number,
			counter: Number
		},
		methods: {
			updateCounter() {
				this.$emit('counterUpdate', this.counter + 10)
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
