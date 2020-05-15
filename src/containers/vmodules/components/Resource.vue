<template>
	<div>
		<h5>Создание объектов POST:</h5>
		<div class="row">
			<div class="col-4">
				<div class="form-group">
					<label for="name">Car name</label>
					<input type="text" class="form-control" id="name" v-model.trim="carName">
				</div>

				<div class="form-group">
					<label for="year">Car year</label>
					<input type="text" class="form-control" id="year" v-model.number="carYear">
				</div>

				<button class="btn btn-success" @click="createCar">Create car</button>
			</div>
		</div>
		<hr>

		<h5>Получение объектов GET:</h5>
		<div class="row">
			<div class="col-4">
				<ul class="list-group mb-3">
					<li
						class="list-group-item"
						v-if="!cars.length"
					>Get new cars list</li>
					<li
						class="list-group-item"
						v-else
						v-for="car of cars"
						:key="car.id"
					><strong>{{ car.name }}</strong> - {{ car.year }}</li>
				</ul>
			</div>
			<div class="col-4">
				<button class="btn btn-success btn-lg" @click="loadCars">Load cars</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			carName: '',
			carYear: '',
			cars: [],
			resource: null
		}
	},
	methods: {
		createCar() {
			const car = {
				name: this.carName,
				year: this.carYear
			}

			// лаконичный метод библиотеки resource
			this.resource.save({}, car)

			// this.$http.post('http://localhost:3000/cars', car)
			// 	.then(response => {
			// 		return response.json()
			// 	})
			// 	.then(newCar => {
			// 		console.log(newCar)
			// 	})
			// console.log(this.resource)
		},
		loadCars() {
			// более лаконичный метод библиотеки resource
			this.resource.get().then(responce => responce.json())
				.then(cars => this.cars = cars)

			// пример использования http
			// this.$http.get('http://localhost:3000/cars')
			// 	.then(response => {
			// 		return response.json()
			// 	})
			// 	.then(cars => {
			// 		this.cars = cars
			// 	})
		},
	},
	created() {
		this.resource = this.$resource('cars')
	}
}
</script>

<style>

</style>
