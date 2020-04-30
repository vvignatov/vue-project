<template>
	<div>
		<p><b>Строковые фильтры</b></p>

		<!-- Локальный фильтр lowercase -->
		<p>{{ title | lowercase }}</p>

		<!-- Глобальный фильтр uppercase создается в файле main.js -->
		<p>{{ title | uppercase }}</p>

		<!-- Использование множественного фильтра -->
		<p>{{ title | uppercase | reverse }}</p>

		<br>
		<p><b>Фильтры списков</b></p>

		<input type="text" v-model="searchName">
		<ul>
			<li v-for="(name, index) in filteredNames" :key="index">{{ name }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello i am vue',
			searchName: '',
			names: ['Vlad', 'Max', 'Elena', 'Igor']
		}
	},
	computed: {
		filteredNames() {
			return this.names.filter(name => {
				return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
			})
		}
	},
	filters: {
		lowercase(value) {
			return value.toLowerCase();
		},
		reverse(value) {
			return value.split('').reverse().join('')
		}
	}
}
</script>

<style scoped>
	input {
		margin-bottom: 20px;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>
