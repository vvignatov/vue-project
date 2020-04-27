<template>
	<div>
		<p>
			<span>v-bind: </span>
			<a v-bind:href="url">Google</a>
		</p>
		<p v-html="link">
		</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			url: 'http://google.com',
			link: '<span>v-html: </span><a href="http://google.com">Google</a>'
		}
	}
}
</script>

<style>

</style>
