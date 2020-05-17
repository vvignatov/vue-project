<template>
	<p>Second Counter: {{ counter }}</p>
</template>

<script>
	export default {
		computed: {
			counter() {
				return this.$store.getters.computedCounter
			}
		}
	}
</script>

<style>

</style>

