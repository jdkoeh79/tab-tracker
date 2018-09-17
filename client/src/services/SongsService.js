import Api from '@/services/Api'

export default {
  fetchSongs () {
    return Api().get('songs')
  }
}
