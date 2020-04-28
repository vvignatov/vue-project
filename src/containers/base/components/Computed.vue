<template>
	<div>
		<h2>Counter: {{ counter }} \ {{ counter2 }}</h2>
		<h3>{{ result }}</h3>

		<button @click="add">Add</button>
		<button @click="sub">Sub</button>

		<button @click="counter2++">Add Counter2</button>
		<button @click="counter2--">Sub Counter2</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			counter: 0,
			counter2: 0
		}
	},
	computed: {
		result: function() {
			console.log('Result was called')
			return  this.counter > 3 ? 'More than 3' : 'Less than 3'
		}
	},
	methods: {
		add: function() {
			this.counter++
		},
		sub: function() {
			this.counter--
		},

	},
	watch: {
		counter: function() {
			console.log(this.counter)
		}
	}
}
</script>

<style>

</style>
