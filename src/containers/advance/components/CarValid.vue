<template>
	<div class="car">
		<h3>Name: {{ carName }}</h3>
		<p>Year: {{ carYear }}</p>
		<p>Description: {{ carDesc }}</p>
	</div>
</template>

<script>
	export default {
		props: {
			carName: {
				type: String,
				required: true,
				default: 'Default name'
			},
			carYear: Number,
			carDesc: {
				type: String,
				default: 'Default description'
			}
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
