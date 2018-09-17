<template>
  <v-toolbar fixed class="blue-grey darken-1" dark>
    <v-toolbar-title class="mr-4">
      <router-link to="/" class="home">
        Tab Tracker
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat>
        <router-link to="songs">
          Browse
        </router-link>
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>

      <v-btn
        flat
        v-if="!$store.state.isUserLoggedIn">
        <router-link to="login">
          Login
        </router-link>
      </v-btn>

      <v-btn
        flat
        v-if="!$store.state.isUserLoggedIn">
        <router-link to="register">
          Sign Up
        </router-link>
      </v-btn>

      <v-btn
        flat
        v-if="$store.state.isUserLoggedIn"
        @click="logout">
        <router-link to="register">
          Log Out
        </router-link>
      </v-btn>

    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
.application a {
  color: white;
  text-decoration: none
}
</style>
