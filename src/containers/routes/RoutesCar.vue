<template>
	<root-component>
		<h3>Current car page id: {{ id }}</h3>
		<p>Other car pages:</p>
		<router-link
			tag="li"
			v-for="car in 5"
			:to="'/car/' + car"
			:key="car"
		>
			<a>Car: {{ car }}</a>
		</router-link>
	</root-component>
</template>

<script>
import Component from './../../hoc/Component.vue'


export default {
	data() {
		return {
			id: this.$router.currentRoute.params['id']
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
	}
}
</script>

<style>

</style>
