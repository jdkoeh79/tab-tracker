<template>
  <v-layout>
    <v-flex xs4 offset-xs4>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue-grey darken-1" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            v-model="email" />
          <br>
          <v-text-field
            type="password"
            v-model="password"
            label="Password" />
          <br>
          <div class="err" v-html="error" />
          <br>
          <v-btn
            dark
            class="blue-grey darken-1"
            @click="login">
            Login
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
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.err {
  color: red;
}
</style>
