<template>
	<div>
		<!-- Передача параметров через route -->
		<p>Car name: {{ $route.query.name }}</p>
		<p>Car year: {{ year }}</p>
	</div>
</template>

<script>
export default {
	computed: {
		year() {
			return this.$route.query.year
		}
	}
}
</script>

<style>

</style>
