<template>
	<div>
		<button class="btn btn-danger" @click="updateCounter(-1)">Substract</button>
		<button class="btn btn-success" @click="updateCounter(+1)">Add</button>
		<button class="btn btn-success" @click="updateAsync(+1)">Add with delay</button>
	</div>
</template>

<script>
export default {
	methods: {
		updateCounter(value) {
			this.$store.commit('changeCounter', value)

		},
		updateAsync(value) {
			this.$store.dispatch('asyncChangeCounter', {
				counterValue: value,
				timeoutDelay: 1000
			})
		}
	}
}
</script>

<style>

</style>
