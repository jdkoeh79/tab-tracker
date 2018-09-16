<template>
  <v-toolbar fixed class="blue-grey darken-1" dark>
    <v-toolbar-title class="mr-4">
      <router-link to="/" class="home">
        Tab Tracker
      </router-link>
    </v-toolbar-title>

    <!-- TODO: Implement Me -->
    <!-- <v-toolbar-items>
      <v-btn flat>
        Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat>
        <router-link to="register">
          Sign Up
        </router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="login">
          Login
        </router-link>
      </v-btn>
      <v-btn flat>
        Logout
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>
