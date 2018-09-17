<template>
 <v-layout>
    <v-flex xs8 offset-xs2>
      <panel title="Songs">
        <div
          v-for="song in songs"
          :key="song.id">
          {{song.title}}
          {{song.artist}}
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.fetchSongs()).data
  }
}
</script>

<style scoped>
</style>
