<template>
	<div>
		<h4 v-if="isVisible">I am visible!</h4>
		<h4 v-else>No I am not!</h4>

		<button @click="isVisible = !isVisible">{{isVisible}}</button>

		<hr>

		<h4 v-if="type === 'a'">A</h4>
		<h4 v-else-if="type === 'b'">B</h4>
		<h4 v-else-if="type === 'c'">C</h4>
		<h4 v-else>not match</h4>

		<input type="text" v-model="type">

		<hr>

		<template v-if="isVisibleText">
			<h4>I am title</h4>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, quas?</p>
		</template>
		<template v-else>
			<h4 style="color: red">I am title</h4>
			<p style="color: blue">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, quas?</p>
		</template>

		<button @click="isVisibleText = !isVisibleText">{{ isVisibleText ? 'Colorize' : 'Monochrom' }}</button>

		<hr>

		<h2 v-show="isVShow">I am visible!</h2>
		<h2 v-show="!isVShow">No I am not!</h2>

		<button @click="isVShow = !isVShow">{{isVShow}}</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isVisible: true,
			isVisibleText: true,
			isVShow: true,
			type: 'a'
		}
	}
}
</script>

<style>

</style>
