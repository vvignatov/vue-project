<template>
	<div class="component">
		<div class="component__title">{{ title }} <a v-if="link" :href="link" target="_blank">Подробнее</a></div>
		<div class="component__inner">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: ['title', 'link']
}
</script>

<style>
	.component {
		padding: 20px;
		margin-bottom: 20px;
		border: 1px solid #bebebe;
		border-radius: 10px;
		background-color: #ededed;
	}
	.component__title {
		font: 30px;
		margin-bottom: 20px;
	}
	.component__title a {
		margin-left: 10px;
	}
	.component__inner {
		padding: 0 20px;
	}
</style>
