<template>
  <panel title="YouTube Video" class="youtube">
    <youtube
      :video-id="youtubeId"
      :player-width="550"
      :player-height="325">

    </youtube>
  </panel>
</template>

<script>
import YouTube from 'vue-youtube-embed'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    YouTube
  }
}
</script>

<style scoped>
.youtube {
  height: 400px;
}
</style>
