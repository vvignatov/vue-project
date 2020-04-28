<template>
	<div>
		<div
			class="circle"
			@click="isActive = !isActive"
			:class="getCssClasses"
		></div>

		<div
			class="circle"
			:class="[color, {'red': isActive}]"
		></div>

		<br>
		<input type="text" v-model="color">
	</div>
</template>

<script>
export default {
	data() {
		return {
			isActive: false,
			color: 'blue'
		}
	},
	computed: {
		getCssClasses: function() {
			return {
				'red': this.isActive,
				'green': !this.isActive
			}
		}
	}
}
</script>

<style scoped>
	.circle {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 1px solid black;
		display: inline-block;
		margin: 40px;
	}

	.red { background: red; }
	.blue { background: blue; }
	.green { background: green; }
</style>
