<template>
<h1>登入</h1>
  <form @submit.prevent="handleSubmit">
    <div class="email">
      <label for="email">E-mail:</label>
    <input type="email" required v-model="email">
    </div>
    <div class="password">
      <label for="email">密碼:</label>
    <input type="password" required v-model="password">
    </div>
    <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
    setup(props, context){
        const email = ref('')
        const password = ref('')

        const { error, login} = useLogin()

        const handleSubmit = async () => {
          await login(email.value, password.value)
          if(!error.value){
            context.emit('login')
          }
        }



        return { email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>