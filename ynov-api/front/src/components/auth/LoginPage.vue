<template>
  <div class="q-pa-xl">
    <div class="flex flex-center column">
      <h1 class="q-mb-lg">Connectez-vous</h1>
      <q-card>
        <q-card-section>
          <q-input label="Email" type="email" outlined class="q-mb-md" v-model="form.email"/>
          <q-input label="Mot de passe" type="password" outlined class="q-mb-md" v-model="form.password" />
          <q-btn label="Se connecter" class="full-width" color="primary" @click="handleLogin"/>
          <p style="margin-bottom: 20px">Vous n'avez pas encore de compte? <a> <router-link to="/register">Inscrivez-vous </router-link></a></p>
          <p>Mot de passe oublié ? <a href="">Cliquez-ici</a></p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useUserStore } from 'stores/user-store'
import { Notify } from 'quasar'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const form = ref({
  email: '',
  password: ''
})

const handleLogin = async () => {
  try {
    await userStore.handleLogin(form.value)
    router.push({ name: 'dashboard' })
  } catch (e) {
    Notify.create('Error during register')
  }
}
</script>
