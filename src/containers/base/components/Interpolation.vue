<template>
	<div>
		<p>String: {{ name }} </p>
		<p>Sum (10 + 190): {{ 10 + 190 }}</p>
		<p>Number: {{ number }}</p>
		<p>Method: {{ sayHello() }}</p>
		<p>If statement: {{ !isOk ? 'I am OK!' : 'I am not OK' }}</p>
		<p>Functions: {{ string.split('').reverse().join('') }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: 'Vue!',
			number: 100,
			isOk: true,
			string: 'My name is Vitalik'
		}
	},
	methods: {
		sayHello: function() {
			return 'I am function';
		}
	}
}
</script>

<style>

</style>
