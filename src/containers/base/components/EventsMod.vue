<template>
	<div>
		<p><a href="https://google.com" target="_blank" v-on:click.prevent>Google</a></p>

		<p v-on:mousemove="handleMouseMove">
			X: {{ x }} \ Y: {{ y }}

			<span v-on:mousemove.stop="">Не изменять</span>
		</p>

		<hr>

		<input type="text" v-on:keyup.enter.space="alertValue">
	</div>
</template>

<script>
export default {
	data() {
		return {
			x: 0,
			y: 0
		}
	},
	methods: {
		handleMouseMove: function(event) {
			this.x = event.clientX
			this.y = event.clientY
		},
		alertValue: function(event) {
			alert(event.target.value)
		}
	}
}
</script>

<style>

</style>
