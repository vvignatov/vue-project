<template>
	<div>
		<h1 class="title">{{ pageTitle }}</h1>

		<div class="center  p-20">
			<button @click="current = 'base'">Базовые</button>
			<button @click="current = 'advance'">Дополнительные</button>
			<button :disabled="true">Анимация</button>
		</div>

		<app-base v-if="current === 'base'"></app-base>
		<app-advance v-if="current === 'advance'"></app-advance>
	</div>
</template>

<script>
import Base from './containers/base/Base.vue'
import Advance from './containers/advance/Advance.vue'


export default {
	data() {
		return {
			pageTitle: 'Основные примеры синтаксиса Vue.js',
			current: 'advance'
		}
	},
	components: {
		appBase: Base,
		appAdvance: Advance
	}
}
</script>

<style>
	* {
		font-family: sans-serif;
		color: #333;
	}
	a {
		color:blue;
	}
	button:disabled {
		color: gainsboro;
	}
	.center {
		text-align: center;
	}
	.title {
		padding: 20px;
		margin-bottom: 20px;
		font-size: 40px;
		text-align: center;
	}
	.p-20 {
		margin-bottom: 20px;
	}
</style>
