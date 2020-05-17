<template>
	<div>
		<root-component :title="'1. Vue-router (работа со ссылками)'">
			<p>Динамические роуты, программная навигация, вложенные роуты, передача параметров, хэш, редирект, защита роутов(guards)</p>
			<app-routes></app-routes>
		</root-component>

		<root-component :title="'2. Vue-resource (работа с сервером)'" :link="'https://github.com/pagekit/vue-resource'">
			<app-resource></app-resource>
		</root-component>

		<root-component :title="'3. Vuex'">
			<p>Состояние counter хранится в vuex($store)</p>
			<app-counter></app-counter>
			<app-second-counter></app-second-counter>
			<hr>
			<app-action ></app-action>
			<hr>
			<p>{{ title }}</p>
		</root-component>
	</div>
</template>

<script>
import Component from './../../hoc/Component.vue'
import Routes from './components/Routes.vue'
import Resource from './components/Resource.vue'
import VuexCounter from './components/VuexCounter.vue'
import VuexAction from './components/VuexAction.vue'
import VuexSecondCounter from './components/VuexSecondCounter.vue'

export default {
	computed: {
		title() {
			return this.$store.state.title
		}
	},
	components: {
		rootComponent: Component,
		appRoutes: Routes,
		appResource: Resource,
		appCounter: VuexCounter,
		appAction: VuexAction,
		appSecondCounter: VuexSecondCounter
	}
}
</script>

<style>

</style>
