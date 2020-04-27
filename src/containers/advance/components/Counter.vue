<template>
	<div>
		<h2>Counter: {{ counter }}</h2>
		<button @click="counter++">Up counter</button>
		<button @click="counter--">Sub counter</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				counter: 0
			}
		}
	}
</script>

<style>
</style>
