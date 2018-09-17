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
            required
            :rules="[required]"
            v-model="song.tab" />

          <v-textarea
            label="Lyrics"
            required
            :rules="[required]"
            v-model="song.lyrics" />

        </panel>

        <div class="err" v-html="error" />
        <v-btn
          dark
          class="blue-grey darken-1"
          @click="create">
          Create Song
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

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
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log('Create Song error: ' + err)
      }
    }
  },
  components: {
    Panel
  }
}

</script>

<style scoped>
.err {
  color: red;
}
</style>
