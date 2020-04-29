<template>
	<div class="directives">
		<!-- Директива v-colored подключается в файле main.js -->
		<p v-show="visible" v-colored:background.font="'blue'">{{ title }}</p>

		<p v-colored:color.font.delay="'blue'">{{ title2 }}</p>

		<button
			@click="visible = !visible"
		>
			{{ visible ? 'Hide title' : 'Show title' }}
		</button>

		<button
			v-if="visible"
			@click="title = 'New title'"
		>
			Change title
		</button>

		<hr>
		<!-- Директива v-font создается локально -->
		<p v-font>Local font directive</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello i am vue',
			title2: 'Hello again',
			visible: true
		}
	},
	directives: {
		font: {
			bind(el, bindings, vnode) {
				el.style.fontSize = '25px'
			}
		}
	}
}
</script>

<style>
</style>
