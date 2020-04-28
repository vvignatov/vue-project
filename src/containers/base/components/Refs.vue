<template>
	<div>
		<h2 ref="heading">{{ title }}</h2>
		<button @click="updateTitle">Button</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello i am vue!'
		}
	},
	methods: {
		updateTitle: function() {
			this.title = 'New title!';
			this.$refs.heading.style.color = 'red';
			console.log(this.$refs)
		}
	}
}
</script>

<style>

</style>
