<template>
 <v-layout>
    <v-flex xs8 offset-xs2>
      <songs-search-panel />
      <songs-panel class="mt-4"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  }
}
</script>

<style scoped>
</style>
