<template>
	<div class="car">
		<h3>Name: {{ carName }}</h3>
		<p>Year: {{ carYear }}</p>
		<button @click="changeName">Change name</button>
	</div>
</template>

<script>
	export default {
		props: ['carName', 'carYear'],
		methods: {
			changeName() {
				// this.carName = 'New name'
				this.$emit('nameChanged', 'New name')
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
