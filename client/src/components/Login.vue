<template>
  <v-layout>
    <v-flex xs4 offset-xs4>
      <panel title="Login">
        <v-text-field
          label="Email"
          v-model="email" />
        <br>
        <v-text-field
          label="Password"
          type="password"
          v-model="password" />
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="blue-grey darken-1"
          @click="login">
          Login
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
