<template>
 <v-layout>
    <v-flex xs8 offset-xs2>
      <panel title="Songs">

        <v-btn
          :to="{name: 'songs-create'}"
          slot="action"
          class="blue-grey darken-4"
          medium
          absolute
          right
          middle
          fab>
          <v-icon>add</v-icon>
        </v-btn>

        <div v-for="song in songs"
          :key="song.id">
          Title: {{song.title}}<br>
          Artist: {{song.artist}}<br>
          Album: {{song.album}}<br>
          Genre: {{song.genre}}<br><br>
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
