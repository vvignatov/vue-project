<template>
	<div>
		<!-- Проверка типа данных и вывод их в watch(по умолчанию string) -->
		<input type="text" v-model.number="age">
		<p>{{ age }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			age: 20
		}
	},
	watch: {
		age(value) {
			return console.log(value)
		}
	}
}
</script>

<style>

</style>
