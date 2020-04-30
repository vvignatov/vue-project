<template>
	<div>
		<label>
			<input type="radio" value="instagram" v-model="social"> Instagram
		</label>

		<label>
			<input type="radio" value="vk" v-model="social"> VK
		</label>

		<label>
			<input type="radio" value="facebook" v-model="social"> Facebook
		</label>

		<hr>

		<p>Selected: <b>{{ social }}</b></p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			social: 'facebook'
		}
	}
}
</script>

<style>

</style>
