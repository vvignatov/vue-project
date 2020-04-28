<template>
	<div>
		<h2 ref="mainTitle">{{ title }}</h2>

		<button @click="buttonHandler">Change</button>
		<button @click="doDestroy">Destroy</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello i am vue! 2'
		}
	},
	methods: {
		buttonHandler: function() {
			this.title = 'New title';
		},
		doDestroy: function() {
			// this.$refs.mainTitle.parentNode.removeChild(this.$refs.mainTitle);
			this.$destroy()
		}
	},
	beforeCreate: function() {
		console.log('before-create')
	},
	created: function() {
		console.log('created')
	},
	beforeMount: function() {
		console.log('beforeMount')
	},
	mounted: function() {
		console.log('Mounted')
	},
	beforeUpdate: function() {
		console.log('beforeUpdate', this.title)
	},
	updated: function() {
		console.log('updated', this.title)
	},
	beforeDestroy: function() {
		console.log('beforeDestroy')
	},
	destroyed: function() {
		console.log('destroyed')
	}
}
</script>

<style>

</style>
