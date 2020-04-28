<template>
	<div>
		<p>
			<a :href="url">Google</a>
		</p>

		<p>Counter: {{ counter }}</p>

		<button @click="counter++">Rise</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			url: 'https://google.com',
			counter: 0,
			title: 'Счетчик'
		}
	}
}
</script>

<style>

</style>
