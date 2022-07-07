<template>
<div class="welcome container">
  <div v-if="showLogin">
    <LoginForm @login="enterChat" />
     <p>還沒有帳號嗎? <span @click="showLogin = false">加入!</span></p>
  </div>
  <div v-if="!showLogin">
    <SignupForm @signup="enterChat" />
    <p>已有帳號了嗎? <span @click="showLogin = true">立即登入</span> </p>
  </div>
</div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'


export default {
  name: 'Welcome',
  components: {
    SignupForm , LoginForm
  },
  setup(){
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }

    return { showLogin, enterChat }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 350px;
    margin: 20px auto;
  }
  .displayName, .email, .password{
    display: flex;
    align-items: center;
  }
  label{
    width:80px;

  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>
