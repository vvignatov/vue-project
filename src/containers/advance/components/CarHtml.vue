<template>
	<div class="car">
		<slot name="title"></slot>
		<p class="blue">Text from component</p>
		<slot name="text"></slot>
		<!-- default slot -->
		<slot></slot>
	</div>
</template>

<script>
	export default {
	}
</script>

<style scoped>
	.car {
		border: 1px solid black;
		padding: 10px;
		border-radius: 10px;
	}
	.blue {
		color: blue;
	}
	.green {
		color: green;
	}
</style>
