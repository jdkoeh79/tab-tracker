<template>
 <v-layout>
   <v-flex xs4>
     <songs-bookmarks />
   </v-flex>
    <v-flex xs8 class="ml-4">
      <songs-search-panel />
      <songs-panel class="mt-4" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'
import SongsSearchPanel from './SongsSearchPanel'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks
  }
}
</script>

<style scoped>
</style>
