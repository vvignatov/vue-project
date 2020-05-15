<template>
	<div>
		<h1 class="title">{{ pageTitle }}</h1>
		<ul class="nav justify-content-center mb-3">
			<li class="nav-item">
				<router-link class="nav-link text-secondary" to="/" active-class="active" exact>Базовые</router-link>
			</li>
			<li class="nav-item">
				<router-link class="nav-link text-secondary" to="/advance" active-class="active">Дополнительные</router-link>
			</li>
			<li class="nav-item">
				<router-link class="nav-link text-secondary" to="/forms" active-class="active">Работа с формами</router-link>
			</li>
			<li class="nav-item">
				<router-link class="nav-link text-secondary" to="/routes" active-class="active">Роуты</router-link>
			</li>
			<li class="nav-item">
				<router-link class="nav-link text-secondary disabled" to="#" tabindex="-1" aria-disabled="true" active-class="active">Анимация</router-link>
			</li>
		</ul>

		<!-- Альтернативная ссылка с вложенным компонентом -->
		<!-- <router-link tag="li" class="your-class" to="advance" active-class="active">
			<a>Дополнительные</a>
		</router-link> -->

		<!-- контент роута -->
		<router-view></router-view>
	</div>
</template>

<script>


export default {
	data() {
		return {
			pageTitle: 'Основные примеры синтаксиса Vue.js',
		}
	}
}
</script>

<style>
	* {
		font-family: sans-serif;
		color: #333;
	}
	html {
	}
	a {
		color:blue;
	}
	button {
		font-size: 14px;
	}
	button:disabled {
		color: gainsboro;
	}
	.nav-link.active {
		text-decoration: underline;
	}
	.nav-link.disabled {
		opacity: .5;
	}
	.center {
		text-align: center;
	}
	.title {
		padding: 20px;
		margin-bottom: 0;
		font-size: 40px;
		text-align: center;
	}
	.p-20 {
		margin-bottom: 20px;
	}
</style>
