<template>
 <v-layout>
    <v-flex xs4 v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs class="mt-4" />
    </v-flex>

    <v-flex :class="{
      'ml-4': isUserLoggedIn,
      'offset-xs2': !isUserLoggedIn
    }" class="xs8">
      <songs-search-panel />
      <songs-panel class="mt-4" />
    </v-flex>
  </v-layout>
</template>

<script>
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
