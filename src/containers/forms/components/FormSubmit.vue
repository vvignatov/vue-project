<template>
	<div>
		<!-- Привязка события submit -->
		<form @submit.prevent="onSubmit">
			<div class="row">
				<div class="col-4">
					<div class="form-group">
						<label for="email">Email</label>
						<input
							class="form-control"
							:class="{'is-invalid': $v.email.$error}"
							type="email"
							id="email"
							@blur="$v.email.$touch()"
							v-model="email"
						>
						<div class="invalid-feedback" v-if="!$v.email.required">Поле не должно быть пустым</div>
						<div class="invalid-feedback" v-if="!$v.email.email">Пожалуйста введите email</div>
						<div class="invalid-feedback" v-if="!$v.email.uniqEmail">Пользователь с таким email уже существует</div>
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input
							class="form-control"
							:class="{'is-invalid': $v.password.$error}"
							type="password"
							id="password"
							@blur="$v.password.$touch()"
							v-model="password"
						>
						<div class="invalid-feedback" v-if="!$v.password.required">Поле не должно быть пустым</div>
						<div class="invalid-feedback" v-if="!$v.password.minLength">
							Пароль не должен быть короче {{ $v.password.$params.minLength.min }} символов. Вы ввели только {{ password.length }}
						</div>
					</div>
					<div class="form-group">
						<label for="confirm">Confirm password</label>
						<input
							class="form-control"
							:class="{'is-invalid': $v.confirmPassword.$error}"
							type="password"
							id="confirm"
							@blur="$v.confirmPassword.$touch()"
							v-model="confirmPassword"
						>
						<div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
							Пароли не совпадают
						</div>
					</div>
					<div class="row">
						<div class="col-6">
							<button
								class="btn btn-success"
								type="submit"
								:disabled="$v.$invalid"
							>Отправить</button>
						</div>
						<div class="col-6"><p>$v.$invalid = {{$v.$invalid}}</p></div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
	data() {
		return {
			email: '',
			password: '',
			confirmPassword: ''
		}
	},
	methods: {
		onSubmit() {
			console.log('email: ', this.email)
			console.log('password: ', this.password)
		}
	},
	validations: {
		email: {
			required,
			email,
			uniqEmail: function(newEmail) {
				if (newEmail === '') return true
				return new Promise((resoleve, reject) => {
					setTimeout(() => {
						const value = newEmail !== 'test@mail.ru';
						resoleve(value)
					}, 1000)
				})
			}
		},
		password: {
			required,
			minLength: minLength(6)
		},
		confirmPassword: {
			sameAs: sameAs('password')
		}
	}
}
</script>

<style>

</style>
