<template>
	<div>
		<root-component :title="'1. Текстовый инпут'">
			<input type="text" v-model.lazy="name">
			<p>{{ name }}</p>
		</root-component>

		<root-component :title="'2. Текстарея'">
			<textarea v-model="textarea"></textarea>
			<p>{{ textarea }}</p>
		</root-component>

		<root-component :title="'3. Чекбоксы'">
			<app-checkboxes></app-checkboxes>
		</root-component>
	</div>
</template>

<script>
import Component from './../../hoc/Component.vue'
import CheckboxesVue from './components/Checkboxes.vue'


export default {
	data() {
		return {
			name: 'Initial state',
			textarea: 'I am initial text'
		}
	},
	components: {
		rootComponent: Component,
		appCheckboxes: CheckboxesVue
	}
}
</script>

<style scoped>
	textarea {
		width: 400px;
		height: 100px;
	}

	p {
		white-space: pre;
	}
</style>
