<template>
  <v-layout>
    <v-flex xs4 offset-xs4>
      <panel title="Register">
        <form
          name="tab-tracker-form"
          autocomplete="off">
        <v-text-field
          label="Email"
          v-model="email" />
        <br>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          autocomplete="new-password" />
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="blue-grey darken-1"
          @click="register">
          Register
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
    async register () {
      try {
        const response = await AuthenticationService.register({
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
