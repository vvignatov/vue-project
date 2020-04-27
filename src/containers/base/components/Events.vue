<template>
	<div>
		<p>Счетчик: {{ counter }}</p>

		<button v-on:click="riseCounter">Увеличить</button>

		<hr>

		<p>Счетчик 2: {{ counter2 }}</p>

		<button
			v-on:click="counter2++"
			v-on:mouseenter="onHover"
			v-on:mouseleave="onLeave"
		>Увеличить</button>
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
	methods: {
		riseCounter: function() {
			this.counter++
		},
		onHover: function(event) {
			event.target.style.color = 'red'
		},
		onLeave: function(leave) {
			event.target.style.color = ''
		}
	}
}
</script>

<style>

</style>
