<template>
	<div>
		<h2>Counter: {{ counter }}</h2>
		<button @click="updateCounter(1)">Up counter</button>
		<button @click="updateCounter(-1)">Sub counter</button>
	</div>
</template>

<script>
	export default {
		props: ['counter'],
		methods: {
			updateCounter(val) {
				this.$emit('countUpdate', this.counter + val)
			}
		},
	}
</script>

<style>
</style>
