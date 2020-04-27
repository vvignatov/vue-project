<template>
	<div>
		<root-component :title="'1. Простое свзяывание'">
			<app-interpol></app-interpol>
		</root-component>

		<root-component :title="'2. Динамические атрибуты и вывод HTML'">
			<app-dynamic-attr></app-dynamic-attr>
		</root-component>

		<root-component :title="'3. Добавление событий'">
			<app-events></app-events>
		</root-component>
	</div>
</template>

<script>
import Component from './../../hoc/Component.vue'
import Interpolation from './components/Interpolation.vue'
import DynamycAttr from './components/DynamycAttr.vue'
import Events from './components/Events.vue'

export default {
	components: {
		rootComponent: Component,
		appInterpol: Interpolation,
		appDynamicAttr: DynamycAttr,
		appEvents: Events
	}
}
</script>

<style>

</style>
