import Api from '@/services/Api'

export default {
  fetchSongs () {
    return Api().get('songs')
  },
  fetchSong (songId) {
    return Api().get(`songs/${songId}`)
  },
  post (song) {
    return Api().post('songs', song)
  },
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
