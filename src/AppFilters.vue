<template>
	<div class="filters">
		<h2>{{ title }}</h2>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Filters'
		}
	}
}
</script>

<style>
	.filters {
		min-height: 300px;
		border-bottom: 1px solid gray;
	}
</style>
