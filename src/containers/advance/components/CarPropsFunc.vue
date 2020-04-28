<template>
	<div class="car">
		<h3>Name: {{ carName }}</h3>
		<p>Year: {{ carYear }}</p>

		<button @click="changeFunc()">Change name from parent</button>
	</div>
</template>

<script>
	export default {
		props: {
			carName: String,
			carYear: Number,
			changeFunc: Function
		}
	}
</script>

<style scoped>
	.car {
		border: 1px solid black;
		padding: 10px;
		border-radius: 10px;
	}
</style>
