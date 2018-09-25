<template>
  <panel title="Song Metadata" class="meta">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{song.artist}}
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

        <v-btn
          v-if="isUserLoggedIn && !isBookmarked"
          class="blue-grey darken-1"
          dark
          @click="bookmark">
          Bookmark
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && isBookmarked"
          class="blue-grey darken-1"
          dark
          @click="unbookmark">
          Unbookmark
        </v-btn>

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
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      isBookmarked: false
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'])
  },
  async mounted () {
    if (!this.isUserLoggedIn) {
      return
    }

    try {
      const bookmark = (await BookmarksService.index({
        songId: this.song.id,
        userId: this.$store.state.user.id
      })).data
      this.isBookmarked = !!bookmark
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async bookmark () {
      try {
        await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
      } catch (err) {
        console.log(err)
      }
    },
    async unbookmark () {
      try {
        await BookmarksService.delete({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
      } catch (err) {
        console.log(err)
      }
    }
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
