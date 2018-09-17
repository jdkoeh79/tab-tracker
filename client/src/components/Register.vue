<template>
  <v-layout>
    <v-flex xs4 offset-xs4>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue-grey darken-1" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
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
          <div class="error" v-html="error" />
          <br>
          <v-btn
            dark
            class="blue-grey darken-1"
            @click="register">
            Register
          </v-btn>
        </div>

      </div>
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
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
