<template>
	<div>
		<input type="text" v-model.lazy="inputValue">

		<p>{{ inputValue }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			inputValue: 'После ввода нажать Enter'
		}
	}
}
</script>

<style>

</style>
