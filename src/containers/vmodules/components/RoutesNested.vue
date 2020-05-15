<template>
	<div>
		<!-- Передача параметров через route -->
		<p>Car name: {{ $route.query.name }}</p>
		<p>Car year: {{ year }}</p>

		<div class="scroll"></div>
		<h6 id="scroll">Hello from the bottom</h6>
	</div>
</template>

<script>
export default {
	computed: {
		year() {
			return this.$route.query.year
		}
	},
	beforeRouteEnter (to, from, next) { // метод вызывается перед тем, как зайти на текущий роут
		console.log('beforeRouteEnter')
		next(true)
	}
}
</script>

<style scoped>
	.scroll {
		width: 100px;
		height: 1000px;
		background-color: #ccc;
	}

</style>
