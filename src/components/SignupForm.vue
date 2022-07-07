<template>
 <h1>註冊</h1>
  <form @submit.prevent="handleSubmit">
    <div class="displayName">
        <label for="displayName">帳號:</label>
        <input type="text" required v-model="displayName">
    </div>
    <div class="email">
    <label for="email">E-mail:</label>
    <input type="email" required v-model="email">
    </div>
    <div class="password">
      <label for="email">密碼:</label>
    <input type="password" required v-model="password">
    </div>
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
  setup(props, context) {

    // refs
    const displayName = ref('')
    const email = ref('')
    const password = ref('')
    // useSignup
    const { error, signup } = useSignup()
    
    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      if(!error.value){
            context.emit('signup')
          }
    }
    return { displayName, email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>