<template>
	<div>
		<div class="circle" :style="circleClasses"></div>
		<div class="circle" :style="[circleClasses, {'width': height + 'px'}]"></div>

		<hr>

		<input type="text" v-model="color">
		<input type="text" v-model="height">
	</div>
</template>

<script>
export default {
	data() {
		return {
			color: 'blue',
			height: '100'
		}
	},
	computed: {
		circleClasses: function() {
			return {
				'background': this.color,
				'height': this.height + 'px'
			}
		}
	},
}
</script>

<style scoped>
	.circle {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 1px solid black;
		display: inline-block;
		margin: 40px;
	}

	.red { background: red; }
	.blue { background: blue; }
	.green { background: green; }
</style>
