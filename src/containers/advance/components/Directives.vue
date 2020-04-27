<template>
	<div class="directives">
		<h2 v-show="visible" v-colored:background.font="'blue'">{{ title }}</h2>

		<h2 v-colored:color.font.delay="'blue'">{{ title2 }}</h2>

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
		<h2 v-font>Local font directive</h2>
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
				el.style.fontSize = '40px'
			}
		}
	}
}
</script>

<style>
	.directives {
		min-height: 300px;
	}
</style>
