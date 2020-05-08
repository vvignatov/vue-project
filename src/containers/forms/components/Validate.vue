<template>
	<div>
		<form >
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
					</div>

					<p>Данные объекта $v.email:</p>
					<pre>{{ $v.email }}</pre>
				</div>
				<div class="col-4">
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

					<p>Данные объекта $v.password:</p>
					<pre>{{ $v.password }}</pre>
				</div>
				<div class="col-4">
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

					<p>Данные объекта $v.confirmPassword:</p>
					<pre>{{ $v.confirmPassword }}</pre>
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
	validations: {
		email: {
			required,
			email
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
