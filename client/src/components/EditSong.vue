<template>
  <v-layout>
    <v-flex xs4>
      <div>
        <panel title="Song Metadata">

          <v-text-field
            label="Title"
            required
            :rules="[required]"
            v-model="song.title" />

          <v-text-field
            label="Artist"
            required
            :rules="[required]"
            v-model="song.artist" />

          <v-text-field
            label="Genre"
            required
            :rules="[required]"
            v-model="song.genre" />

          <v-text-field
            label="Album"
            required
            :rules="[required]"
            v-model="song.album" />

          <v-text-field
            label="Album Image Url"
            required
            :rules="[required]"
            v-model="song.albumImageUrl" />

          <v-text-field
            label="YouTube ID"
            required
            :rules="[required]"
            v-model="song.youtubeId" />

        </panel>
      </div>
    </v-flex>
    <v-flex xs8>
      <div>
        <panel
          title="Song Structure"
          required
          :rules="[required]"
          class="ml-4">

          <v-textarea
            label="Tab"
            class="textarea"
            rows="15"
            required
            :rules="[required]"
            v-model="song.tab" />

          <v-textarea
            label="Lyrics"
            class="textarea"
            rows="15"
            required
            :rules="[required]"
            v-model="song.lyrics" />

        </panel>

        <div class="danger-alert" v-html="error" />
        <router-link v-if="song.id"
          :to="{
            name: 'song',
            params: {songId: song.id}
          }">
          <v-btn
            dark
            class="blue-grey darken-1">
            Cancel
          </v-btn>
        </router-link>
        <v-btn
          dark
          class="blue-grey darken-1"
          @click="save">
          Save Song
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log('Edit Song error: ' + err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.fetchSong(songId)).data
    } catch (err) {
      console.log('Fetch Song error: ' + err)
    }
  }
}

</script>

<style scoped>
.textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  border-style: none;
  overflow: auto;
}

a {
  text-decoration: none;
}
</style>
