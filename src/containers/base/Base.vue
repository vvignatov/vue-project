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

		<root-component :title="'4. Модификаторы событий(prevent, stop, keyboard keys)'">
			<app-events-mod></app-events-mod>
		</root-component>

		<root-component :title="'5. Ярлыки для директив(:, @)'">
			<app-labels></app-labels>
		</root-component>

		<root-component :title="'6. Модель для работы с формами(v-model)'" :link="'https://ru.vuejs.org/v2/guide/forms.html'">
			<app-form-model></app-form-model>
		</root-component>

		<root-component :title="'7. Работа с CSS классами'" :link="'https://ru.vuejs.org/v2/guide/class-and-style.html'">
			<app-css-classes></app-css-classes>
		</root-component>

		<root-component :title="'8. Динамические стили'">
			<app-dynamic-styles></app-dynamic-styles>
		</root-component>

		<root-component :title="'9. Управление отображением элементов(v-if, v-else, v-show)'">
			<app-elements></app-elements>
		</root-component>

		<root-component :title="'10. Работа со списками(v-for of, v-for in)'">
			<app-lists></app-lists>
		</root-component>

		<root-component :title="'11. Методы computed и watch'">
			<app-computed></app-computed>
		</root-component>

		<root-component :title="'12. Доступ к DOM элементам(refs)'">
			<app-refs></app-refs>
		</root-component>

		<root-component :title="'13. Жизненный цикл(примеры в консоли)'">
			<app-life-cycles></app-life-cycles>
		</root-component>
	</div>
</template>

<script>
import Component from './../../hoc/Component.vue'
import Interpolation from './components/Interpolation.vue'
import DynamicAttr from './components/DynamicAttr.vue'
import Events from './components/Events.vue'
import EventsMod from './components/EventsMod.vue'
import Labels from './components/Labels.vue'
import FormModel from './components/FormModel.vue'
import CssClasses from './components/CssClasses.vue'
import DynamicStyles from './components/DynamicStyles.vue'
import Elements from './components/Elements.vue'
import Lists from './components/Lists.vue'
import Computed from './components/Computed.vue'
import Refs from './components/Refs.vue'
import LifeCycles from './components/LifeCycles.vue'


export default {
	components: {
		rootComponent: Component,
		appInterpol: Interpolation,
		appDynamicAttr: DynamicAttr,
		appEvents: Events,
		appEventsMod: EventsMod,
		appLabels: Labels,
		appFormModel: FormModel,
		appCssClasses: CssClasses,
		appDynamicStyles: DynamicStyles,
		appElements: Elements,
		appLists: Lists,
		appComputed: Computed,
		appRefs: Refs,
		appLifeCycles: LifeCycles
	}
}
</script>

<style>

</style>
