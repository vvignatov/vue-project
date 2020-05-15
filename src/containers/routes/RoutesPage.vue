<template>
	<div>
		<root-component :title="'1. Динамические роуты и программная навигация'">
			<app-dynamic></app-dynamic>
		</root-component>

		<root-component :title="'2. Вложенные роуты'">
			<app-nested></app-nested>
		</root-component>
	</div>
</template>

<script>
import Component from './../../hoc/Component.vue'
import DynamicRoutes from './components/DynamicRoutes.vue'
import NestedRoutes from './components/NestedRoutes.vue'

export default {
	components: {
		rootComponent: Component,
		appDynamic: DynamicRoutes,
		appNested: NestedRoutes
	}
}
</script>

<style>

</style>
