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
						<div class="invalid-feedback" v-if="!$v.email.uniqEmail">Пользователь с таким email уже существует</div>
					</div>

					<p>Данные объекта $v.email:</p>
					<pre>{{ $v.email }}</pre>
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
			email: ''
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
					}, 3000)
				})
			}
		}
	}
}
</script>

<style>

</style>
