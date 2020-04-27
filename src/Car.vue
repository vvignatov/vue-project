<template>
	<div class="car">
		<slot name="title"></slot>
		<hr>
		<slot name="text"></slot>
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
	}
	.car h2 {
		color: red;
	}
</style>
