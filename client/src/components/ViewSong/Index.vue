<template>
  <div>
    <v-layout>
      <v-flex xs5 offset-xs1>
        <metadata :song="song" />
      </v-flex>

      <v-flex xs5 class="ml-4">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout class="mt-4">
      <v-flex xs5 offset-xs1>
        <lyrics :song="song" />
      </v-flex>

      <v-flex xs5 class="ml-4">
        <tab :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import YouTube from './YouTube'
import Tab from './Tab'
import Metadata from './Metadata'
import Lyrics from './Lyrics'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.fetchSong(songId)).data
  },
  components: {
    Metadata,
    Lyrics,
    Tab,
    YouTube
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  overflow: auto;
  padding: 40px;
}
</style>
