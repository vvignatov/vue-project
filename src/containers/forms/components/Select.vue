<template>
	<div>
		<select v-model="selected">
			<option
				v-for="s in socialList"
				:key="s"
			>{{ s }}</option>
		</select>
		<hr>
		<p>Selected: <b>{{ selected }}</b></p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selected: 'instagram',
			socialList: ['instagram', 'vk', 'facebook']
		}
	}
}
</script>

<style>

</style>
