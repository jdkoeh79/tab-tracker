<template>
  <panel title="Song Metadata" class="meta">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>

        <router-link v-if="song.id"
          :to="{
            name: 'song-edit',
            params: {songId: song.id}
          }">
          <v-btn
            class="blue-grey darken-1"
            dark>
            Edit
          </v-btn>
        </router-link>

      </v-flex>

      <v-flex xs6>
        <img :src="song.albumImageUrl" alt="Album Cover" class="album-image">
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import Panel from '../Panel'

export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
.song-title {
  font-size: 30px
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 85%;
  margin: 0 auto;
}

.meta {
  height: 400px;
}

a {
  text-decoration: none;
}
</style>
