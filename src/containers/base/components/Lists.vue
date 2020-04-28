<template>
	<div>
		<ul>
			<li v-for="(person, index) in people" :key="index">{{ index + 1 }}. {{person}}</li>
		</ul>

		<hr>

		<ul>
			<li v-for="(person, index) in persons" :key="index">{{ index + 1 }}. {{ person.name }} - <b>{{ person.age }}</b></li>
		</ul>

		<hr>

		<ol>
			<li v-for="num of 10" :key="num">{{ num }}</li>
		</ol>

		<hr>

		<ul>
			<li v-for="(value, key, index) of recrut" :key="index"><b>{{ index + 1 }} {{ key }} </b>{{ value }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			people: [
				'Max',
				'Vlad',
				'Elena',
				'Volodya'
			],
			persons: [
				{ name: 'Max', age: 25},
				{ name: 'Vlad', age: 21},
				{ name: 'Vika', age: 28},
				{ name: 'Volodya', age: 72}
			],
			recrut: {
				name: 'Max',
				age: '50',
				job: 'Frontend'
			}
		}
	}
}
</script>

<style scoped>
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}
</style>
