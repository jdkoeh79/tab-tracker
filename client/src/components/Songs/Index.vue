<template>
<<<<<<< Updated upstream
 <v-layout>
    <v-flex xs4 v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs class="mt-4" />
    </v-flex>

    <v-flex :class="{
      'ml-4': isUserLoggedIn,
      'offset-xs2': !isUserLoggedIn
    }" class="xs8">
||||||| merged common ancestors
 <v-layout>
   <v-flex xs4>
     <songs-bookmarks />
     <recently-viewed-songs class="mt-4" />
   </v-flex>
    <v-flex xs8 class="ml-4">
=======
  <v-layout>
    <v-flex xs4
      v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs class="mt-4" />
    </v-flex>
    <v-flex xs8 class="ml-4"
      v-if="isUserLoggedIn">
      <songs-search-panel />
      <songs-panel class="mt-4" />
    </v-flex>
    <v-flex xs8 offset-xs2
      v-if="!isUserLoggedIn">
>>>>>>> Stashed changes
      <songs-search-panel />
      <songs-panel class="mt-4" />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'
import SongsSearchPanel from './SongsSearchPanel'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import { mapState } from 'vuex'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  }
}
</script>

<style scoped>
</style>
