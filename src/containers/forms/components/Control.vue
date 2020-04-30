<template>
	<div>
		<button
			class="on"
			:class="{'active' : value}"
			@click="switchHandler(true)"
		>On</button>
		<button
			class="off"
			:class="{'active' : !value}"
			@click="switchHandler(false)"
		>Off</button>
	</div>
</template>

<script>
export default {
	props: ['value'],
	methods: {
		switchHandler(newValue) {
			this.$emit('input', newValue)
		}
	},
}
</script>

<style scoped>
	button {
		border: 1px solid gray;
		padding: 5px 15px;
		cursor: pointer;
		margin-right: 20px;
		outline: none;
		background: lightgray;
	}
	button:active {
		box-shadow: inset 1px 1px 2px rgba(0, 0, 0, .5);
	}
	.on.active {
		background: green;
		color: #fff;
	}
	.off.active {
		background: red;
		color: #fff;
	}
</style>
