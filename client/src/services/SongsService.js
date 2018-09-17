import Api from '@/services/Api'

export default {
  fetchSongs () {
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  }
}
