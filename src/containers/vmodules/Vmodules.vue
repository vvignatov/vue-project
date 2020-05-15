<template>
	<div>
		<root-component :title="'1. Vue-router (работа с ссылками)'">
			<p>Динамические роуты, программная навигация, вложенные роуты, передача параметров, хэш, редирект, защита роутов(guards)</p>
			<app-routes></app-routes>
		</root-component>

		<root-component :title="'2. Vue-resource (работа с сервером)'" :link="'https://github.com/pagekit/vue-resource'">
			<app-resource></app-resource>
		</root-component>

		<root-component :title="'3. Vuex'">
		</root-component>
	</div>
</template>

<script>
import Component from './../../hoc/Component.vue'
import Routes from './components/Routes.vue'
import Resource from './components/Resource.vue'

export default {
	components: {
		rootComponent: Component,
		appRoutes: Routes,
		appResource: Resource
	}
}
</script>

<style>

</style>
