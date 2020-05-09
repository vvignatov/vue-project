<template>
	<div>
		<root-component :title="'1. Динамические роуты'">
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
	</div>
</template>

<script>
import Component from './../../hoc/Component.vue'

export default {
	components: {
		rootComponent: Component,
	}
}
</script>

<style>

</style>
