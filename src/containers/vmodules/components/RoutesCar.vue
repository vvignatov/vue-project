<template>
	<root-component>
		<h3>Current car page id: {{ id }}</h3>
		<button class="btn btn-small btn-secondary" @click="goBackToCars">Back</button>

		<!-- в директиву "to" передаем данные:
			name - имя дочернего компонента в routes.js
			params - id текущего элемента
			query - параметры ссылки после знака "?"
			hash - хэш ссылки после знака "#"  -->
		<!-- Для сколла страницы по хэшу см. scrollBehavior в routes.js -->
		<router-link
			class="btn btn-small btn-info"
			tag="button"
			:to="{name: 'carFull', params: {id: id}, query: {name: 'Mazda', year: 2000}, hash: '#scroll'}"
		>Full info</router-link>

		<!-- указатель для вложенных роутов(see routes.js - children field) -->
		<router-view></router-view>

		<hr>

		<p>Other car pages:</p>
		<ul>
			<router-link
			tag="li"
			v-for="car in 5"
			:to="'/car/' + car"
			:key="car"
			>
				<a>Car: {{ car }}</a>
			</router-link>
		</ul>


	</root-component>
</template>

<script>
import Component from './../../../hoc/Component.vue'


export default {
	data() {
		return {
			id: this.$router.currentRoute.params['id']
		}
	},
	methods: {
		goBackToCars() {
			this.$router.push('/modules')
		}
	},
	components: {
		rootComponent: Component,
	},
	watch: {
		$route (toR, fromR) {
			// При незначительных изменениях в path, нужно отслеживать изменения id в ручную
			this.id = toR.params['id']
		}
	},
	beforeRouteLeave (to, from, next) {
		if (window.confirm('Are you sure you want to leave?')) {
			next(true)
		}

	}
}
</script>

<style scoped>
	.btn {
		margin-bottom: 20px;
	}
</style>
